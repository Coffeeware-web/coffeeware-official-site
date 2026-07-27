import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Reveal from './Reveal'
import PenUnderline from './PenUnderline'

const PAIN_POINTS: { before: string; mark: string }[] = [
  { before: 'Ordini ricopiati ', mark: 'a mano' },
  { before: 'Informazioni nella testa di ', mark: 'una persona sola' },
  { before: 'Il database  vive ', mark: 'su un foglio Excel' },
  { before: 'Errori sempre ', mark: 'nello stesso punto' },
  { before: 'Listini aggiornati ', mark: 'a memoria' },
  { before: 'Preventivo svolto ', mark: 'copiando quello vecchio' },
  { before: 'Prenotazioni effettuate ', mark: 'tramite Whatsapp' },
  { before: 'Disponibilità che ', mark: 'nessuno sa davvero' },
  { before: 'Ordini confermati ', mark: 'al telefono' },
]

const INTERVAL = 2200

function Marker({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.55, delay: 0.30, ease: 'easeOut' }}
        className="absolute inset-x-[-0.15em] bottom-[0.05em] top-[45%] z-0 origin-left rounded-[2px] bg-cw-secondary/25"
      />
      <span className="relative z-10">{children}</span>
    </span>
  )
}

export default function IntroProblema() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % PAIN_POINTS.length),
      INTERVAL,
    )
    return () => clearInterval(id)
  }, [])

  const point = PAIN_POINTS[index]

  return (
    <section className="bg-[#F3DCAF] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-4xl font-semibold leading-tight text-cw-black md:text-4xl">
            Carta, fogli di calcolo ed email reggono l&apos;azienda.{' '}
            <span className="text-cw-secondary">
              Finché non crescono i volumi.
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
          <div
            className="mt-12 flex min-h-[3.5rem] items-center justify-center md:min-h-[4rem]"
            aria-live="polite"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-3xl font-medium leading-snug text-cw-black md:text-3xl"
              >
                {point.before}
                <Marker>{point.mark}</Marker>
              </motion.p>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-12 text-lg font-semibold leading-relaxed text-cw-black">
            <PenUnderline>Noi partiamo esattamente da lì.</PenUnderline>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
