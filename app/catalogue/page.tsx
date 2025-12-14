"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const catalogueItems = [
  {
    title: "Survey Programming Services",
    description: "Comprehensive overview of our survey programming capabilities across all major platforms",
    pages: "12 pages",
    format: "PDF",
  },
  {
    title: "Data Analytics Solutions",
    description: "Detailed guide to our data processing, analytics, and visualization services",
    pages: "16 pages",
    format: "PDF",
  },
  {
    title: "Field Management Guide",
    description: "Complete breakdown of our field operations and quality management processes",
    pages: "10 pages",
    format: "PDF",
  },
  {
    title: "Market Research Support",
    description: "End-to-end research support services from design to delivery",
    pages: "14 pages",
    format: "PDF",
  },
  {
    title: "Case Studies Collection",
    description: "Real-world examples of successful research projects across industries",
    pages: "20 pages",
    format: "PDF",
  },
  {
    title: "Pricing & Packages",
    description: "Flexible pricing options and service packages tailored to your needs",
    pages: "8 pages",
    format: "PDF",
  },
]

export default function CataloguePage() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const cards = cardsRef.current

    if (!container || cards.length === 0) return

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        if (!card) return

        gsap.fromTo(
          card,
          {
            y: 50,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              end: "top center",
              scrub: 1,
            },
          },
        )
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8">
              <FileText className="text-primary-foreground" size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-space-grotesk">Service Catalogue</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Download comprehensive guides and service sheets to learn more about our market research solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Catalogue Grid */}
      <section ref={containerRef} className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogueItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass p-8 rounded-2xl h-full flex flex-col hover:border-primary/50 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <FileText className="text-primary-foreground" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 font-space-grotesk">{item.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{item.description}</p>

                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <span>{item.pages}</span>
                    <span>{item.format}</span>
                  </div>

                  <Button className="w-full glow-hover bg-primary hover:bg-primary/90">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-3xl text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space-grotesk">Need a custom solution?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team can create tailored research packages specific to your business needs
            </p>
            <Button size="lg" className="glow-hover bg-primary hover:bg-primary/90">
              Contact Our Experts
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
