'use client'

import { useState, FormEvent } from 'react'
import { Mail } from 'lucide-react'

interface FormState {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    }, 900)
  }

  return (
    <section
      id="contact"
      className="py-24 px-6 border-b-4 border-black relative overflow-hidden"
      style={{ background: 'var(--acid)' }}
    >
      {/* Grid bg overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.15,
        }}
        aria-hidden="true"
      />

      {/* Floating Mail Icon */}
      <a
        href="mailto:hello@brutal.agency"
        className="mail-float absolute top-8 right-8 md:top-10 md:right-12 z-20 w-14 h-14 bg-black border-4 border-black shadow-brutal flex items-center justify-center hover:rotate-[-8deg] hover:scale-110 transition-transform duration-200"
        aria-label="Send email to BRUTAL.AGENCY"
      >
        <Mail size={24} stroke="#2ff801" strokeWidth={2.5} />
      </a>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Label */}
        <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-4">
          // 004 — CONTACT
        </p>

        {/* Heading */}
        <h2
          className="font-grotesk font-bold uppercase leading-none mb-12"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.02em', lineHeight: '0.9' }}
        >
          READY TO
          <br />
          GET LOUD?
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">
                YOUR NAME
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="JOHN DOE"
                required
                value={form.name}
                onChange={handleChange}
                className="brutal-input"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">
                YOUR EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="YOU@COMPANY.COM"
                required
                value={form.email}
                onChange={handleChange}
                className="brutal-input"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">
              WHAT DO YOU NEED?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="TELL US ABOUT YOUR PROJECT..."
              required
              value={form.message}
              onChange={handleChange}
              className="brutal-input"
            />
          </div>

          <button
            type="submit"
            disabled={status !== 'idle'}
            className={`btn-press w-full font-grotesk font-bold uppercase text-sm py-5 border-4 border-black shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-xl transition-all duration-200 ${
              status === 'success'
                ? 'bg-black text-neon'
                : 'bg-black text-white hover:bg-neon hover:text-black'
            }`}
            style={{ letterSpacing: '0.15em', cursor: status !== 'idle' ? 'not-allowed' : 'pointer' }}
          >
            {status === 'idle' && 'SUBMIT REQUEST →'}
            {status === 'sending' && 'SENDING...'}
            {status === 'success' && '✓ MESSAGE RECEIVED'}
          </button>
        </form>

        {status === 'success' && (
          <p className="form-success mt-4 font-mono text-xs uppercase tracking-widest font-bold text-black text-center">
            WE&apos;LL MAKE SOME NOISE TOGETHER SOON.
          </p>
        )}
      </div>
    </section>
  )
}
