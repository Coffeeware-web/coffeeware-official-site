import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import {ArrowLeft, ArrowRight, Check} from 'lucide-react'
import { PILLARS } from '../data/services'
import type { Pillar } from '../data/services'

/*function PillarCard({ pillar }: { pillar: Pillar }) {
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
        <Reveal className="">
          <h2 className="text-balance font-display font-bold text-4xl leading-[1.1] text-cw-black md:text-5xl">
            Cosa possiamo costruire per voi.
          </h2>
          <h2 className="mt-1 text-balance font-display font-semibold text-4xl leading-[1.1] md:text-5xl text-cw-secondary">
            I tre pilastri del nostro lavoro;
          </h2>
          <p className="mt-5 max-w-4xl text-balance text-lg leading-relaxed text-cw-gray">
           Togliere il lavoro manuale che vi rallenta, aggiungere strumenti che vi fanno vendere,
            o tenere in piedi la base su cui girano tutti e due? Da dove conviene partire lo capiamo guardando
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
*/

function ServiceListElement({ text }: { text: string }) {
  return (
      <div className={"py-2 px-3 grid grid-cols-12 bg-white/60 rounded-3xl border-cw-black/15 border-1 my-1"}>
        <div className={"col-span-1"}>
            <span
                className={`text-cw-secondary`}>
          <Check size={25}/>
        </span>
        </div>
        <div className={"font-bold font-display col-span-10"}>
          {text}
        </div>
      </div>
  );
}

function PillarSlide({ pillar }: { pillar: Pillar }) {
  const Icon = pillar.icon

  return (
      <div className={"grid gap-5 md:grid-cols-12 md:items-center"}>
        <div className={"order-2 md:order-1 md:col-span-6"}>
          {pillar.items.slice(0, 5).map((item) => (
              <ServiceListElement key={item.title} text={item.title} />
          ))}
        </div>
        <div className={"order-1 md:order-2 md:col-span-5"}>
          <span
              className={"mb-2 inline-flex items-center gap-2 rounded-full bg-cw-secondary px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white"}>
            <Icon size={15} className={"shrink-0 text-white"} aria-hidden />
            {pillar.kicker}
          </span>
          <h3 className={"font-display font-bold text-4xl text-cw-black "}>
            {pillar.title}
            <span className={"text-cw-secondary"}>;</span>
          </h3>
          <p className={"text-gray-600 mt-3 text-md"}>
            {pillar.blurb}
          </p>
        </div>
      </div>
  );
}

export default function Servizi() {
  const [index, setIndex] = useState(0)
  const [hint, setHint] = useState(true)
  const count = PILLARS.length

  const go = (next: number) => {
    setHint(false)
    setIndex((next + count) % count)
  }

  return (
      <section id="servizi" className="scroll-mt-24 bg-cw-white pt-30 pb-15 md:pt-28 md:pb-15">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <h2 className="mb-20 text-center font-display font-bold text-4xl leading-[1.1] text-cw-black md:text-5xl">
              Cosa possiamo costruire per voi<span className={"text-cw-secondary"}>;</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-5 md:grid-cols-12 md:items-center">
            <div className="overflow-hidden md:col-span-11">
              <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {PILLARS.map((pillar) => (
                    <div key={pillar.title} className="w-full shrink-0 px-1">
                      <PillarSlide pillar={pillar} />
                    </div>
                ))}
              </div>
            </div>

            <div className="flex flex-row-reverse justify-center md:col-span-1 md:flex-col md:justify-center gap-3">
              <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Slide successiva"
                  className={"group inline-flex h-11 w-11 items-center justify-center rounded-full border border-cw-black/15 text-cw-black bg-cw-secondary transition-colors hover:border-cw-black/60"}
              >
                  <ArrowRight
                      size={20}
                      className={`transition-transform group-hover:translate-x-1 ${
                          hint ? 'animate-nudge-x' : ''
                      }`}
                  />
              </button>
              <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Slide precedente"
                  className={"inline-flex h-11 w-11 items-center justify-center rounded-full border border-cw-black/15 text-cw-black bg-white transition-colors hover:border-cw-black/60"}
              >
                <ArrowLeft size={20} />
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex justify-center">
              <Link to="/servizi"
                    className="group inline-flex items-center gap-2 rounded-full border border-cw-black/15 bg-white/60 px-5 py-2 text-sm font-semibold text-cw-black transition-colors hover:border-cw-black/30"
              >
                  Vedi tutti i servizi
              </Link>
          </Reveal>

          <Reveal delay={0.25} className="mt-10 flex items-center justify-center gap-2.5">
            {PILLARS.map((pillar, i) => (
                <button
                    key={pillar.title}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Vai a ${pillar.title}`}
                    aria-current={i === index}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === index
                            ? 'w-7 bg-cw-secondary'
                            : 'w-2.5 bg-cw-black/20 hover:bg-cw-black/40'
                    }`}
                />
            ))}
          </Reveal>
        </div>
      </section>
  );
}
