"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, Code2, Database, Users, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Survey Programming",
    description:
      "Advanced survey design and programming using industry-leading platforms like Confirmit, Decipher, and Qualtrics.",
    color: "oklch(0.35 0.08 240)",
  },
  {
    icon: Database,
    title: "Data Processing",
    description:
      "Comprehensive data cleaning, coding, tabulation, and validation with meticulous attention to quality.",
    color: "oklch(0.60 0.12 195)",
  },
  {
    icon: Users,
    title: "Field Management",
    description: "End-to-end fieldwork coordination, sample management, and quality control across global markets.",
    color: "oklch(0.55 0.10 200)",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Transform raw data into actionable insights with advanced statistical analysis and visualization.",
    color: "oklch(0.40 0.09 230)",
  },
]

export default function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-[oklch(0.60_0.12_195)] mb-4 uppercase tracking-wider">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 font-space-grotesk">
            Comprehensive Research Solutions
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end market research services powered by cutting-edge technology and deep industry expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-background rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-border overflow-hidden card-hover"
            >
              <div className="relative z-10">
                <div 
                  className="inline-flex p-4 rounded-xl mb-6" 
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-card-foreground mb-4 font-space-grotesk">{service.title}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[oklch(0.60_0.12_195)] font-semibold group-hover:gap-4 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
