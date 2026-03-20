import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: '#2ff801',
        acid: '#eaea00',
        brutal: '#050505',
        light: '#f8f8f8',
        'soft-gray': '#e5e5e5',
        'deep-gray': '#1a1a1a',
      },
      fontFamily: {
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        work: ['var(--font-work-sans)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      boxShadow: {
        brutal: '4px 4px 0 #050505',
        'brutal-lg': '8px 8px 0 #050505',
        'brutal-white': '4px 4px 0 #fff',
        'brutal-neon': '4px 4px 0 #2ff801',
        'brutal-acid': '4px 4px 0 #eaea00',
        'brutal-hover': '2px 2px 0 #050505',
        'brutal-xl': '12px 12px 0 #050505',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
      letterSpacing: {
        tightest: '-0.04em',
        widestest: '0.2em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
