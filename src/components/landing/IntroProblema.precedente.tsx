import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Reveal from './Reveal'
import PenUnderline from './PenUnderline'

const PAIN_POINTS: { before: string; mark: string }[] = [
  { before: 'Ordini ricopiati ', mark: 'a mano' },
  { before: 'Informazioni nella testa di ', mark: 'una persona sola' },
  { before: 'Il database che vive ', mark: 'su un foglio Excel' },
  { before: 'Errori sempre ', mark: 'nello stesso punto' },
  { before: 'Listini aggiornati ', mark: 'a memoria' },
  { before: 'Preventivo svolto ', mark: 'copiando quello vecchio' },
  { before: 'Prenotazioni effettuate ', mark: 'tramite Whatsapp' },
  { before: 'Disponibilità che ', mark: 'nessuno sa davvero' },
  { before: 'Ordini confermati ', mark: 'al telefono' },
]

const INTERVAL = 2800

function Marker({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
        className="absolute inset-x-[-0.15em] bottom-[0.05em] top-[45%] z-0 origin-left rounded-[2px] bg-cw-secondary/25"
      />
      <span className="relative z-10">{children}</span>
    </span>
  )
}

export default function IntroProblema() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduce) return
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % PAIN_POINTS.length),
      INTERVAL,
    )
    return () => clearTimeout(id)
  }, [index, reduce])

  const point = PAIN_POINTS[index]

  return (
    <section className="bg-cw-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-4xl font-bold leading-[1.1] text-cw-black md:text-5xl">
            Carta, fogli di calcolo ed email reggono l&apos;azienda.{' '}
            <span className="text-cw-secondary">
              Finché non crescono i volumi;
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-cw-gray">
            Poi gli errori iniziano a costare, e ogni settimana qualcuno rifà a
            mano un lavoro che potrebbe farsi da solo.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {/* Altezza minima pari alla frase più lunga andata a capo, così il
              resto della sezione non salta quando cambia il testo. */}
          <div
            className="mt-12 flex min-h-[7.5rem] items-center justify-center sm:min-h-[5rem]"
            aria-live="polite"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-balance font-display text-3xl font-medium leading-snug text-cw-black md:text-4xl"
              >
                {point.before}
                <Marker>{point.mark}</Marker>
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-1.5">
            {PAIN_POINTS.map((p, i) => {
              const active = i === index
              return (
                <button
                  key={p.mark}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Mostra: ${p.before}${p.mark}`}
                  aria-current={active}
                  className={`relative h-1.5 overflow-hidden rounded-full bg-cw-black/15 transition-[width] duration-300 ${
                    active ? 'w-8' : 'w-1.5 hover:bg-cw-black/30'
                  }`}
                >
                  {active && (
                    <motion.span
                      aria-hidden
                      initial={{ scaleX: reduce ? 1 : 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: reduce ? 0 : INTERVAL / 1000,
                        ease: 'linear',
                      }}
                      className="absolute inset-0 origin-left rounded-full bg-cw-secondary"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-12 text-2xl font-display font-bold leading-relaxed text-cw-black">
            <PenUnderline>Noi partiamo esattamente da lì.</PenUnderline>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
