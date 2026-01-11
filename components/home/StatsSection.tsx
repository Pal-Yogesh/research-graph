"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: "50+", label: "Clients", desc: "Trusted by leading brands and businesses" },
    { value: "500+", label: "Projects Delivered", desc: "Completed successfully" },
    { value: "1,000+", label: "Expert Team", desc: "Talented professionals" },
    { value: "100%", label: "Expertise", desc: "In market research, data analytics, and more" },
  ]

  return (
    <section
      ref={ref}
      className="py-24 bg-[oklch(0.30_0.08_235)] text-white relative overflow-hidden"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image src="/abstract-data-network-earth-globe.jpg" alt="Background" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-space-grotesk">
            Do You Have the Full View?
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Research's ecosystem of data, emerging tech, AI and experts delivers the most complete and clear
            understanding of consumer behavior that reveals new pathways to growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6"
            >
              <div className="text-5xl font-bold mb-3 font-space-grotesk">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-white/70">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
