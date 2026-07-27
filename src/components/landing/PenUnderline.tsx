import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

type PenUnderlineProps = {
  children: ReactNode
  /** Ritardo prima che il tratto parta, in secondi. */
  delay?: number
  className?: string
}

// Sottolineatura tirata a mano: due passate leggermente disallineate, come
// quando si ripassa la riga senza staccare la punta.
//
// Il tratto NON è animato con pathLength: quella tecnica disegna usando
// stroke-dasharray, che su un viewBox stirato in orizzontale lascia buchi nel
// tratto. Qui si scopre il disegno con una clip-path che scorre da sinistra a
// destra: stesso effetto "scritto a penna", nessun tratteggio di mezzo.
export default function PenUnderline({
  children,
  delay = 0.6,
  className = '',
}: PenUnderlineProps) {
  const reduce = useReducedMotion()

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden
        // I due numeri da toccare per l'altezza: `-bottom` abbassa il tratto,
        // `h` distanzia le due passate fra loro. Tarati su line-height ~1.6.
        className="pointer-events-none absolute inset-x-[-0.12em] -bottom-[0.05em] z-0 block h-[0.4em]"
        initial={reduce ? undefined : { clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0 0 0)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
        }
      >
        <svg
          viewBox="0 0 200 12"
          preserveAspectRatio="none"
          className="h-full w-full text-cw-secondary"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
        >
          {/* Passata principale */}
          <path d="M3 4.4C34 2.6 68 2.1 101 2.6c30 .4 60 1.4 96 2.6" strokeWidth={3} />
          {/* Seconda passata: più corta, più sottile, sfalsata in basso */}
          <path
            d="M15 8.8C50 7.2 100 6.8 174 8.2"
            strokeWidth={1.8}
            opacity={0.45}
          />
        </svg>
      </motion.span>
    </span>
  )
}
