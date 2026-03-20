'use client'

import { motion } from 'framer-motion'
import { Send, MapPin, Mail } from 'lucide-react'

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="contact" className="py-32 px-6 bg-white border-b-6 border-black overflow-hidden relative">
      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-neon opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-20"
        >
          {/* ── Left Column: Copy ── */}
          <div className="lg:col-span-5">
            <motion.div variants={itemVariants}>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-black/40">
                // ACQUISITION / INTAKE
              </p>
              <h2
                className="font-grotesk font-black uppercase leading-[0.9] mb-10"
                style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '-0.04em' }}
              >
                READY TO <br />
                <span className="text-neon bg-black px-4 inline-block transform rotate-1">DOMINATE?</span>
              </h2>
              <p className="font-work text-lg text-black/70 mb-12 max-w-sm">
                WE ONLY WORK WITH CLIENTS WHO ARE READY FOR RADICAL GROWTH. 
                IF YOU'RE LOOKING FOR "SAFE", LOOK ELSEWHERE.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8 pt-12 border-t-2 border-black/5">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-black group-hover:bg-neon transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-black/40">EMAIL AGENT</p>
                  <p className="font-grotesk font-bold text-xl uppercase">HELLO@BRUTAL.AGENCY</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-black group-hover:bg-neon transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-black/40">HQ LOCATION</p>
                  <p className="font-grotesk font-bold text-xl uppercase">NEW YORK // REMOTE</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Form ── */}
          <motion.div variants={itemVariants} className="lg:col-span-7 bg-light border-4 border-black p-8 md:p-12 shadow-brutal hover:shadow-brutal-lg transition-all duration-500">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="font-mono text-[10px] font-black uppercase tracking-widest text-black/40 block ml-1">
                    01. YOUR IDENTITY
                  </label>
                  <input
                    type="text"
                    placeholder="NAME / ALIAS"
                    className="brutal-input w-full"
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-mono text-[10px] font-black uppercase tracking-widest text-black/40 block ml-1">
                    02. SECURE EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="EMAIL@DOMAIN.COM"
                    className="brutal-input w-full"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-mono text-[10px] font-black uppercase tracking-widest text-black/40 block ml-1">
                  03. OBJECTIVE
                </label>
                <div className="relative">
                  <select className="brutal-input w-full appearance-none bg-white pr-10">
                    <option>BRAND IDENTITY REDESIGN</option>
                    <option>AGGRESSIVE GROWTH CAMPAIGN</option>
                    <option>FULL CONTENT OVERHAUL</option>
                    <option>SOMETHING ELSE</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/20 font-mono text-[10px]">
                    SELECT_
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-mono text-[10px] font-black uppercase tracking-widest text-black/40 block ml-1">
                  04. INTEL / MESSAGE
                </label>
                <textarea
                  placeholder="WHAT ARE WE BUILDING?"
                  rows={4}
                  className="brutal-input w-full resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full py-6 bg-black text-white border-4 border-black font-grotesk font-black text-xl uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-neon hover:text-black transition-all duration-300"
              >
                INITIATE CONTACT
                <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
