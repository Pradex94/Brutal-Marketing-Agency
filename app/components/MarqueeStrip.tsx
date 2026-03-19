import Link from 'next/link'

const marqueeText =
  'WE WIN \u00a0•\u00a0 WE MAKE NOISE \u00a0•\u00a0 WE BUILD BRANDS \u00a0•\u00a0 WE DISRUPT \u00a0•\u00a0 '

export default function MarqueeStrip() {
  // Duplicate the string 6× to guarantee seamless loop at all screen sizes
  const repeated = marqueeText.repeat(6)

  return (
    <div className="overflow-hidden border-t-4 border-b-4 border-black bg-black py-3.5">
      <div className="marquee-track">
        <span
          className="font-grotesk font-bold uppercase whitespace-nowrap px-8 text-neon"
          style={{ fontSize: '1.1rem', letterSpacing: '0.15em' }}
        >
          {repeated}
        </span>
        {/* Duplicate for seamless loop */}
        <span
          className="font-grotesk font-bold uppercase whitespace-nowrap px-8 text-neon"
          style={{ fontSize: '1.1rem', letterSpacing: '0.15em' }}
          aria-hidden="true"
        >
          {repeated}
        </span>
      </div>
    </div>
  )
}
