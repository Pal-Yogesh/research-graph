"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Eye, Sparkles } from "lucide-react"

export default function VisionPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-accent/30"
      />

      <div className="absolute inset-0">
        <motion.div
          style={{ scale, opacity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          style={{ scale, opacity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8">
              <Eye className="text-primary-foreground" size={48} />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 font-space-grotesk">Our Vision</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass p-12 rounded-3xl mb-12"
          >
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-balance">
              To be the world's most trusted partner in transforming data into strategic decisions, empowering
              businesses to thrive in an increasingly complex marketplace.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Sparkles,
                title: "Innovation",
                description: "Leading with cutting-edge research methodologies",
              },
              {
                icon: Eye,
                title: "Clarity",
                description: "Making complex data simple and actionable",
              },
              {
                icon: Sparkles,
                title: "Impact",
                description: "Driving measurable business outcomes",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass p-6 rounded-2xl"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <item.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 font-space-grotesk">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
