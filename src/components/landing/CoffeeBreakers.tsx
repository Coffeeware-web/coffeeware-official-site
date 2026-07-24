import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function CoffeeBreakers() {
  return (
    <section id="coffee-breakers" className="scroll-mt-24 bg-[#FFFFF0] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-bold text-cw-black md:text-4xl">
            Chi sono i Coffee Breakers
            <span className="text-cw-secondary">;</span>
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-cw-gray">
            Due sviluppatori che, davanti a un caffè, smontano il vostro
            processo e capiscono dove si inceppa. Studio piccolo e diretto,
            poche aziende alla volta, di persona quando serve, nel Nord-Est tra
            Trentino, Veneto e Friuli.
          </p>
          <Link
            to="/team"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-cw-primary px-7 py-3.5 text-base font-semibold text-cw-white transition-transform hover:-translate-y-0.5"
          >
            Conosci il team
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-cw-black/10">
            <img
              src="/img/coffee_breakers.png"
              alt="I due fondatori di Coffeeware al lavoro nello studio"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-6 -right-4 select-none font-display text-[10rem] font-extrabold leading-none text-cw-secondary/20"
            >
              ;
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
