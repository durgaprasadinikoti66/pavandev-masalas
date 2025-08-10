"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface SlideContent {
  title: string
  subtitle: string
  description: string
  buttonText?: string
  buttonLink?: string
  backgroundImage?: string
}

const slides: SlideContent[] = [
  {
    title: "Savor the Essence of India",
    subtitle: "Authentic Pavandev Masalas",
    description:
      "Hand-ground with passion and tradition, our premium spices bring unparalleled flavor to every dish. Explore our exquisite range and elevate your culinary journey.",
    buttonText: "Explore Products",
    buttonLink: "#products",
    backgroundImage: "/images/spices-hero-1.jpg",
  },
  {
    title: "Bringing Authentic Flavours",
    subtitle: "To Every Kitchen",
    description:
      "Our masalas are crafted with the finest ingredients, ensuring that every meal you prepare is filled with the authentic taste of India. Taste the difference quality makes.",
    buttonText: "View Products",
    buttonLink: "#products",
    backgroundImage: "/images/spices-hero-2.jpg",
  },
  {
    title: "Pure & Natural Spices",
    subtitle: "From Our Kitchen to Yours",
    description:
      "Experience the rich aroma and vibrant colors of our carefully selected spices. Each blend tells a story of tradition, quality, and authentic Indian flavors.",
    buttonText: "Discover Quality",
    buttonLink: "#about-us",
    backgroundImage: "/images/spices-hero-3.jpg",
  },
  {
    title: "Flavour of the Gods",
    subtitle: "Spice for Your Soul",
    description:
      "Discover our comprehensive collection of premium spices and masalas. From whole spices to ground powders, we bring you the essence of traditional Indian cooking.",
    buttonText: "Shop Now",
    buttonLink: "#products",
    backgroundImage: "/images/spices-hero-4.jpg",
  },
]

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 8000, stopOnInteraction: false })])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) {
      console.log("Embla API not initialized yet.")
      return
    }
    console.log("Embla API initialized:", emblaApi)

    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, setScrollSnaps, onSelect])

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh]">
      <div className="embla__viewport h-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide relative flex-shrink-0 flex-grow-0 basis-full h-full">
              <Image
                src={slide.backgroundImage || "/placeholder.svg"}
                alt={`${slide.title} - Pavandev Masalas`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 flex flex-col items-center justify-center text-white text-center p-4 md:p-8 lg:p-12">
                <h1
                  className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in animate-slide-up drop-shadow-lg"
                  style={{ animationDelay: "0.5s" }}
                >
                  {slide.title}
                </h1>
                <h2
                  className="text-2xl md:text-4xl font-bold mb-6 animate-fade-in animate-slide-up drop-shadow-lg"
                  style={{ animationDelay: "0.7s" }}
                >
                  {slide.subtitle}
                </h2>
                <p
                  className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in animate-slide-up drop-shadow-lg"
                  style={{ animationDelay: "0.9s" }}
                >
                  {slide.description}
                </p>
                {slide.buttonText && slide.buttonLink && (
                  <Button
                    asChild
                    className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-3 rounded-full shadow-lg animate-fade-in animate-slide-up border-0"
                    style={{ animationDelay: "1.1s" }}
                  >
                    <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white hover:text-gray-900 rounded-full p-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white hover:text-gray-900 rounded-full p-2"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
              index === selectedIndex ? "bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
