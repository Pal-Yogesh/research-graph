"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, Users, TrendingUp, MapPin, Diamond } from "lucide-react"

const services = [
  {
    icon: Diamond,
    title: "Digital IPs",
    description:
      "Build powerful digital intellectual properties that resonate with your audience. From branded content series to social media campaigns, we create digital assets that drive engagement and brand loyalty.",
    color: "oklch(0.35 0.08 240)",
  },
  {
    icon: TrendingUp,
    title: "Influencer Marketing",
    description:
      "Connect with the right influencers to amplify your brand message. We manage end-to-end influencer campaigns from identification to execution, ensuring authentic partnerships that deliver results.",
    color: "oklch(0.60 0.12 195)",
  },
  {
    icon: Users,
    title: "Talent Management",
    description: "Comprehensive talent representation and management services. We nurture and promote content creators, helping them grow their personal brand while partnering with the right opportunities.",
    color: "oklch(0.55 0.10 200)",
  },
  {
    icon: MapPin,
    title: "End to End Edutainment Content Production",
    description: "Premium content production that educates and entertains. From concept to post-production, we create engaging video content that captivates audiences and delivers your message effectively.",
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
            Complete Digital Marketing Solutions
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-spectrum digital marketing services designed to amplify your brand presence and drive measurable results
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
