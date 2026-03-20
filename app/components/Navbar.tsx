'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#work', label: 'WORK' },
  { href: '#services', label: 'SERVICES' },
  { href: '#about', label: 'ABOUT' },
  { href: '#labs', label: 'LABS' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('work')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['work', 'services', 'about', 'labs', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 border-b-4 border-black transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-2' : 'bg-light py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-grotesk font-bold text-2xl uppercase tracking-widest text-black group flex items-center gap-1"
        >
          BRUTAL<span className="text-neon group-hover:rotate-12 transition-transform duration-300 inline-block">.</span>AGENCY
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ href, label }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            return (
              <Link
                key={href}
                href={href}
                className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/60 hover:text-black transition-all relative group`}
              >
                <span className={isActive ? 'text-black' : ''}>{label}</span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon"
                  initial={false}
                  animate={{ width: isActive ? '100%' : '0%' }}
                  transition={{ duration: 0.3, ease: 'circOut' }}
                />
                {!isActive && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 font-grotesk font-bold text-[11px] uppercase tracking-widest px-6 py-3 bg-black text-white border-2 border-black overflow-hidden transition-all duration-300 hover:bg-neon hover:text-black"
          >
            <span className="relative z-10 flex items-center gap-2">
              HIRE THE BEST <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-black bg-white shadow-brutal active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-0 w-full bg-white border-b-4 border-black px-6 py-8 flex flex-col gap-6 shadow-2xl md:hidden"
          >
            {navLinks.map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="font-grotesk font-bold text-3xl uppercase tracking-tight text-black flex items-center justify-between group"
                >
                  {label}
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-neon" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 pt-6 border-t-2 border-black/5"
            >
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full font-grotesk font-bold text-base uppercase tracking-widest py-5 bg-neon text-black border-4 border-black shadow-brutal hover:shadow-brutal-lg flex items-center justify-center gap-3 transition-all"
              >
                START A PROJECT <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
