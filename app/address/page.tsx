"use client"

import { motion } from "framer-motion"
import { Building2, MapPin, Globe, Mail, Phone } from "lucide-react"

const offices = [
  {
    name: "Global Headquarters",
    address: "123 Research Avenue, Suite 500",
    city: "New York, NY 10001",
    country: "United States",
    phone: "+1 (234) 567-890",
    email: "ny@Research.com",
  },
  {
    name: "European Office",
    address: "45 Market Street",
    city: "London, EC2M 4AE",
    country: "United Kingdom",
    phone: "+44 20 1234 5678",
    email: "london@Research.com",
  },
  {
    name: "Asia Pacific Office",
    address: "789 Business Park",
    city: "Singapore 018956",
    country: "Singapore",
    phone: "+65 1234 5678",
    email: "singapore@Research.com",
  },
]

export default function AddressPage() {
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
              <Building2 className="text-primary-foreground" size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-space-grotesk">Our Locations</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find us across major business hubs worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <Globe className="text-primary-foreground" size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-6 font-space-grotesk">{office.name}</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                    <div className="text-sm text-muted-foreground">
                      <div>{office.address}</div>
                      <div>{office.city}</div>
                      <div>{office.country}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-primary flex-shrink-0" size={18} />
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="text-primary flex-shrink-0" size={18} />
                    <a href={`mailto:${office.email}`} className="text-sm text-muted-foreground hover:text-foreground">
                      {office.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto glass p-8 rounded-3xl"
          >
            <h2 className="text-3xl font-bold mb-6 font-space-grotesk">Company Details</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex justify-between border-b border-border pb-3">
                <span className="font-medium">Registered Company Name</span>
                <span className="text-right">Research Pvt Ltd</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="font-medium">Registration Number</span>
                <span className="text-right">12345678</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="font-medium">Tax ID</span>
                <span className="text-right">XX-XXXXXXX</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Year Established</span>
                <span className="text-right">2014</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
