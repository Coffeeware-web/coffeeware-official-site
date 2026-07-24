import { useEffect } from 'react'
import { Github, Linkedin, User } from 'lucide-react'
import SiteHeader from '../landing/SiteHeader'
import SiteFooter from '../landing/SiteFooter'
import Reveal from '../landing/Reveal'
import CtaStrip from '../landing/CtaStrip'
import TeamValues from '../landing/TeamValues'
import TeamSteps from '../landing/TeamSteps'

type Member = {
  name: string
  role: string
  bio: string
  photo?: string
  github?: string
  linkedin?: string
}

const MEMBERS: Member[] = [
  {
    name: 'Matteo',
    role: 'Sviluppatore & co-fondatore',
    bio: 'Si occupa della parte che non si vede: architettura, dati e integrazioni che tengono in piedi il prodotto. Gli piacciono i problemi dove c’è da far parlare sistemi nati per non capirsi.',
    photo: '/img/coffee_breakers_matteo.png',
    github: 'https://github.com/MagnusGuagnus',
    linkedin: 'https://www.linkedin.com/in/matteo-magnaguagno-0b239726b/',
  },
  {
    name: 'Tommaso',
    role: 'Sviluppatore & co-fondatore',
    bio: 'Disegna e costruisce la parte con cui il cliente parla ogni giorno: interfacce pulite, veloci e comprensibili. Convinto che un buon software si riconosca da quanto poco serve spiegarlo.',
    photo: '/img/coffee_breakers_tommaso.png',
    github: 'https://github.com/niftyduck',
    linkedin: 'https://www.linkedin.com/in/tommaso-parlato-a64247221/',
  },
]

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-cw-white">
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
              Chi sono i Coffee Breakers
              <span className="text-cw-secondary">;</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-cw-white/75">
              Due sviluppatori, uno studio piccolo e diretto. Poche aziende
              alla volta, seguite di persona, qui nel Nord-Est.
            </p>
          </div>
        </section>

        {/* Section 1: Values / strengths — pinned vertical carousel */}
        <TeamValues />

        {/* Steps: zigzag dashed path */}
        <TeamSteps />

        {/* Members */}
        <section className="bg-cw-white py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="grid gap-8 sm:grid-cols-2">
              {MEMBERS.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.08}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cw-black/10 bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-cw-secondary/40 hover:shadow-lg">
                    {/* Member photo (with placeholder fallback) */}
                    <div className="relative flex h-72 items-center justify-center overflow-hidden bg-cw-primary/10 transition-[height] duration-500 ease-out group-hover:h-96">
                      {m.photo ? (
                        <img
                          src={m.photo}
                          alt={m.name}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      ) : (
                        <>
                          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cw-primary/15 text-cw-primary">
                            <User size={30} />
                          </span>
                          <span className="absolute bottom-3 left-3 rounded-full bg-cw-white/80 px-3 py-1 text-xs font-medium text-cw-gray">
                            immagine
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6 md:p-7">
                      <h2 className="font-display text-xl font-semibold text-cw-black">
                        {m.name}
                      </h2>
                      <p className="mt-1 text-sm font-semibold text-cw-secondary">
                        {m.role}
                      </p>
                      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-cw-gray">
                        {m.bio}
                      </p>
                      <div className="mt-5 flex items-center gap-3">
                        {m.github && (
                          <a
                            href={m.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub di ${m.name}`}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cw-black/5 text-cw-black/70 transition-colors hover:bg-cw-secondary/15 hover:text-cw-secondary"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {m.linkedin && (
                          <a
                            href={m.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`LinkedIn di ${m.name}`}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cw-black/5 text-cw-black/70 transition-colors hover:bg-cw-secondary/15 hover:text-cw-secondary"
                          >
                            <Linkedin size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaStrip />
      </main>
      <SiteFooter />
    </div>
  )
}
