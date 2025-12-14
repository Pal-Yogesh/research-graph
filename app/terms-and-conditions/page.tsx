"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
              <FileText className="text-primary-foreground" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-space-grotesk">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl"
          >
            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 font-space-grotesk">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using ResearchGraph's services, you accept and agree to be bound by the terms and
                  provisions of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 font-space-grotesk">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ResearchGraph provides market research services including survey programming, data processing and
                  analytics, field management, and comprehensive research support. All services are subject to
                  availability and our standard service terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 font-space-grotesk">3. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">As a client, you agree to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Respond to requests for information in a timely manner</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Pay all fees according to agreed terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 font-space-grotesk">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, trademarks, and data on this website, including but not limited to software, databases,
                  text, graphics, icons, and hyperlinks, are the property of or licensed to ResearchGraph and are
                  protected by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 font-space-grotesk">5. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain strict confidentiality of all client data and research findings. All parties agree to
                  maintain confidentiality of proprietary information shared during the course of service delivery.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 font-space-grotesk">6. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms are specified in individual service agreements. Late payments may result in service
                  suspension and additional fees. All fees are non-refundable unless otherwise specified.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 font-space-grotesk">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ResearchGraph shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages resulting from your use of our services, even if we have been advised of the possibility of
                  such damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 font-space-grotesk">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate services with written notice as specified in the service agreement. Upon
                  termination, all outstanding fees become immediately due and payable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 font-space-grotesk">9. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                  posting to our website. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 font-space-grotesk">10. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms and Conditions, please contact us at legal@researchgraph.com or
                  through our contact page.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
