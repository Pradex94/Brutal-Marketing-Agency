'use client'

import Link from 'next/link'
import { Star, TrendingUp, Video, ArrowUpRight } from 'lucide-react'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ServiceCard {
  id: string
  number: string
  icon: ReactNode
  iconBg: string
  iconColor: string
  title: string
  items: string[]
  description: string
}

const services: ServiceCard[] = [
  {
    id: 'brand-identity',
    number: '01',
    icon: <Star size={24} strokeWidth={2} />,
    iconBg: '#2ff801',
    iconColor: '#050505',
    title: 'BRAND IDENTITY',
    description: 'WE DON\'T JUST MAKE LOGOS. WE BUILD ARCHETYPES THAT COMMAND AUTHORITY.',
    items: ['VISUAL ARCHITECTURE', 'CULTURAL POSITIONING', 'VERBAL STRATEGY'],
  },
  {
    id: 'growth-hacking',
    number: '02',
    icon: <TrendingUp size={24} strokeWidth={2} />,
    iconBg: '#eaea00',
    iconColor: '#050505',
    title: 'GROWTH HACKING',
    description: 'DATA-DRIVEN AGGRESSION TO CAPTURE MARKET SHARE AT UNPRECEDENTED SPEEDS.',
    items: ['ACQUISITION LOOPS', 'CONVERSION OPTIMIZATION', 'RETENTION SYSTEMS'],
  },
  {
    id: 'content-creation',
    number: '03',
    icon: <Video size={24} strokeWidth={2} />,
    iconBg: '#050505',
    iconColor: '#2ff801',
    title: 'CONTENT CREATION',
    description: 'HIGH-VOLTAGE ASSETS DESIGNED TO STOP THE SCROLL AND START THE OBSESSION.',
    items: ['3D MOTION GRAPHICS', 'ADS THAT CONVERT', 'CINEMATIC BRANDING'],
  },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section id="services" className="py-32 px-6 border-b-6 border-black bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-black/40">
              // CORE CAPABILITIES
            </p>
            <h2
              className="font-grotesk font-black uppercase leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '-0.04em' }}
            >
              WHAT WE DO <br />
              <span className="text-neon bg-black px-4 inline-block transform -rotate-1">BEST.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:text-right"
          >
            <p className="font-work text-lg leading-relaxed text-black/70 max-w-md lg:ml-auto">
              GENERIC STRATEGIES ARE EXTINCT. WE ENGINEER HIGH-VOLTAGE BRAND WEAPONS
              THAT FORCE THE MARKET TO PAY ATTENTION OR GET LEFT BEHIND.
            </p>
          </motion.div>
        </div>

        {/* ── Service Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              variants={cardVariants}
              className="group relative flex flex-col bg-light border-4 border-black p-10 hover:bg-black transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-black opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
              
              {/* Card Header */}
              <div className="flex justify-between items-start mb-12">
                <div
                  className="w-14 h-14 flex items-center justify-center border-3 border-black group-hover:border-white transition-colors"
                  style={{ background: svc.iconBg, color: svc.iconColor }}
                >
                  {svc.icon}
                </div>
                <span className="font-mono text-xs font-bold text-black/30 group-hover:text-white/30 transition-colors">
                  #{svc.number}
                </span>
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="font-grotesk font-black text-2xl uppercase tracking-tight text-black group-hover:text-white mb-6 transition-colors">
                  {svc.title}
                </h3>
                <p className="font-work text-sm leading-relaxed text-black/80 group-hover:text-white/80 mb-8 transition-colors">
                  {svc.description}
                </p>
                
                <ul className="space-y-3">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-mono text-[10px] font-bold text-black/60 group-hover:text-white/60 uppercase tracking-widest transition-colors">
                      <span className="w-2 h-0.5 bg-neon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Trigger */}
              <div className="mt-12 pt-8 border-t border-black/10 group-hover:border-white/10 flex items-center justify-between transition-colors">
                <Link
                  href="#contact"
                  className="font-grotesk font-black text-sm uppercase tracking-widest text-black group-hover:text-neon transition-colors"
                >
                  ACQUIRE →
                </Link>
                <ArrowUpRight className="text-black group-hover:text-neon group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
