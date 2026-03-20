'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Logo & Manifesto */}
          <div className="md:col-span-6">
            <Link
              href="/"
              className="font-grotesk font-black text-4xl uppercase tracking-widest text-white mb-8 block group"
            >
              BRUTAL<span className="text-neon group-hover:rotate-12 transition-transform duration-300 inline-block">.</span>AGENCY
            </Link>
            <p className="font-work text-lg text-white/50 max-w-md leading-relaxed">
              WE DON&apos;T DO QUIET. WE DON&apos;T DO SAFE. WE BUILD DIGITAL WEAPONS FOR THE BOLD.
              JOIN THE REVOLUTION OR WATCH FROM THE SIDELINES.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-8 text-white/30">
              {"// NAVIGATION"}
            </p>
            <ul className="space-y-4">
              {['WORK', 'SERVICES', 'ABOUT', 'LABS', 'CONTACT'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="font-grotesk font-bold text-xl uppercase hover:text-neon transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Extra */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-8 text-white/30">
              {"// PLUGINS"}
            </p>
            <ul className="space-y-4">
              {['INSTAGRAM', 'TWITTER', 'LINKEDIN', 'BEHANCE', 'GITHUB'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-mono text-xs font-bold uppercase tracking-widest hover:text-neon transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-white group-hover:bg-neon" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">
            © {currentYear} BRUTAL AGENCY // ALL RIGHTS RESERVED // BUILT FOR SPEED
          </p>
          <div className="flex gap-8">
            <Link href="#" className="font-mono text-[9px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">
              PRIVACY_PROTOCOL
            </Link>
            <Link href="#" className="font-mono text-[9px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">
              TERMS_OF_ENGAGEMENT
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
