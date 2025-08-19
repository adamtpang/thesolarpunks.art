import HeroSection from '@/components/HeroSection'
import EpisodeGrid from '@/components/EpisodeGrid'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EpisodeGrid />
      <AboutSection />
      <Footer />
    </main>
  )
}