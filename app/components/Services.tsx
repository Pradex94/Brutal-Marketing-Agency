import Link from 'next/link'
import { Star, TrendingUp, Video } from 'lucide-react'
import { ReactNode } from 'react'

interface ServiceCard {
  id: string
  number: string
  icon: ReactNode
  iconBg: string
  iconColor: string
  title: string
  items: string[]
}

const services: ServiceCard[] = [
  {
    id: 'brand-identity',
    number: '01',
    icon: <Star size={22} strokeWidth={2.5} />,
    iconBg: '#2ff801',
    iconColor: '#000',
    title: 'BRAND IDENTITY',
    items: ['LOGO DESIGN', 'VOICE & TONE', 'BRAND GUIDES'],
  },
  {
    id: 'growth-hacking',
    number: '02',
    icon: <TrendingUp size={22} strokeWidth={2.5} />,
    iconBg: '#eaea00',
    iconColor: '#000',
    title: 'GROWTH HACKING',
    items: ['ACQUISITION', 'CONVERSION', 'DATA MINING'],
  },
  {
    id: 'content-creation',
    number: '03',
    icon: <Video size={22} strokeWidth={2.5} />,
    iconBg: '#000',
    iconColor: '#2ff801',
    title: 'CONTENT CREATION',
    items: ['VIDEO PRODUCTION', '3D MOTION', 'COPYWRITING'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 border-b-4 border-black bg-light">
      <div className="max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest opacity-50 mb-4">
              // 001 — SERVICES
            </p>
            <h2
              className="font-grotesk font-bold uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
            >
              WHAT WE DO
              <br />
              <span
                className="border-4 border-black px-2 inline-block"
                style={{ background: 'var(--acid)' }}
              >
                BEST.
              </span>
            </h2>
          </div>

          <div className="md:text-right">
            <p className="font-work text-base leading-relaxed opacity-75 max-w-sm md:ml-auto">
              GENERIC STRATEGIES ARE FOR GENERIC COMPANIES. WE CREATE HIGH-VOLTAGE BRAND WEAPONS
              THAT FORCE THE MARKET TO PAY ATTENTION — OR GET LEFT BEHIND.
            </p>
            <Link
              href="#contact"
              className="inline-block mt-6 font-mono text-xs uppercase tracking-widest border-b-2 border-black hover:opacity-60 transition-opacity"
            >
              SEE ALL SERVICES →
            </Link>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div
              key={svc.id}
              className="bg-white border-4 border-black shadow-brutal p-8 flex flex-col gap-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-xl transition-all duration-200"
              style={idx === 1 ? { marginTop: '20px' } : undefined}
            >
              {/* Card top row */}
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 flex items-center justify-center border-2 border-black flex-shrink-0"
                  style={{ background: svc.iconBg, color: svc.iconColor }}
                >
                  {svc.icon}
                </div>
                <span className="font-mono text-xs opacity-40">{svc.number}</span>
              </div>

              {/* Card body */}
              <div>
                <h3
                  className="font-grotesk font-bold uppercase text-xl mb-4"
                  style={{ letterSpacing: '0.04em' }}
                >
                  {svc.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 font-work text-sm opacity-70">
                      <span className="w-1.5 h-1.5 bg-black inline-block flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card footer */}
              <div className="mt-auto pt-4 border-t-2 border-black">
                <Link
                  href="#contact"
                  className="font-mono text-xs uppercase tracking-widest hover:opacity-60 transition-opacity"
                >
                  INQUIRE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
