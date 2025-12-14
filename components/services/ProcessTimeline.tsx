"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ClipboardList, Code, PlayCircle, BarChart2, FileText, CheckCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
  {
    icon: ClipboardList,
    title: "Research Design",
    description: "Define objectives, methodology, and research framework",
  },
  {
    icon: Code,
    title: "Survey Programming",
    description: "Develop and test survey instruments across platforms",
  },
  {
    icon: PlayCircle,
    title: "Fieldwork Execution",
    description: "Launch and monitor data collection operations",
  },
  {
    icon: BarChart2,
    title: "Data Processing",
    description: "Clean, validate, and analyze collected data",
  },
  {
    icon: FileText,
    title: "Insights Generation",
    description: "Transform data into actionable business intelligence",
  },
  {
    icon: CheckCircle,
    title: "Final Delivery",
    description: "Present findings with recommendations and next steps",
  },
]

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const progress = progressRef.current

    if (!container || !progress) return

    const ctx = gsap.context(() => {
      gsap.to(progress, {
        scaleX: 1,
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-32 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach from survey design to final decision
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Progress bar */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-border hidden md:block">
            <div
              ref={progressRef}
              className="h-full bg-[oklch(0.60_0.12_195)] origin-left"
              style={{ scaleX: 0 }}
            />
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative z-10 w-24 h-24 mx-auto rounded-full bg-[oklch(0.35_0.08_240)] flex items-center justify-center mb-4 border-4 border-background shadow-lg">
                    <step.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-space-grotesk">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
