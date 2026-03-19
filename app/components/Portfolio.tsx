'use client'

import Link from 'next/link'

interface Project {
  id: string
  title: string
  category: string
  year: string
  accentColor: string
  svgContent: React.ReactNode
}

const projects: Project[] = [
  {
    id: 'neon-ghost',
    title: 'NEON GHOST',
    category: 'BRAND IDENTITY',
    year: '2024',
    accentColor: '#2ff801',
    svgContent: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 450"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="600" height="450" fill="#111" />
        <circle cx="300" cy="200" r="140" fill="none" stroke="#2ff801" strokeWidth="1.5" opacity="0.25" />
        <circle cx="300" cy="200" r="90"  fill="none" stroke="#2ff801" strokeWidth="1"   opacity="0.18" />
        <circle cx="300" cy="200" r="40"  fill="none" stroke="#2ff801" strokeWidth="2"   opacity="0.5"  />
        <line x1="0"   y1="200" x2="600" y2="200" stroke="#2ff801" strokeWidth="0.5" opacity="0.12" />
        <line x1="300" y1="0"   x2="300" y2="450" stroke="#2ff801" strokeWidth="0.5" opacity="0.12" />
        <path d="M160 270 Q300 180 440 270 L440 380 Q370 330 300 355 Q230 330 160 380 Z" fill="#2ff801" opacity="0.07" />
        <text x="300" y="220" fontFamily="monospace" fontSize="80" fill="#2ff801" opacity="0.05" textAnchor="middle" fontWeight="bold">NG</text>
        <rect x="40"  y="40"  width="120" height="2" fill="#2ff801" opacity="0.35" />
        <rect x="440" y="400" width="120" height="2" fill="#2ff801" opacity="0.35" />
        {[112, 337].map((y) => (
          <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#2ff801" strokeWidth="0.3" opacity="0.1" />
        ))}
        {[150, 450].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="450" stroke="#2ff801" strokeWidth="0.3" opacity="0.1" />
        ))}
      </svg>
    ),
  },
  {
    id: 'logic-bomb',
    title: 'LOGIC BOMB',
    category: 'GROWTH HACKING',
    year: '2024',
    accentColor: '#eaea00',
    svgContent: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 450"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="600" height="450" fill="#0d0d0d" />
        {[
          [40, 60, 220, 6, '#eaea00', 0.4],
          [40, 80, 160, 4, '#fff', 0.1],
          [60, 100, 190, 4, '#fff', 0.1],
          [60, 120, 130, 4, '#eaea00', 0.25],
          [40, 150, 200, 5, '#fff', 0.08],
          [60, 170, 140, 4, '#fff', 0.12],
          [60, 190, 180, 4, '#eaea00', 0.2],
          [40, 220, 170, 4, '#fff', 0.08],
          [40, 240, 200, 5, '#fff', 0.1],
          [60, 260, 120, 4, '#eaea00', 0.3],
        ].map(([x, y, w, h, fill, op], i) => (
          <rect key={i} x={x as number} y={y as number} width={w as number} height={h as number} fill={fill as string} opacity={op as number} />
        ))}
        <rect x="40" y="290" width="10" height="18" fill="#eaea00" opacity="0.85" />
        <circle cx="440" cy="200" r="100" fill="none" stroke="#eaea00" strokeWidth="1.5" opacity="0.18" />
        <circle cx="440" cy="200" r="60"  fill="#eaea00" opacity="0.05" />
        <circle cx="440" cy="200" r="22"  fill="#eaea00" opacity="0.18" />
        {[[440,200,380,120],[440,200,535,125],[440,200,545,222],[440,200,430,305],[440,200,345,282]].map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#eaea00" strokeWidth="1" opacity="0.3" />
        ))}
        <text x="440" y="208" fontFamily="monospace" fontSize="20" fill="#eaea00" opacity="0.7" textAnchor="middle" fontWeight="bold">!</text>
      </svg>
    ),
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="py-24 px-6 bg-black border-b-4 border-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="font-mono text-xs uppercase tracking-widest mb-4"
              style={{ color: '#2ff801', opacity: 0.7 }}
            >
              // 002 — PORTFOLIO
            </p>
            <h2
              className="font-grotesk font-bold uppercase text-white leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              SELECTED
              <br />
              WORK.
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-white opacity-40 hidden md:block">
            2024 — PRESENT
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="port-card border-4 border-white relative overflow-hidden cursor-pointer group"
              style={{ aspectRatio: '4/3' }}
            >
              {/* SVG background */}
              <div className="port-img absolute inset-0 w-full h-full">
                {project.svgContent}
              </div>

              {/* Gradient overlay */}
              <div className="port-overlay absolute inset-0 z-10" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 z-20 p-5">
                <span className="font-mono text-xs uppercase tracking-widest text-white opacity-60 block">
                  PROJECT:
                </span>
                <h3 className="font-grotesk font-bold uppercase text-white text-2xl">
                  {project.title}
                </h3>
                <span
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: project.accentColor }}
                >
                  {project.category} / {project.year}
                </span>
              </div>

              {/* Arrow tag */}
              <div className="absolute top-4 right-4 z-20">
                <span className="font-mono text-xs uppercase tracking-widest px-2 py-1 border-2 border-white text-white opacity-70">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Archives CTA */}
        <div
          className="border-4 border-white p-10 md:p-16 text-center relative overflow-hidden grid-bg-dark"
          style={{ background: '#0a0a0a' }}
        >
          <h2
            className="font-grotesk font-bold uppercase text-white relative z-10"
            style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', letterSpacing: '-0.02em', lineHeight: '0.95' }}
          >
            VIEW OUR
            <br />
            ARCHIVES
          </h2>
          <div className="mt-8 relative z-10">
            <Link
              href="#"
              className="btn-press inline-block font-grotesk font-bold uppercase text-sm px-10 py-4 bg-white text-black border-4 border-white shadow-brutal-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#fff] transition-all duration-200"
              style={{ letterSpacing: '0.12em' }}
            >
              EXPLORE ALL WORK →
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
