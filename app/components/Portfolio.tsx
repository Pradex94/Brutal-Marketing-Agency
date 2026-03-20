'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Archive } from 'lucide-react'

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as any,
      },
    },
  }

  return (
    <section id="work" className="py-32 px-6 bg-brutal border-b-6 border-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-neon opacity-70">
              {"// SELECTED CASE STUDIES"}
            </p>
            <h2
              className="font-grotesk font-black uppercase text-white leading-[0.9] border-l-8 border-neon pl-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', letterSpacing: '-0.04em' }}
            >
              PROJECT <br />
              <span className="text-neon/20 stroke-white">ARCHIVES.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block text-right"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/30 block mb-2">
              LATEST UPDATE: 21 MAR 2026
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/30 block">
              STATUS: [ALL SYSTEMS NOMINAL]
            </span>
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-10 mb-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="port-card group relative overflow-hidden border-4 border-white/10 hover:border-white transition-all duration-700 bg-[#0a0a0a]"
              style={{ aspectRatio: '16/10' }}
            >
              {/* SVG background */}
              <div className="port-img absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                {project.svgContent}
              </div>

              {/* Better Gradient overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 z-20 p-8 w-full">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-3 block">
                      {project.category} {"//"} {project.year}
                    </span>
                    <h3 className="font-grotesk font-black uppercase text-white text-4xl leading-none group-hover:text-neon transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-white/20 text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>

              {/* Accent corner line */}
              <div 
                className="absolute top-0 right-0 w-1 h-32 origin-top transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" 
                style={{ backgroundColor: project.accentColor }} 
              />
            </motion.div>
          ))}
        </motion.div>

        {/* High-Impact Archives CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group cursor-pointer border-4 border-white p-12 md:p-24 text-center overflow-hidden bg-[#050505] shadow-brutal-white hover:shadow-[12px_12px_0_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-500"
        >
          {/* Animated Background Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden whitespace-nowrap">
            <span className="font-grotesk font-black text-[25vw] uppercase select-none animate-marquee">
              FULL ARCHIVE — FULL ARCHIVE — FULL ARCHIVE — 
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 border-2 border-white flex items-center justify-center mb-8 group-hover:bg-neon group-hover:border-neon group-hover:text-black transition-all duration-300 rotate-45">
              <Archive size={32} className="-rotate-45" />
            </div>
            
            <h2
              className="font-grotesk font-black uppercase text-white mb-10"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', letterSpacing: '-0.04em', lineHeight: '0.85' }}
            >
              WANT TO SEE <br />
              <span className="text-neon group-hover:line-through transition-all">THE EVIDENCE?</span>
            </h2>
            
            <Link
              href="#"
              className="group inline-flex items-center gap-4 bg-white text-black px-12 py-6 font-grotesk font-black text-lg uppercase tracking-widest transition-all duration-300 hover:bg-neon"
            >
              EXPLORE FULL ARCHIVE
              <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .stroke-white {
          -webkit-text-stroke: 1.5px #fff;
          text-stroke: 1.5px #fff;
        }
      `}</style>
    </section>
  )
}
