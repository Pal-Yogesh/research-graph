"use client"

import { motion } from "framer-motion"
import { FileCode, BarChart3, MapPin, BookOpen, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProcessTimeline from "@/components/services/ProcessTimeline"

const services = [
  {
    id: "survey",
    icon: FileCode,
    title: "Digital IPs",
    description:
      "Create engaging and authentic digital content for brands and businesses.",
    features: [
      "Branding and Logo Design",
      "Social Media Content Creation",
      "Video Content Creation",
      "Graphic Design",
      "Web Design",
    ],
    color: "oklch(0.35 0.08 240)",
  },
  {
    id: "data",
    icon: BarChart3,
    title: "Influencer Marketing",
    description:
      "Find and engage with the right influencers to promote your brand or product.",
    features: [
      "Influencer Identification",
      "Influencer Engagement",
      "Influencer Management",
      "Influencer Collaboration",
      "Influencer Partnership",
      "Influencer Campaign",
      "Influencer Campaign Management",
      "Influencer Campaign Analysis",
      "Influencer Campaign Reporting",
    ],
    color: "oklch(0.60 0.12 195)",
  },
  {
    id: "field",
    icon: MapPin,
    title: "Talent Management",
    description:
      "Professional field operations management ensuring data quality, timely delivery, and cost-effectiveness across all markets.",
    features: [
      "Talent Identification",
      "Talent Engagement",
      "Talent Management",
      "Talent Collaboration",
      "Talent Partnership",
      "Talent Campaign",
      "Talent Campaign Management",
      "Talent Campaign Analysis",
      "Talent Campaign Reporting",
    ],
    color: "oklch(0.55 0.10 200)",
  },
  {
    id: "research",
    icon: BookOpen,
    title: "Monk-E Studios",
    description:
      "Comprehensive end-to-end research support from study design to final reporting, helping you make informed decisions.",
    features: [
      "Video Content Creation",
      "Graphic Design",
      "Web Design",
      "Social Media Content Creation",
      "Branding and Logo Design",
    ],
    color: "oklch(0.40 0.09 230)",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.05),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-space-grotesk">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive market research solutions designed to transform your data into strategic advantages
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk">
              Full-Cycle Market Research Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From initial research design to final insights delivery, we provide end-to-end support for all your market
              research needs. Our integrated approach ensures quality, efficiency, and actionable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.icon className="text-white" size={40} />
                  </div>
                  <h2 className="text-4xl font-bold mb-4 font-space-grotesk">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <Link href="/contact">
                    <Button className="glow-hover bg-primary hover:bg-primary/90">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="glass p-8 rounded-3xl">
                    <h3 className="text-xl font-bold mb-6 font-space-grotesk">Key Features</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                          <span className="text-muted-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessTimeline />

      {/* CTA */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">Ready to get started?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how our services can help you achieve your research objectives
            </p>
            <Link href="/contact">
              <Button size="lg" className="glow-hover bg-primary hover:bg-primary/90">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
