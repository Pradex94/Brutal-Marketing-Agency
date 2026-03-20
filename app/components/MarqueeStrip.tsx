import Link from 'next/link'

const marqueeText =
  'WE WIN \u00a0•\u00a0 WE MAKE NOISE \u00a0•\u00a0 WE BUILD BRANDS \u00a0•\u00a0 WE DISRUPT \u00a0•\u00a0 '

export default function MarqueeStrip() {
  const words = [
    'BRAND ARCHITECTURE',
    'GROWTH HACKING',
    'HIGH-VOLTAGE CREATIVE',
    'DIGITAL DOMINANCE',
    'CONVERSION FOCUS',
    'BRUTAL SPEED',
    'MARKET DISRUPTION',
  ]

  return (
    <div className="bg-neon border-y-6 border-black py-6 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee group">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {words.map((word) => (
              <div key={word} className="flex items-center gap-12">
                <span className="font-grotesk font-black text-4xl lg:text-5xl uppercase tracking-tighter text-black">
                  {word}
                </span>
                <span className="text-black text-4xl lg:text-5xl font-black">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
