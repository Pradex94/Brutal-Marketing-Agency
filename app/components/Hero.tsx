'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as any,
      },
    },
  }

  return (
    <section
      id="hero"
      className="grid-bg min-h-[90vh] flex items-center relative overflow-hidden px-6 py-24 bg-light border-b-6 border-black"
    >
      {/* ── Background Accents ── */}
      <div className="absolute top-20 right-[10%] opacity-10 pointer-events-none select-none hidden lg:block">
        <span className="font-mono text-[10vw] font-black leading-none">BRUTAL</span>
      </div>

      <div className="absolute top-40 left-10 z-10 hidden md:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="text-neon opacity-20"
        >
          <Zap size={120} strokeWidth={1} />
        </motion.div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto w-full relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-12 gap-12 items-center"
        >
          <div className="md:col-span-9">
            {/* Tag */}
            <motion.div variants={itemVariants} className="mb-10">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] px-4 py-2 bg-black text-white inline-block">
                // DIGITAL OUTLAWS — EST. 2024
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-grotesk font-black uppercase leading-[0.85] mb-12"
              style={{
                fontSize: 'clamp(3.5rem, 11vw, 9.5rem)',
                letterSpacing: '-0.04em',
              }}
            >
              WE MAKE <span className="text-black/10 stroke-text">NOISE</span>
              <br />
              <span className="inline-flex items-center gap-4">
                YOU MAKE <span className="text-neon">PROFIT</span>
              </span>
            </motion.h1>

            {/* CTA Group */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-4 bg-black text-white px-10 py-6 font-grotesk font-bold text-lg uppercase tracking-widest border-4 border-black shadow-brutal-lg transition-all hover:bg-neon hover:text-black hover:shadow-brutal-xl hover:-translate-x-1 hover:-translate-y-1"
              >
                UNLEASH GROWTH
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link
                href="#work"
                className="font-mono text-xs font-bold uppercase tracking-widest border-b-2 border-black/20 hover:border-black transition-all py-2"
              >
                VIEW ARCHIVES [001-099]
              </Link>
            </motion.div>
          </div>

          {/* ── Side Content ── */}
          <motion.aside
            variants={itemVariants}
            className="md:col-span-3 border-l-4 border-black pl-8 hidden md:block"
          >
            <div className="space-y-12">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest mb-4 text-black/40">
                  // RECENT SUCCESS
                </p>
                <div className="relative">
                  <span className="font-grotesk font-black text-6xl leading-none">+340%</span>
                  <div className="absolute -bottom-2 -right-4 w-12 h-12 border-2 border-neon opacity-20 rotate-45" />
                </div>
                <p className="font-mono text-[9px] uppercase tracking-widest mt-2 opacity-60">
                  AVG REVENUE INCREASE FOR 2024 CLIENTS
                </p>
              </div>

              <div className="pt-8 border-t border-black/10">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest mb-2 text-black/40">
                  // CURRENT STATUS
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest">
                    OPERATIONAL / ACCEPTING CLIENTS
                  </span>
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 2px #050505;
          text-stroke: 2px #050505;
        }
      `}</style>
    </section>
  )
}
