import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Seo from '../seo/Seo'
import SiteHeader from '../landing/SiteHeader'
import Hero from '../landing/Hero'
import IntroProblema from '../landing/IntroProblema'
import Marquee from '../landing/Marquee'
import Servizi from '../landing/Servizi'
import CoffeeBreakers from '../landing/CoffeeBreakers'
import CtaStrip from '../landing/CtaStrip'
import SiteFooter from '../landing/SiteFooter'

export default function HomePage() {
  const { hash } = useLocation()

  // Scroll to the anchor when arriving from another route (e.g. /#contatti).
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        requestAnimationFrame(() =>
          el.scrollIntoView({ behavior: 'smooth', block: 'start' }),
        )
      }
    }
  }, [hash])

  return (
    <div className="min-h-screen bg-cw-white">
      <Seo
        title="Software su misura per il food & beverage | Coffeeware"
        description="Creiamo software su misura per aziende del Nord-Est Italia: togliamo il lavoro manuale ripetitivo e costruiamo strumenti che fanno vendere. Partiamo dal vostro processo, non da un pacchetto."
        path="/"
      />
      <SiteHeader />
      <main>
        <Hero />
        <IntroProblema />
        <Marquee />
        <Servizi />
        <CoffeeBreakers />
        <CtaStrip />
      </main>
      <SiteFooter />
    </div>
  )
}
