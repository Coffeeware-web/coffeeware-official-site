import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import Wordmark from './Wordmark'

const NAV = [
  { label: 'Servizi', to: '/servizi' },
  { label: 'Team', to: '/team' },
  { label: 'Coffee Breakers', to: '/#coffee-breakers', hash: true },
  { label: 'Contatti', to: '/contatti' },
]

const CONTACTS = [
  {
    icon: Mail,
    label: 'info@coffeewaredesigns.com',
    href: 'mailto:info@coffeewaredesigns.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/393884994996',
  },
  { icon: Phone, label: '+39 388 499 4996', href: 'tel:+393884994996' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-cw-primary py-12 text-cw-white md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 border-t border-cw-white/15 pt-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Wordmark className="text-2xl" />
            <p className="mt-3 text-sm leading-relaxed text-cw-white/70">
              Software su misura per chi produce food &amp; beverage. Nord-Est
              Italia, dal vostro processo a uno strumento che lavora per voi.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            <span className="text-xs font-semibold uppercase tracking-wider text-cw-white/60">
              Naviga
            </span>
            {NAV.map((item) =>
              item.hash ? (
                <a
                  key={item.to}
                  href={item.to}
                  className="text-sm font-medium text-cw-white/70 transition-colors hover:text-cw-white"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm font-medium text-cw-white/70 transition-colors hover:text-cw-white"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-cw-white/60">
              Contatti
            </span>
            {CONTACTS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 text-sm font-medium text-cw-white/70 transition-colors hover:text-cw-white"
              >
                <Icon size={16} className="text-cw-secondary" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-xs text-cw-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Coffeeware. Tutti i diritti riservati.</span>
          <Link to="/privacy" className="transition-colors hover:text-cw-white">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
