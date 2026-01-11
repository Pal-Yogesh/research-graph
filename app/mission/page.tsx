"use client"

import { motion } from "framer-motion"
import { Target, Zap, Shield, Users } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Authentic Connections",
    description:
      "Create genuine relationships between brands and audiences through authentic storytelling and strategic influencer partnerships that resonate and inspire.",
    color: "from-primary to-accent",
  },
  {
    icon: Zap,
    title: "Creative Excellence",
    description:
      "Deliver exceptional content that captivates, educates, and entertains. Our production standards ensure every piece reflects quality and innovation.",
    color: "from-accent to-chart-3",
  },
  {
    icon: Shield,
    title: "Results-Driven Approach",
    description:
      "Focus on measurable outcomes and ROI. Every campaign is optimized for performance with transparent reporting and continuous improvement.",
    color: "from-chart-3 to-chart-2",
  },
  {
    icon: Users,
    title: "Talent First",
    description:
      "Nurture and empower content creators, helping them grow their personal brands while maintaining authenticity and creative freedom.",
    color: "from-chart-2 to-primary",
  },
]

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-chart-3/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-accent to-chart-3 flex items-center justify-center mb-8">
              <Target className="text-primary-foreground" size={48} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-space-grotesk">Our Mission</h1>
            <p className="text-2xl text-muted-foreground leading-relaxed text-balance">
              To revolutionize digital marketing by creating authentic connections between brands and audiences through 
              innovative content, strategic influencer partnerships, and exceptional talent management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">Our Core Pillars</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four fundamental principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className="glass p-8 rounded-3xl relative overflow-hidden group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <pillar.icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-space-grotesk">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk">Our Commitment</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We are committed to maintaining authenticity in every campaign, ethical partnerships with influencers and brands, 
              and transparent communication. Every project receives our creative passion and strategic expertise, regardless of scale.
            </p>
            <div className="glass p-6 rounded-2xl">
              <p className="text-xl font-medium italic text-balance">
                "Success in digital marketing isn't just about reach—it's about creating genuine connections that 
                inspire action and build lasting brand loyalty."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
