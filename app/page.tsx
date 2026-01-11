import Hero from "@/components/home/Hero"
import AboutSection from "@/components/home/AboutSection"
import ServicesGrid from "@/components/home/ServicesGrid"
import StatsSection from "@/components/home/StatsSection"
import InsightsSection from "@/components/home/InsightsSection"
import CTASection from "@/components/home/CTASection"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutSection />
      <ServicesGrid />
      <StatsSection />
      {/* <InsightsSection /> */}
      <CTASection />
    </div>
  )
}
