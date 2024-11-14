import BentoGridSection from '@/components/home-sections/bento-grid'
import DiscordSection from '@/components/home-sections/discord'
import UserExperiencesSection from '@/components/home-sections/experiences'
import HeroSection from '@/components/home-sections/hero'

function Home() {
  return (
    <>
      <HeroSection />
      <DiscordSection />
      <BentoGridSection />
      <UserExperiencesSection />
    </>
  )
}

export default Home
