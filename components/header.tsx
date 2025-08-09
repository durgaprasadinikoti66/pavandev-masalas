"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-8 lg:px-12 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image src="/images/logo.png" alt="Pavandev Logo" width={150} height={40} className="h-10 w-auto" />
        <span className="sr-only">Pavandev Masala</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/"
          className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#products"
          className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
          prefetch={false}
        >
          Products
        </Link>
        <Link
          href="#about-us"
          className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
          prefetch={false}
        >
          About Us
        </Link>
        <Link
          href="#contact"
          className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px] sm:w-[300px]">
          <div className="flex flex-col gap-6 pt-8">
            <Link
              href="/"
              className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#products"
              className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors"
              prefetch={false}
            >
              Products
            </Link>
            <Link
              href="#about-us"
              className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors"
              prefetch={false}
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
