"use client"

import { motion } from "framer-motion"
import { FileCode, BarChart3, MapPin, BookOpen, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProcessTimeline from "@/components/services/ProcessTimeline"

const services = [
  {
    id: "digital-ips",
    icon: FileCode,
    title: "Digital IPs",
    description:
      "Create powerful digital intellectual properties that become synonymous with your brand. From branded content series to viral social campaigns, we develop digital assets that build long-term brand equity and audience loyalty.",
    features: [
      "Branded Content Series Development",
      "Social Media IP Creation",
      "Digital Show Production",
      "Viral Campaign Conceptualization",
      "Brand Storytelling & Narrative Design",
      "Cross-Platform Content Strategy",
      "IP Rights Management",
    ],
    color: "oklch(0.35 0.08 240)",
  },
  {
    id: "influencer-marketing",
    icon: BarChart3,
    title: "Influencer Marketing",
    description:
      "Strategic influencer partnerships that drive authentic engagement. We connect brands with the perfect influencer matches, manage campaigns end-to-end, and deliver measurable results across all major platforms.",
    features: [
      "Influencer Discovery & Vetting",
      "Campaign Strategy & Planning",
      "Contract Negotiation & Management",
      "Content Approval & Quality Control",
      "Performance Tracking & Analytics",
      "Multi-Platform Campaign Execution",
      "ROI Reporting & Optimization",
      "Micro to Macro Influencer Network",
    ],
    color: "oklch(0.60 0.12 195)",
  },
  {
    id: "talent-management",
    icon: MapPin,
    title: "Talent Management",
    description:
      "Comprehensive representation and career development for digital content creators. We nurture talent, build their personal brands, and connect them with premium opportunities that align with their values and goals.",
    features: [
      "Personal Brand Development",
      "Career Strategy & Planning",
      "Brand Partnership Opportunities",
      "Contract Negotiation",
      "Content Strategy Consultation",
      "Media Training & PR Management",
      "Financial & Legal Advisory",
      "Growth & Monetization Support",
    ],
    color: "oklch(0.55 0.10 200)",
  },
  {
    id: "content-production",
    icon: BookOpen,
    title: "End to End Edutainment Content Production",
    description:
      "Premium content that educates and entertains in equal measure. From concept to final delivery, we produce high-quality video content that captivates audiences while delivering valuable information and brand messages.",
    features: [
      "Concept Development & Scripting",
      "Video Production (Studio & On-Location)",
      "Professional Editing & Post-Production",
      "Animation & Motion Graphics",
      "Educational Content Design",
      "Entertainment Format Development",
      "Multi-Language Content Creation",
      "Distribution Strategy & Optimization",
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
              Complete digital marketing solutions from influencer partnerships to premium content production
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
              360° Digital Marketing Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From strategy to execution, we provide comprehensive digital marketing services that help brands connect 
              authentically with their audiences. Our integrated approach combines influencer marketing, talent management, 
              and world-class content production to deliver campaigns that resonate and drive results.
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
              Let's discuss how our digital marketing expertise can elevate your brand
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
