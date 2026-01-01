"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(19, 19, 26, 0.3)", "rgba(19, 19, 26, 0.95)"])

  const scale = useTransform(scrollY, [0, 100], [1, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-card shadow-lg py-3" : "bg-card/95 backdrop-blur-md py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              {/* <Image
                src="https://media.licdn.com/dms/image/v2/D560BAQEjtJeKfyDl5A/company-logo_200_200/B56Zok0J_2JsAM-/0/1761554244019/Research_pvt_ltd_logo?e=1767225600&v=beta&t=SKAqeijRfOa-VNVLWdJ5JZ7K_UdfEqxcFM17GjZt40Q"
                alt="Research Logo"
                width={40}
                height={40}
                className="transition-transform group-hover:scale-110"
              /> */}
              <div className="font-space-grotesk text-xl md:text-2xl font-bold text-card-foreground">Research</div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-card-foreground hover:text-[oklch(0.60_0.12_195)] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[oklch(0.60_0.12_195)] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link href="/contact">
                <Button className="bg-[oklch(0.35_0.08_240)] text-white hover:bg-[oklch(0.40_0.09_240)] font-bold px-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-card-foreground p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[72px] left-0 right-0 bg-card shadow-xl z-40 lg:hidden border-t"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-semibold text-card-foreground hover:text-[oklch(0.60_0.12_195)] transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-[oklch(0.35_0.08_240)] text-white hover:bg-[oklch(0.40_0.09_240)] font-bold rounded-full mt-4 shadow-lg transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
