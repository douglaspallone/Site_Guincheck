import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Features } from "@/components/features"
import { SeeInside } from "@/components/see-inside"
import { HowItWorks } from "@/components/how-it-works"
import { Audience } from "@/components/audience"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <Header />
      <Hero />
      <Problem />
      <Features />
      <SeeInside />
      <HowItWorks />
      <Audience />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
