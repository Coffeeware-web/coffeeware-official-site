import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'motion/react'
import { Workflow, Gem, CheckCircle2, Focus, MessagesSquare } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Value = {
  title: string
  description: string
  Icon: LucideIcon
}

const VALUES: Value[] = [
  {
    title: 'Partiamo dal vostro processo',
    description:
      'Niente pacchetti da adattare: costruiamo su come lavorate davvero, riga dopo riga. Il punto di partenza siete voi, non un template.',
    Icon: Workflow,
  },
  {
    title: 'Software che si usa davvero',
    description:
      'Costruiamo strumenti che finiscono usati ogni giorno, non nel cassetto. Se non vi semplifica il lavoro, non è finito.',
    Icon: CheckCircle2,
  },
  {
    title: 'Cura in ogni livello',
    description:
      'Dall’interfaccia ai dati, curiamo ogni strato. Le piccole cose sono quelle che vi fanno perdere o guadagnare tempo.',
    Icon: Gem,
  },
  {
    title: 'Diretti, senza intermediari',
    description:
      'Parlate sempre con chi scrive il codice: aggiornamenti chiari, decisioni rapide, nessun reparto in mezzo.',
    Icon: MessagesSquare,
  },
  {
    title: 'Poche aziende, più attenzione',
    description:
      'Seguiamo poche aziende alla volta, di persona, nel Nord-Est. Preferiamo fare bene poche cose che spargerci su troppe.',
    Icon: Focus,
  },
]

export default function TeamValues() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const lastIndex = VALUES.length - 1
  // Move the vertical strip up as the user scrolls through the pinned section.
  const stripY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${lastIndex * 100}%`],
  )

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(lastIndex, Math.max(0, Math.round(v * lastIndex)))
    setActive(idx)
  })

  return (
    <section
      ref={sectionRef}
      aria-label="Valori e punti di forza"
      className="relative bg-cw-white"
      style={{ height: `calc(100vh + ${lastIndex * 60}vh)` }}
    >
      {/* Pinned viewport */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
          {/* Left: title column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-balance font-display text-4xl font-bold leading-[1.05] text-cw-black md:text-5xl">
              Valori e punti di forza
              <span className="text-cw-secondary">;</span>
            </h2>
            <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-cw-gray">
              I principi che guidano ogni progetto che facciamo. Scorri per
              scoprirli uno alla volta.
            </p>

            {/* Progress indicator */}
            <div className="mt-8 flex items-center gap-3">
              {VALUES.map((v, i) => (
                <span
                  key={v.title}
                  aria-hidden
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? 'w-8 bg-cw-secondary'
                      : 'w-3 bg-cw-black/15'
                  }`}
                />
              ))}
            </div>
            <p className="mt-3 text-sm font-medium text-cw-gray">
              <span className="text-cw-black">{String(active + 1).padStart(2, '0')}</span>
              {' / '}
              {String(VALUES.length).padStart(2, '0')}
            </p>
          </div>

          {/* Right: vertical carousel window */}
          <div className="relative h-[360px] overflow-hidden md:h-[440px]">
            <motion.div style={{ y: stripY }} className="h-full">
              {VALUES.map((v, i) => {
                const Icon = v.Icon
                return (
                  <div
                    key={v.title}
                    className="flex h-full flex-col justify-center"
                  >
                    <motion.article
                      animate={{
                        opacity: i === active ? 1 : 0.35,
                        scale: i === active ? 1 : 0.96,
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="rounded-4xl border border-cw-black/15 bg-white/60 p-8 transition-colors hover:border-cw-secondary md:p-10"
                    >
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cw-secondary/15 text-cw-secondary">
                        <Icon size={26} />
                      </span>
                      <h3 className="mt-6 font-display text-2xl font-semibold text-cw-black md:text-3xl">
                        {v.title}
                      </h3>
                      <p className="mt-4 text-pretty text-base leading-relaxed text-cw-gray md:text-lg">
                        {v.description}
                      </p>
                      <span className="mt-8 block font-display text-6xl font-extrabold leading-none text-cw-secondary/15">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </motion.article>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
