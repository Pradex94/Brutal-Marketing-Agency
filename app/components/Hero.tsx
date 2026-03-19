import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid-bg min-h-screen flex items-center relative overflow-hidden px-6 py-20 bg-light border-b-4 border-black"
    >
      {/* Decorative: spinning green star top-left */}
      <div className="absolute top-16 left-8 z-10 select-none pointer-events-none">
        <span
          className="star-spin text-neon"
          style={{ fontSize: '3.5rem', display: 'inline-block', lineHeight: 1 }}
          aria-hidden="true"
        >
          ✦
        </span>
      </div>

      {/* Decorative: acid yellow triangle bottom-right */}
      <div
        className="absolute bottom-16 right-10 z-10 pointer-events-none"
        style={{ transform: 'rotate(15deg)' }}
        aria-hidden="true"
      >
        <div className="triangle" />
      </div>

      {/* Thin accent line along bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-8 items-center">
        {/* ── Main Content ── */}
        <div className="md:col-span-9">
          {/* Tag */}
          <div className="mb-8">
            <span
              className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1.5 border-2 border-black shadow-brutal inline-block"
              style={{ background: 'var(--acid)', letterSpacing: '0.1em' }}
            >
              EST. 2024 / DIGITAL OUTLAWS
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-grotesk font-bold uppercase leading-none mb-10"
            style={{
              fontSize: 'clamp(3rem, 9vw, 8rem)',
              letterSpacing: '-0.02em',
              lineHeight: '0.92',
            }}
          >
            WE MAKE NOISE
            <br />
            <span className="inline-flex items-baseline gap-3">
              <span className="text-neon" style={{ fontSize: '0.85em', lineHeight: 1 }}>
                •
              </span>
              YOU MAKE PROFIT
            </span>
          </h1>

          {/* CTA */}
          <Link
            href="#contact"
            className="btn-press inline-block font-grotesk font-bold uppercase text-sm px-8 py-4 bg-neon border-4 border-black shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-xl transition-all duration-200"
            style={{ letterSpacing: '0.12em' }}
          >
            GET STARTED →
          </Link>
        </div>

        {/* ── Side Impact Metrics ── */}
        <aside className="md:col-span-3 md:border-l-4 border-black md:pl-6">
          <p className="font-mono text-xs text-black opacity-60 mb-3 uppercase tracking-wider">
            // IMPACT METRICS:
          </p>
          <div className="flex flex-col gap-3">
            <div className="border-b-2 border-black pb-3">
              <span className="font-grotesk font-bold text-2xl uppercase text-neon block">
                +450%
              </span>
              <span className="font-mono text-xs uppercase tracking-widest opacity-70">
                ROI TYPICAL
              </span>
            </div>
            <div className="border-b-2 border-black pb-3">
              <span className="font-grotesk font-bold text-sm uppercase block">ZERO</span>
              <span className="font-mono text-xs uppercase tracking-widest opacity-70">
                SOFT SOLUTIONS
              </span>
            </div>
            <div>
              <span className="font-grotesk font-bold text-sm uppercase block">PURE</span>
              <span className="font-mono text-xs uppercase tracking-widest opacity-70">
                ADRENALINE
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
