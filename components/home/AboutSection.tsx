"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-[oklch(0.60_0.12_195)] mb-4 uppercase tracking-wider">About ResearchGraph</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 leading-tight font-space-grotesk">
              Transforming Markets Through Data Intelligence
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              ResearchGraph Pvt Ltd is a leading market research company delivering reliable information for a true
              understanding of Society, Markets, and People. We help organizations make better decisions through
              comprehensive data analysis and insights.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our expertise spans survey programming, data processing, field management, and market research support,
              serving clients across 50+ global markets with unmatched precision and reliability.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2 font-space-grotesk">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2 font-space-grotesk">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </motion.div>

          {/* Image grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src="/business-professional-analyzing-data-on-computer.jpg" alt="Data Analysis" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image src="/modern-office-collaboration.png" alt="Team Collaboration" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image src="/market-research-survey-on-tablet.jpg" alt="Survey Research" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src="/data-dashboard-charts.png" alt="Data Visualization" fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
