'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

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
      className={`sticky top-0 z-50 border-b-4 border-black transition-colors duration-200 ${
        scrolled ? 'bg-[#f0f0f0]' : 'bg-light'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-grotesk font-bold text-xl uppercase tracking-[0.12em] text-black hover:opacity-80 transition-opacity"
        >
          BRUTAL<span className="text-neon">.</span>AGENCY
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            return (
              <Link
                key={href}
                href={href}
                className={`font-mono text-xs font-bold uppercase tracking-widest text-black hover:text-neon transition-colors relative pb-0.5 ${
                  isActive ? 'nav-link-active' : ''
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="btn-press font-grotesk font-bold text-xs uppercase tracking-[0.1em] px-5 py-2.5 bg-black text-white border-2 border-black shadow-brutal hover:bg-neon hover:text-black transition-colors duration-200 inline-block"
          >
            HIRE US
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-1 border-2 border-black"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-light border-t-4 border-black px-6 py-5 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-xs font-bold uppercase tracking-widest text-black py-1 border-b border-black/10"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-press font-grotesk font-bold text-xs uppercase tracking-[0.1em] px-5 py-3 bg-black text-white border-2 border-black shadow-brutal hover:bg-neon hover:text-black transition-colors duration-200 inline-block text-center mt-2"
          >
            HIRE US
          </Link>
        </div>
      )}
    </nav>
  )
}
