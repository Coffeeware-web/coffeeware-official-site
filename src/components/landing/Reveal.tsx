import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'span'
}

const MotionMap = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  span: motion.span,
}

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as = 'div',
}: RevealProps) {
  const Comp = MotionMap[as]
  return (
    // No opacity in `initial`: whileInView only fires once an element actually
    // enters the viewport, so anything below the fold would sit at opacity 0 in
    // a crawler's snapshot of the page at scroll 0 — invisible to indexing, and
    // discounted as hidden text where it is picked up. The slide alone reads as
    // a reveal while leaving the copy readable at all times.
    <Comp
      className={className}
      initial={{ y }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  )
}
