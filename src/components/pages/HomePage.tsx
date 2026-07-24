import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
