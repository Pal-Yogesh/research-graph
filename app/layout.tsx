import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { BackToTop } from "@/components/BackToTop"
import { PageTransition } from "@/components/PageTransition"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Flufex Connect",
  description:
    "Leading market research company specializing in survey programming, data processing, analytics, field management, and comprehensive research support.",
  generator: "v0.app",
  icons: {
    icon: "/logo2.JPEG",
   
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <Navbar />
        <PageTransition>
          <main className="pt-20">{children}</main>
        </PageTransition>
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  )
}
