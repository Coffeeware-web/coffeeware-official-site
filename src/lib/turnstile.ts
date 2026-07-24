// Cloudflare Turnstile — token invisibile, ottenuto su richiesta (al submit).
// Nessun widget visibile: si renderizza in modalità "invisible", si esegue e
// si rimuove appena si ha il token. Se manca la site key (dev), ritorna stringa
// vuota e il server salta la verifica.

type TurnstileRenderOptions = {
  sitekey: string
  size?: 'invisible' | 'normal' | 'compact'
  callback?: (token: string) => void
  'error-callback'?: () => void
  'timeout-callback'?: () => void
}

type TurnstileApi = {
  render: (el: HTMLElement, opts: TurnstileRenderOptions) => string
  execute: (id: string) => void
  remove: (id: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

const SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

let scriptPromise: Promise<void> | null = null

function loadScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve()
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = SCRIPT_SRC
    s.async = true
    s.defer = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('Impossibile caricare Turnstile'))
    document.head.appendChild(s)
  })
  return scriptPromise
}

export async function getTurnstileToken(): Promise<string> {
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined
  // Senza site key (es. sviluppo locale) non blocchiamo: il server, se privo di
  // secret, salta comunque la verifica.
  if (!siteKey) return ''

  await loadScript()
  const turnstile = window.turnstile
  if (!turnstile) throw new Error('Turnstile non disponibile')

  return new Promise<string>((resolve, reject) => {
    const container = document.createElement('div')
    container.style.position = 'fixed'
    container.style.width = '0'
    container.style.height = '0'
    container.style.overflow = 'hidden'
    container.style.opacity = '0'
    document.body.appendChild(container)

    let widgetId: string | undefined
    const cleanup = () => {
      try {
        if (widgetId) turnstile.remove(widgetId)
      } catch {
        // ignora
      }
      container.remove()
    }

    const timer = window.setTimeout(() => {
      cleanup()
      reject(new Error('Verifica anti-bot scaduta'))
    }, 15000)

    try {
      widgetId = turnstile.render(container, {
        sitekey: siteKey,
        size: 'invisible',
        callback: (token: string) => {
          window.clearTimeout(timer)
          cleanup()
          resolve(token)
        },
        'error-callback': () => {
          window.clearTimeout(timer)
          cleanup()
          reject(new Error('Verifica anti-bot fallita'))
        },
        'timeout-callback': () => {
          window.clearTimeout(timer)
          cleanup()
          reject(new Error('Verifica anti-bot scaduta'))
        },
      })
      turnstile.execute(widgetId)
    } catch (e) {
      window.clearTimeout(timer)
      cleanup()
      reject(e instanceof Error ? e : new Error('Errore Turnstile'))
    }
  })
}
