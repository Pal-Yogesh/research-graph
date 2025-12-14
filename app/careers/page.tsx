"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Heart, TrendingUp, Globe, ChevronDown, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible hours and remote work options to help you maintain a healthy balance",
    color: "from-primary to-accent",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Continuous learning opportunities and clear paths for professional advancement",
    color: "from-accent to-chart-3",
  },
  {
    icon: Globe,
    title: "Global Projects",
    description: "Work on diverse international projects across 50+ markets",
    color: "from-chart-3 to-chart-2",
  },
  {
    icon: Briefcase,
    title: "Competitive Benefits",
    description: "Comprehensive benefits package including health insurance and performance bonuses",
    color: "from-chart-2 to-primary",
  },
]

const jobOpenings = [
  {
    title: "Senior Research Analyst",
    department: "Research",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Lead complex research projects and provide strategic insights to clients across multiple industries.",
    requirements: [
      "5+ years of market research experience",
      "Strong analytical and statistical skills",
      "Excellent communication abilities",
      "Experience with SPSS, R, or Python",
    ],
  },
  {
    title: "Survey Programmer",
    department: "Technology",
    location: "Remote",
    type: "Full-time",
    description: "Develop and program surveys across multiple platforms ensuring optimal respondent experience.",
    requirements: [
      "3+ years of survey programming experience",
      "Proficiency in Qualtrics, Decipher, or similar platforms",
      "Understanding of survey logic and quotas",
      "Attention to detail and quality focus",
    ],
  },
  {
    title: "Field Manager",
    department: "Operations",
    location: "On-site",
    type: "Full-time",
    description: "Oversee field operations, manage interviewer teams, and ensure data quality standards.",
    requirements: [
      "4+ years in field management or related role",
      "Experience managing remote teams",
      "Strong organizational skills",
      "Understanding of quality control procedures",
    ],
  },
  {
    title: "Data Scientist",
    department: "Analytics",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Apply advanced analytics and machine learning to extract insights from research data.",
    requirements: [
      "Master's degree in Statistics, Data Science, or related field",
      "Proficiency in Python and R",
      "Experience with predictive modeling",
      "Strong visualization skills",
    ],
  },
]

const testimonials = [
  "Data-driven",
  "Collaborative",
  "Remote-friendly",
  "Innovative",
  "Growth-focused",
  "Client-centric",
  "Diverse",
  "Supportive",
]

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)

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
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8">
              <Briefcase className="text-primary-foreground" size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-space-grotesk">Join Our Team</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Be part of a dynamic team that's transforming data into decisions for businesses worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">Why ResearchGraph?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a company that values your growth, well-being, and contributions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-2xl group"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <benefit.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-space-grotesk">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at ResearchGraph */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">Life at ResearchGraph</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex gap-4 overflow-hidden">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="flex gap-4 flex-shrink-0"
              >
                {[...testimonials, ...testimonials].map((tag, index) => (
                  <div key={index} className="glass px-6 py-3 rounded-full whitespace-nowrap">
                    <span className="text-foreground font-medium">{tag}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities to make an impact with our team
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 font-space-grotesk">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: expandedJob === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedJob === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border"
                    >
                      <div className="p-6 space-y-6">
                        <div>
                          <h4 className="font-bold mb-2">About the role</h4>
                          <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                        </div>

                        <div>
                          <h4 className="font-bold mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                <span className="text-primary mt-1">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="w-full md:w-auto glow-hover bg-primary hover:bg-primary/90">
                          Apply Now
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
