import type { Metadata } from 'next'
import { Space_Grotesk, Work_Sans, Space_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-work-sans',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BRUTAL.AGENCY — Digital Outlaws',
  description:
    'BRUTAL.AGENCY — We make noise, you make profit. A premium brutalist marketing agency delivering +450% ROI typical. Zero soft solutions. Pure adrenaline.',
  keywords: ['marketing agency', 'branding', 'growth hacking', 'content creation', 'digital marketing'],
  openGraph: {
    title: 'BRUTAL.AGENCY — Digital Outlaws',
    description: 'We make noise. You make profit.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${workSans.variable} ${spaceMono.variable}`}
    >
      <body className="bg-light text-brutal font-work antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
