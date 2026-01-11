"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Vision", href: "/vision" },
      { label: "Mission", href: "/mission" },
      // { label: "Careers", href: "/careers" },
    ],
    services: [
      { label: "Digital IPs", href: "/services#survey" },
      { label: "Influencer Marketing", href: "/services#data" },
      { label: "Talent Management", href: "/services#field" },
      { label: "Monk-E Studios", href: "/services#research" },
    ],
    resources: [
      // { label: "Catalogue", href: "/catalogue" },
      { label: "Contact", href: "/contact" },
      { label: "Address", href: "/address" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  }

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="logo2.JPEG"
                  alt="Research"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-space-grotesk text-lg font-bold">Research</h3>
                <p className="text-xs text-muted-foreground">Turning Data into Decisions</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Leading market research company specializing in survey programming, data analytics, and comprehensive
              research support.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/company/flufex-connect/"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.instagram.com/flufex_connect/"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </motion.a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Flufex Connect. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a
                href="mailto:prabhat@flufexconnect.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail size={14} />
                prabhat@flufexconnect.com
              </a>
              <a href="tel:+91 8987672664" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone size={14} />
                +91 8987672664
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
