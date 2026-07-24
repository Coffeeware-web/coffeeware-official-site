import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import {
  CalendarDays,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  ChevronRight as ArrowRight,
  ArrowLeft,
  Check,
} from 'lucide-react'
import SiteHeader from '../landing/SiteHeader'
import SiteFooter from '../landing/SiteFooter'
import Reveal from '../landing/Reveal'
import { getTurnstileToken } from '../../lib/turnstile'

type RequestType = 'call' | 'email'

const API = (import.meta.env.VITE_API_BASE_URL as string | undefined) || ''

const WEEKDAYS = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom']
const MONTHS = [
  'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
  'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre',
]

export default function BookingPage() {
  const [type, setType] = useState<RequestType>('call')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return
    const fd = new FormData(e.currentTarget)

    // Honeypot: se compilato è un bot. Fingiamo successo senza inviare nulla.
    if ((fd.get('website') as string)?.trim()) {
      setSubmitted(true)
      window.scrollTo(0, 0)
      return
    }

    setError(null)
    setLoading(true)
    try {
      const token = await getTurnstileToken().catch(() => {
        throw new Error('Verifica anti-bot non riuscita. Riprova.')
      })

      const payload = {
        type,
        nome: (fd.get('nome') as string) || '',
        cognome: (fd.get('cognome') as string) || '',
        telefono: (fd.get('telefono') as string) || '',
        email: (fd.get('email') as string) || '',
        data: (fd.get('data') as string) || '',
        ora: (fd.get('ora') as string) || '',
        messaggio: (fd.get('messaggio') as string) || '',
        website: '',
        'cf-turnstile-response': token,
      }

      const res = await fetch(`${API}/api/email/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const dataRes = await res.json().catch(() => ({}))
      if (!res.ok || !dataRes.ok) {
        throw new Error(
          dataRes.message || 'Invio non riuscito. Riprova più tardi.',
        )
      }

      setSubmitted(true)
      window.scrollTo(0, 0)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Invio non riuscito. Riprova più tardi.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-cw-white">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
        {submitted ? (
          <SuccessState
            onReset={() => {
              setSubmitted(false)
              setType('call')
              setError(null)
            }}
          />
        ) : (
          <>
            <Reveal>
              <Link
                to="/contatti"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-cw-gray transition-colors hover:text-cw-black"
              >
                <ArrowLeft size={16} />
                Torna ai contatti
              </Link>
              <h1 className="mt-4 text-balance font-display text-4xl font-bold leading-tight text-cw-black md:text-5xl">
                Prenota una call
                <span className="text-cw-secondary">;</span>
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-cw-gray">
                Scegli come preferisci iniziare: prenota una call e trova
                subito uno slot, oppure scrivici in due righe cosa vi serve.
              </p>
            </Reveal>

            {/* Step 1 — request type (mutually exclusive) */}
            <Reveal delay={0.05}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <TypeCard
                  active={type === 'call'}
                  onClick={() => setType('call')}
                  icon={<CalendarDays size={22} />}
                  title="Prenota una call"
                  desc="Scegli un giorno e ti richiamiamo noi."
                />
                <TypeCard
                  active={type === 'email'}
                  onClick={() => setType('email')}
                  icon={<MessageSquare size={22} />}
                  title="Scrivici via e-mail"
                  desc="Raccontaci il progetto, ti rispondiamo."
                />
              </div>
            </Reveal>

            {/* Step 2 — exclusive form based on the first choice */}
            <AnimatePresence mode="wait">
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                {type === 'call' ? (
                  <CallForm onSubmit={handleSubmit} loading={loading} />
                ) : (
                  <EmailForm onSubmit={handleSubmit} loading={loading} />
                )}
              </motion.div>
            </AnimatePresence>

            {error && (
              <p
                role="alert"
                className="mt-4 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            <p className="mt-6 text-xs leading-relaxed text-cw-gray">
              Inviando accetti di essere ricontattato. I dati servono solo per
              risponderti, niente newsletter.
            </p>
          </>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}

function Honeypot() {
  // Campo trappola per i bot: nascosto agli umani, ignorato dagli screen reader.
  return (
    <input
      type="text"
      name="website"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      className="hidden"
    />
  )
}

function TypeCard({
  active,
  onClick,
  icon,
  title,
  desc,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex flex-col items-start gap-3 rounded-2xl border p-5 text-left transition-all ${
        active
          ? 'border-cw-secondary bg-cw-secondary/5 shadow-sm'
          : 'border-cw-black/10 bg-white/60 hover:border-cw-black/25'
      }`}
    >
      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
          active ? 'bg-cw-secondary text-white' : 'bg-cw-black/5 text-cw-black/70'
        }`}
      >
        {icon}
      </span>
      <span className="font-display text-lg font-semibold text-cw-black">{title}</span>
      <span className="text-sm leading-relaxed text-cw-gray">{desc}</span>
    </button>
  )
}

function CallForm({
  onSubmit,
  loading,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  loading: boolean
}) {
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  const firstWeekday = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day)
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    return d < start
  }
  const changeMonth = (delta: number) => {
    setSelectedDay(null)
    const next = new Date(viewYear, viewMonth + delta, 1)
    setViewYear(next.getFullYear())
    setViewMonth(next.getMonth())
  }

  const selectedDate = selectedDay
    ? `${String(selectedDay).padStart(2, '0')}/${String(viewMonth + 1).padStart(2, '0')}/${viewYear}`
    : ''

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <Honeypot />
      <input type="hidden" name="data" value={selectedDate} readOnly />

      <div className="rounded-2xl border border-cw-black/10 bg-white/60 p-4 md:p-5">
        <p className="mb-3 text-sm font-medium text-cw-black/80">Scegli un giorno</p>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-cw-black/60 transition-colors hover:bg-cw-black/5"
            aria-label="Mese precedente"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-sm font-semibold text-cw-black">
            {MONTHS[viewMonth]} {viewYear}
          </span>
          <button
            type="button"
            onClick={() => changeMonth(1)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-cw-black/60 transition-colors hover:bg-cw-black/5"
            aria-label="Mese successivo"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1 text-center">
          {WEEKDAYS.map((w) => (
            <span key={w} className="py-1 text-xs font-medium text-cw-gray">
              {w}
            </span>
          ))}
          {Array.from({ length: firstWeekday }).map((_, i) => (
            <span key={`pad-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            const disabled = isPast(day)
            const active = selectedDay === day
            return (
              <button
                key={day}
                type="button"
                disabled={disabled}
                onClick={() => setSelectedDay(day)}
                className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors ${
                  active
                    ? 'bg-cw-secondary font-semibold text-white'
                    : disabled
                      ? 'cursor-not-allowed text-cw-black/25'
                      : 'text-cw-black/80 hover:bg-cw-black/5'
                }`}
              >
                {day}
              </button>
            )
          })}
        </div>
      </div>

      {/* Orario preferito — digitabile, subito sotto la scelta del giorno */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="ora" className="text-sm font-medium text-cw-black/80">
          Orario preferito
        </label>
        <input
          id="ora"
          name="ora"
          type="time"
          className="w-full rounded-xl border border-cw-black/15 bg-white/60 px-4 py-2.5 text-sm text-cw-black outline-none transition-colors focus:border-cw-primary sm:w-48"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Field label="Nome" name="nome" required />
        <Field label="Cognome" name="cognome" required />
      </div>
      <Field label="Telefono" name="telefono" type="tel" required />

      <SubmitButton
        loading={loading}
        label={
          selectedDay
            ? `Conferma per il ${selectedDay} ${MONTHS[viewMonth]}`
            : 'Prenota la call'
        }
      />
    </form>
  )
}

function EmailForm({
  onSubmit,
  loading,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  loading: boolean
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Honeypot />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Field label="Nome" name="nome" required />
        <Field label="Cognome" name="cognome" required />
      </div>
      <Field label="E-mail" name="email" type="email" required />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="messaggio" className="text-sm font-medium text-cw-black/80">
          Messaggio
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={4}
          required
          className="rounded-xl border border-cw-black/15 bg-white/60 px-4 py-2.5 text-sm text-cw-black outline-none transition-colors placeholder:text-cw-black/35 focus:border-cw-primary"
          placeholder="Cosa vorreste risolvere o provare?"
        />
      </div>
      <SubmitButton loading={loading} label="Invia richiesta" />
    </form>
  )
}

function SubmitButton({ label, loading }: { label: string; loading: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-cw-secondary px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? 'Invio in corso…' : label}
      {!loading && (
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
      )}
    </button>
  )
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center py-16 text-center">
      <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-cw-secondary/15 text-cw-secondary">
        <Check size={30} />
      </span>
      <h1 className="mt-6 font-display text-3xl font-bold text-cw-black">
        Grazie, ci sentiamo presto
        <span className="text-cw-secondary">;</span>
      </h1>
      <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-cw-gray">
        Abbiamo ricevuto la tua richiesta: ti rispondiamo entro 24 ore.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 rounded-full bg-cw-primary px-6 py-3 text-sm font-semibold text-cw-white transition-transform hover:-translate-y-0.5"
      >
        Fai un&apos;altra richiesta
      </button>
    </div>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-cw-black/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-cw-black/15 bg-white/60 px-4 py-2.5 text-sm text-cw-black outline-none transition-colors placeholder:text-cw-black/35 focus:border-cw-primary"
      />
    </div>
  )
}
