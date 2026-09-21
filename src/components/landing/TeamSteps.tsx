import { Search, PencilRuler, Code2, Rocket, LifeBuoy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from './Reveal'

type Step = {
  title: string
  description: string
  Icon: LucideIcon
}

const STEPS: Step[] = [
  {
    title: 'Ascolto e analisi',
    description:
      'Partiamo dalle vostre esigenze: capiamo obiettivi, vincoli e utenti prima di scrivere una sola riga di codice.',
    Icon: Search,
  },
  {
    title: 'Design e prototipo',
    description:
      'Trasformiamo le idee in flussi e interfacce concrete, così vedete il prodotto prima ancora che venga costruito.',
    Icon: PencilRuler,
  },
  {
    title: 'Sviluppo su misura',
    description:
      'Costruiamo la soluzione riga dopo riga, con tecnologie moderne e aggiornamenti costanti sul lavoro svolto.',
    Icon: Code2,
  },
  {
    title: 'Rilascio',
    description:
      'Mettiamo online il prodotto testato e ottimizzato, curando performance, sicurezza e ogni dettaglio finale.',
    Icon: Rocket,
  },
  {
    title: 'Supporto continuo',
    description:
      'Non spariamo dopo il lancio: restiamo al vostro fianco per far evolvere e crescere il prodotto nel tempo.',
    Icon: LifeBuoy,
  },
]

export default function TeamSteps() {
  return (
    <section aria-label="Come lavoriamo" className="bg-cw-white pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-4xl font-bold leading-[1.05] text-cw-black md:text-5xl">
            Il percorso in cinque step
            <span className="text-cw-secondary">;</span>
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-cw-gray">
            Dal primo confronto al supporto post-rilascio, seguiamo un processo
            chiaro e collaudato.
          </p>
        </div>

        {/* Steps path */}
        <div className="relative mt-16">
          {/* Desktop snaking dashed connector */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 100 120"
            preserveAspectRatio="none"
          >
            <path
              d="M 27 12 C 27 24, 73 24, 73 36 C 73 48, 27 48, 27 60 C 27 72, 73 72, 73 84 C 73 96, 27 96, 27 108"
              fill="none"
              stroke="var(--color-cw-secondary)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="1 5"
              vectorEffect="non-scaling-stroke"
              opacity={0.55}
            />
          </svg>

          <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
            {STEPS.map((s, i) => {
              const Icon = s.Icon
              const isLeft = i % 2 === 0
              return (
                <li
                  key={s.title}
                  className={
                    isLeft
                      ? 'md:col-start-1'
                      : 'md:col-start-2 md:row-start-auto'
                  }
                  style={{ gridRow: `${i + 1}` }}
                >
                  <Reveal delay={i * 0.06}>
                    <article className="group relative flex gap-5 rounded-4xl border border-cw-black/15 bg-white/60 p-6 transition-colors hover:border-cw-secondary md:p-7">
                      <div className="flex shrink-0 flex-col items-center">
                        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cw-secondary/15 text-cw-secondary">
                          <Icon size={26} />
                          <span className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cw-secondary text-xs font-bold text-cw-white">
                            {i + 1}
                          </span>
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-xl font-semibold text-cw-black md:text-2xl">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-pretty text-sm leading-relaxed text-cw-gray md:text-base">
                          {s.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
