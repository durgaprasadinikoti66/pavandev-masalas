import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  name: string
  image: string
  description: string
}

export default function ProductCard({ name, image, description }: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <CardContent className="p-0">
        <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={300}
            height={300}
            className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
        <div className="p-4 text-center bg-white">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        </div>
        {/* Description Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center text-sm md:text-base leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
