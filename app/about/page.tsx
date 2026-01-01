"use client"

import { motion } from "framer-motion"
import { Users, Award, Globe, TrendingUp } from "lucide-react"

const expertise = [
  { icon: Users, label: "FMCG Research", color: "from-primary to-accent" },
  { icon: Award, label: "Healthcare Studies", color: "from-accent to-chart-3" },
  { icon: Globe, label: "Technology Sector", color: "from-chart-3 to-chart-2" },
  { icon: TrendingUp, label: "B2B Insights", color: "from-chart-2 to-primary" },
]

const team = [
  {
    name: "Leadership Team",
    role: "Strategic Direction",
    description: "Experienced leaders driving innovation in market research and analytics",
  },
  {
    name: "Research Experts",
    role: "Methodology & Design",
    description: "PhD-level researchers ensuring scientific rigor in every project",
  },
  {
    name: "Data Scientists",
    role: "Analytics & Insights",
    description: "Advanced analytics specialists turning data into actionable intelligence",
  },
  {
    name: "Field Operations",
    role: "Execution & Quality",
    description: "Dedicated professionals ensuring flawless data collection worldwide",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-space-grotesk">About Research</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a leading market research company specializing in transforming complex data into clear, actionable
              insights that drive business success across industries and markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 font-space-grotesk">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to revolutionize market research, Research has grown into a trusted partner
                  for businesses seeking data-driven decision-making capabilities.
                </p>
                <p>
                  We combine advanced technology with deep industry expertise to deliver comprehensive research
                  solutions that span survey programming, data processing, analytics, and field management.
                </p>
                <p>
                  Our commitment to quality, innovation, and client success has made us a preferred choice for companies
                  looking to understand their markets and customers better.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "10+", label: "Years Experience" },
                    { value: "500+", label: "Projects Delivered" },
                    { value: "50+", label: "Countries" },
                    { value: "100+", label: "Expert Team" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center p-4"
                    >
                      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering excellence in market research
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 text-2xl font-bold text-primary-foreground">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold mb-2 font-space-grotesk">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">Industry Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deep knowledge across multiple sectors and industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-2xl text-center group cursor-pointer"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="text-primary-foreground" size={28} />
                </div>
                <p className="font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
