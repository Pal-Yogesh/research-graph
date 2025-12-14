"use client"

import { motion } from "framer-motion"
import { Target, Zap, Shield, Users } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Quality Data",
    description:
      "Deliver the highest quality data through rigorous methodology, quality controls, and expert validation at every stage of the research process.",
    color: "from-primary to-accent",
  },
  {
    icon: Zap,
    title: "Faster Insights",
    description:
      "Leverage advanced technology and efficient processes to provide rapid turnaround without compromising on quality or accuracy.",
    color: "from-accent to-chart-3",
  },
  {
    icon: Shield,
    title: "Decision-Ready Outputs",
    description:
      "Transform raw data into clear, actionable insights that directly support strategic decision-making and business growth.",
    color: "from-chart-3 to-chart-2",
  },
  {
    icon: Users,
    title: "Global Reach",
    description:
      "Provide access to diverse markets and respondents across 50+ countries, ensuring comprehensive and representative insights.",
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
              To empower businesses with reliable, actionable market intelligence through innovative research
              methodologies and exceptional service delivery.
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
              We are committed to maintaining the highest standards of research integrity, ethical practices, and client
              confidentiality. Every project receives our full attention and expertise, regardless of size or scope.
            </p>
            <div className="glass p-6 rounded-2xl">
              <p className="text-xl font-medium italic text-balance">
                "Excellence is not an act, but a habit. We consistently deliver exceptional research that drives
                meaningful business outcomes."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
