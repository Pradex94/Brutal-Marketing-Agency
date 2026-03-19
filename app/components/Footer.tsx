import Link from 'next/link'

const socialLinks = [
  { label: 'INSTAGRAM', href: '#' },
  { label: 'TWITTER', href: '#' },
  { label: 'LINKEDIN', href: '#' },
  { label: 'TELEGRAM', href: '#' },
]

export default function Footer() {
  return (
    <footer
      className="px-6 pt-12 pb-8 border-t-4 border-black"
      style={{ background: 'var(--acid)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Top Row ── */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10 pb-10 border-b-4 border-black">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-grotesk font-bold text-2xl uppercase block mb-1 hover:opacity-80 transition-opacity"
              style={{ letterSpacing: '0.12em' }}
            >
              BRUTAL<span className="text-black underline underline-offset-4">.AGENCY</span>
            </Link>
            <span className="font-mono text-xs uppercase opacity-60 tracking-widest">
              EST. 2024 — DIGITAL OUTLAWS
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-mono text-xs font-bold uppercase tracking-widest px-4 py-2.5 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Bottom Row ── */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-widest opacity-60">
            ©2024 NOISE MAKERS INDUSTRIES. NO RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 font-mono text-xs uppercase tracking-widest opacity-50">
            <span>LAT: 52.5200</span>
            <span>LONG: 13.4050</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
