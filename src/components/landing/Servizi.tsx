import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Reveal from './Reveal'
import { PILLARS } from '../data/services'
import type { Pillar } from '../data/services'

function PillarCard({ pillar }: { pillar: Pillar }) {
  const Icon = pillar.icon
  return (
    <div
      className={`flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 md:p-8 ${
        pillar.flag
          ? 'border-cw-secondary/40 bg-cw-secondary/[0.12] shadow-[0_6px_24px_-6px_rgba(228,85,42,0.28)]'
          : 'border-cw-black/[0.06] bg-white shadow-[0_4px_20px_-6px_rgba(28,43,48,0.12)] hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(28,43,48,0.18)]'
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
            pillar.flag
              ? 'bg-cw-secondary text-cw-white'
              : 'bg-cw-secondary/15 text-cw-secondary'
          }`}
        >
          <Icon size={24} />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-cw-secondary">
          {pillar.kicker}
        </span>
      </div>

      <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-cw-black">
        {pillar.title}
        <span className="text-cw-secondary">;</span>
      </h3>
      <p className="mt-3 text-pretty text-base leading-relaxed text-cw-gray">
        {pillar.blurb}
      </p>

      <ul className="mt-6 space-y-2.5 border-t border-cw-black/10 pt-6">
        {pillar.items.slice(0, 4).map((item) => (
          <li
            key={item.title}
            className="flex items-start gap-2.5 text-[15px] leading-snug text-cw-black"
          >
            <Check
              size={18}
              className="mt-0.5 shrink-0 text-cw-secondary"
              aria-hidden
            />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Servizi() {
  return (
    <section id="servizi" className="scroll-mt-24 bg-cw-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance font-display text-4xl font-bold text-cw-black md:text-4xl">
            Cosa possiamo costruire per voi
            <span className="text-cw-secondary">;</span>
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-cw-gray">
           Togliere il lavoro manuale che vi rallenta, aggiungere strumenti che vi fanno vendere,
            tenere in piedi la base su cui girano tutti e due. Da dove conviene partire lo capiamo guardando
            come lavorate.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:items-stretch">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08} className="h-full">
              <PillarCard pillar={pillar} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Link
            to="/servizi"
            className="group inline-flex items-center gap-2 rounded-full border border-cw-black/15 bg-white/60 px-7 py-3.5 text-base font-semibold text-cw-black transition-colors hover:border-cw-black/30"
          >
            Vedi tutti i servizi
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
