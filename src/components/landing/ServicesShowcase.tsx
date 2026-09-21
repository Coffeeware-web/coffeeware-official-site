import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { PILLARS } from '../data/services'
import type { Pillar, SubService } from '../data/services'

function TopicBlock({ pillar, index }: { pillar: Pillar; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })
  // Progress bar fills as the right column scrolls through the sub-services.
  const fill = useTransform(scrollYProgress, [0, 1], ['8%', '100%'])
  // Fade the sticky title in as the block enters and out as it leaves.
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.85, 1],
    [0, 1, 1, 0],
  )
  const titleY = useTransform(scrollYProgress, [0, 0.12], [24, 0])
  const Icon = pillar.icon

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-8 border-t border-cw-black/10 py-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16 md:py-20"
    >
      {/* Left: sticky title column */}
      <motion.div
        style={{ opacity: titleOpacity, y: titleY }}
        className="md:sticky md:top-28 md:h-fit md:self-start"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-cw-secondary px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white">
          <Icon size={15} className="shrink-0 text-white" aria-hidden />
          {pillar.kicker}
        </span>

        <h3 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] text-cw-black md:text-5xl">
          {pillar.title}
          <span className="text-cw-secondary">;</span>
        </h3>
        <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-cw-gray">
          {pillar.blurb}
        </p>

        <div className="mt-8 flex items-center gap-4">
          <span className="font-display text-6xl font-extrabold leading-none text-cw-secondary/20">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="h-1.5 w-full max-w-[180px] overflow-hidden rounded-full bg-cw-black/10">
            <motion.span
              style={{ width: fill }}
              className="block h-full rounded-full bg-cw-secondary"
            />
          </div>
        </div>
      </motion.div>

      {/* Right: vertical scroll of specific services */}
      <div className="flex flex-col gap-5">
        {pillar.items.map((item) => (
          <FadeCard key={item.title} item={item} flag={pillar.flag} />
        ))}
      </div>
    </div>
  )
}

function FadeCard({ item, flag }: { item: SubService; flag?: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // Fade each card in as it enters the viewport and out as it leaves.
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [40, 0, 0, -40])
  const Icon = item.icon

  return (
    <motion.article
      ref={ref}
      style={{ opacity, y }}
      className="group rounded-4xl border border-cw-black/15 bg-white/60 p-6 transition-colors hover:border-cw-secondary md:p-6"
    >
      <div className="flex items-start gap-4">
        <span
          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-cw-secondary transition-colors ${
            flag ? 'bg-cw-secondary/20' : 'bg-cw-secondary/15'
          } group-hover:bg-cw-secondary group-hover:text-cw-white`}
        >
          <Icon size={22} />
        </span>
        <div>
          <h4 className="font-display text-2xl font-bold text-cw-black">
            {item.title}
          </h4>
          <p className="mt-2 text-pretty text-[15px] leading-relaxed text-cw-gray">
            {item.description}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export default function ServicesShowcase() {
  return (
    <section aria-label="I nostri servizi" className="bg-cw-white py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {PILLARS.map((pillar, i) => (
          <TopicBlock key={pillar.title} pillar={pillar} index={i} />
        ))}
      </div>
    </section>
  )
}
