import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pavandev Masala - Authentic Spices",
  description:
    "Discover the rich flavors and aromas of Pavandev Masala, crafted with tradition and quality. Hand-ground with passion and tradition, our premium spices bring unparalleled flavor to every dish.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
