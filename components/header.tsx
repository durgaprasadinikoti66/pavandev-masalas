import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-8 lg:px-12 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image src="/images/logo.png" alt="Pavandev Logo" width={150} height={40} className="h-10 w-auto" />
        <span className="sr-only">Pavandev Masala</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors" prefetch={false}>
          Products
        </Link>
        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors" prefetch={false}>
          About Us
        </Link>
        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors" prefetch={false}>
          Contact
        </Link>
      </nav>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </header>
  )
}
