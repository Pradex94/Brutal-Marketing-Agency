import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import MarqueeStrip from '@/app/components/MarqueeStrip'
import Services from '@/app/components/Services'
import Portfolio from '@/app/components/Portfolio'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
