import { Link } from 'react-router-dom'
import {
  CalendarDays,
  ChevronRight as ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Clock,
} from 'lucide-react'
import SiteHeader from '../landing/SiteHeader'
import SiteFooter from '../landing/SiteFooter'
import Reveal from '../landing/Reveal'

const CONTACTS = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'info@coffeewaredesigns.com',
    href: 'mailto:info@coffeewaredesigns.com',
    hint: 'Rispondiamo entro 24 ore.',
  },
  {
    icon: Phone,
    label: 'Telefono',
    value: '+39 388 499 4996',
    href: 'tel:+393884994996',
    hint: 'Per parlarne direttamente a voce.',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Scrivici su WhatsApp',
    href: 'https://wa.me/393884994996',
    hint: 'Per le domande veloci.',
  },
]

const DETAILS = [
  { icon: MapPin, label: 'Dove siamo', lines: ['Via Luigi Einaudi', 'Trento (TN), Italia'] },
  { icon: Clock, label: 'Tempi di risposta', lines: ['Risposta entro 24 ore'] },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cw-white">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
          {/* Intro + CTA */}
          <Reveal>
            <h1 className="text-balance font-display text-4xl font-bold leading-tight text-cw-black md:text-5xl">
              Parliamone davanti a un caffè
              <span className="text-cw-secondary">;</span>
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-cw-gray">
              Raccontaci cosa vi serve: una call di trenta minuti basta per
              capire se possiamo darvi una mano e come. Nessun impegno, solo una
              chiacchierata concreta.
            </p>
            <Link
              to="/prenota"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-cw-secondary px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <CalendarDays size={18} />
              Prenota una call
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-cw-gray">
                Oppure scrivici direttamente
              </span>
              {CONTACTS.map(({ icon: Icon, label, value, href, hint }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-start gap-4 rounded-2xl border border-cw-black/10 bg-white/60 p-4 transition-colors hover:border-cw-black/25"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cw-black/5 text-cw-black/70 transition-colors group-hover:bg-cw-secondary group-hover:text-white">
                    <Icon size={18} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cw-gray">
                      {label}
                    </span>
                    <span className="font-display text-base font-semibold text-cw-black">
                      {value}
                    </span>
                    <span className="mt-0.5 text-sm leading-relaxed text-cw-gray">
                      {hint}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Sede e orari */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-4 border-t border-cw-black/10 pt-10 sm:grid-cols-2">
            {DETAILS.map(({ icon: Icon, label, lines }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cw-secondary/10 text-cw-secondary">
                  <Icon size={18} />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cw-gray">
                    {label}
                  </span>
                  {lines.map((line) => (
                    <p key={line} className="text-sm leading-relaxed text-cw-black/80">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  )
}
