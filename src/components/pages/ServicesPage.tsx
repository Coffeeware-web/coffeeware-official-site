import { useEffect } from 'react'
import Seo from '../seo/Seo'
import SiteHeader from '../landing/SiteHeader'
import SiteFooter from '../landing/SiteFooter'
import ServicesShowcase from '../landing/ServicesShowcase'
import CtaStrip from '../landing/CtaStrip'

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-cw-white">
      <Seo
        title="Servizi — Automazione e software su misura | Coffeeware"
        description="Automazione dei processi, configuratori di prodotto, gestionali su misura: guardiamo come lavorate, troviamo dove perdete tempo o clienti e costruiamo il pezzo che fa la differenza."
        path="/servizi"
      />
      <SiteHeader />
      <main>
        {/* Page hero */}
        <section className="relative overflow-hidden bg-cw-primary pt-32 pb-16 text-cw-white md:pt-40 md:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[26rem] font-extrabold leading-none text-cw-secondary/10 md:block"
          >
            ;
          </div>
          <div className="relative mx-auto max-w-6xl px-5 md:px-8">
            <h1 className="max-w-3xl text-balance font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Cosa possiamo costruire per voi
              <span className="text-cw-secondary">;</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-md leading-relaxed text-cw-white/75">
              Non un catalogo di pacchetti, ma un punto di partenza. Guardiamo
              come lavorate, troviamo dove perdete tempo o clienti, e
              costruiamo il pezzo che fa la differenza: dall&apos;automazione di
              un processo a uno strumento che prima non esisteva.
            </p>
          </div>
        </section>

        {/* Services: sticky macro topics + vertical scroll of specifics */}
        <ServicesShowcase />

        <CtaStrip />
      </main>
      <SiteFooter />
    </div>
  )
}
