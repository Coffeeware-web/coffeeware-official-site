const WORDS = [
  'Ristoranti',
  'Cantine',
  'Bar',
  'Distillerie',
  'Enoteche',
  'Birrifici',
  'Pasticcerie',
  'Agriturismi',
  'Caseifici',
  'Gelaterie',
  'Consorzi'
]

// Bottom row is rotated by 4 words so it never lines up with the top row.
const WORDS_SHIFTED = [...WORDS.slice(6, 10), ...WORDS.slice(0, 4)]

function Row({ direction }: { direction: 'right' | 'left' }) {
  const words = direction === 'right' ? WORDS : WORDS_SHIFTED
  const sequence = [...words, ...words]

  return (
    <div
      className={`relative flex w-max ${
        direction === 'right' ? 'animate-marquee-right' : 'animate-marquee-left'
      }`}
    >
      {sequence.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="flex items-center whitespace-nowrap px-6 font-display text-2xl font-semibold text-cw-white md:text-4xl"
        >
          {word}
          <span className="ml-6 text-cw-secondary" aria-hidden>
            •
          </span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <section
      className="overflow-hidden border-y border-cw-black/10 bg-cw-primary py-6 md:py-8"
      aria-label="Settori che serviamo"
    >
      <div className="flex flex-col gap-3 md:gap-4">
        <Row direction="right" />
        <div aria-hidden>
          <Row direction="left" />
        </div>
      </div>
    </section>
  )
}
