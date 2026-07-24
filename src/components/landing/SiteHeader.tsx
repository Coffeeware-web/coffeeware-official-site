import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'Servizi', to: '/servizi' },
  { label: 'Team', to: '/team' },
  { label: 'Contatti', to: '/contatti' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Every header link lands at the top of its page. Re-clicking the current
  // route doesn't remount anything, so nothing would scroll on its own; from
  // another route we wait a frame so the new page is mounted first.
  const goTop = (to: string) => () => {
    setOpen(false)
    if (pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      requestAnimationFrame(() => window.scrollTo({ top: 0 }))
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cw-white/10 bg-cw-primary">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <Link
          to="/"
          onClick={goTop('/')}
          className="flex items-center gap-2"
          aria-label="coffeeware home"
        >
          <img
            src="/img/coffeeware-logo.png"
            alt="coffeeware"
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principale">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={goTop(item.to)}
              className="text-sm font-medium text-cw-white/75 transition-colors hover:text-cw-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/prenota"
            onClick={goTop('/prenota')}
            className="hidden rounded-full bg-cw-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Facciamo due chiacchiere
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cw-white/25 text-cw-white md:hidden"
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-cw-white/10 bg-cw-primary md:hidden"
          >
            <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={goTop(item.to)}
                  className="border-b border-cw-white/10 py-3 text-base font-medium text-cw-white/80"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/prenota"
                onClick={goTop('/prenota')}
                className="mt-4 rounded-full bg-cw-secondary px-5 py-3 text-center text-base font-semibold text-white"
              >
                Facciamo due chiacchiere
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
