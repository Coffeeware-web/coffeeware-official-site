import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cw-primary pt-28 pb-20 text-cw-white md:pt-36 md:pb-28"
    >
      {/* subtle brand semicolon motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[26rem] font-extrabold leading-none text-cw-secondary/10 md:block"
      >
        ;
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-cw-secondary"
        >
          Software su misura <span className="text-cw-white/50">·</span> Food
          &amp; Beverage
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl"
        >
          Software su misura per chi produce food{' '}
          <span className="text-cw-secondary">&amp;</span> beverage
          <span className="text-cw-secondary">;</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-pretty text-md leading-relaxed text-cw-white/75 md:text-xl"
        >
          Togliamo il lavoro manuale che rifate ogni settimana e costruiamo
          strumenti nuovi che fanno vendere. Guardiamo come lavorate davvero e
          partiamo da un primo pezzo funzionante in poche settimane.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            to="/contatti"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-cw-secondary px-7 py-3.5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Facciamo due chiacchiere
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <a
            href="#servizi"
            className="inline-flex items-center justify-center rounded-full border border-cw-white/25 px-7 py-3.5 text-base font-semibold text-cw-white transition-colors hover:bg-cw-white/10"
          >
            Scopri i servizi
          </a>
        </motion.div>
      </div>
    </section>
  )
}
