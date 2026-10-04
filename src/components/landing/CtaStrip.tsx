import { Coffee } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CtaStrip() {
  return (
    <section id="contatti" className="relative scroll-mt-24 overflow-hidden">
      <img
        src="/img/cta-coffee.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div aria-hidden className="absolute inset-0 bg-cw-primary/85" />

      <div className="relative mx-auto max-w-4xl px-5 py-16 text-center md:px-8 md:py-24">
        <Reveal>
          <h2 className="text-balance font-display text-4xl font-bold leading-[1.1] text-cw-white md:text-5xl">
            Facciamo due chiacchiere, beviamoci un caffè insieme
            <span className="text-cw-secondary">;</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-md leading-relaxed text-cw-white/75">
            Se ogni settimana rifate a mano un lavoro che potrebbe farsi da
            solo, parliamone. Mezz&apos;ora basta per capire se c&apos;è
            qualcosa da fare, senza impegno.
          </p>
          <Link
            to="/prenota"
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-cw-secondary px-8 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <Coffee size={20} />
            Prendiamoci mezz&apos;ora
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
