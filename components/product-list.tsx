"use client"

import { useEffect, useState } from "react"
import ProductCard from "./product-card"
import { products } from "@/lib/products"

export default function ProductList() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`transition-all duration-700 ease-out h-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <ProductCard name={product.name} image={product.image} description={product.description} />
        </div>
      ))}
    </div>
  )
}
