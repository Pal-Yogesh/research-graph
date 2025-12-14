"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const insights = [
  {
    category: "Consumer Insights",
    title: "The Future of Retail: 2025 Consumer Trends",
    date: "Dec 15, 2025",
    image: "/modern-retail-shopping-experience.jpg",
  },
  {
    category: "Market Analysis",
    title: "AI-Driven Analytics: Transforming Market Research",
    date: "Dec 10, 2025",
    image: "/artificial-intelligence-data-analytics.jpg",
  },
  {
    category: "Industry Report",
    title: "Global Consumer Confidence Index Q4 2025",
    date: "Dec 5, 2025",
    image: "/business-growth-chart-presentation.jpg",
  },
]

export default function InsightsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-sm font-bold text-[oklch(0.60_0.12_195)] mb-4 uppercase tracking-wider">Insights</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-card-foreground font-space-grotesk">
              Latest Insights & Publications
            </h3>
          </div>
          <Link
            href="/catalogue"
            className="hidden md:flex items-center gap-2 text-[oklch(0.60_0.12_195)] font-semibold hover:gap-4 transition-all"
          >
            View All Insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={insight.image || "/placeholder.svg"}
                  alt={insight.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-[oklch(0.60_0.12_195)] text-white text-xs font-bold rounded-full">
                    {insight.category}
                  </span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground mb-2">{insight.date}</div>
              <h4 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-[oklch(0.60_0.12_195)] transition-colors font-space-grotesk">
                {insight.title}
              </h4>
              <div className="flex items-center gap-2 text-[oklch(0.60_0.12_195)] font-semibold group-hover:gap-4 transition-all">
                Read More
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.article>
          ))}
        </div>

        <Link
          href="/catalogue"
          className="md:hidden flex items-center justify-center gap-2 text-[oklch(0.60_0.12_195)] font-semibold hover:gap-4 transition-all mt-8"
        >
          View All Insights
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
