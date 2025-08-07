'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface SlideContent {
  title: string
  subtitle: string
  description: string
  buttonText?: string
  buttonLink?: string
}

const slides: SlideContent[] = [
  {
    title: "Savor the Essence of India",
    subtitle: "Authentic Pavandev Masalas",
    description: "Hand-ground with passion and tradition, our premium spices bring unparalleled flavor to every dish. Explore our exquisite range and elevate your culinary journey.",
    buttonText: "Explore Products",
    buttonLink: "#products",
  },
  {
    title: "Crafted with Purity & Passion",
    subtitle: "The Secret to Exquisite Indian Cuisine",
    description: "At Pavandev, we believe in preserving the true essence of spices. Our masalas are made from the finest ingredients, ensuring unmatched quality and taste in every pack.",
    buttonText: "Learn More",
    buttonLink: "#about-us", // Link to About Us section
  },
]

export default function HeroCarousel() {
  // Increased autoplay delay to 5000ms for slower transitions
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback((index: number) => {
    emblaApi && emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) {
      console.log("Embla API not initialized yet.");
      return
    }
    console.log("Embla API initialized:", emblaApi); // Debugging log

    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect) // Re-initialize on window resize

    // Clean up function
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, setScrollSnaps, onSelect])

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh]">
      {/* Moved overflow-hidden to embla__viewport */}
      <div className="embla__viewport h-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide relative flex-shrink-0 flex-grow-0 basis-full h-full">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/spices-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Background video of spices and cooking"
              />
              {/* Changed to emerald-green to amber gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/60 to-amber-600/60 flex flex-col items-center justify-center text-white text-center p-4 md:p-8 lg:p-12">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold mb-6 animate-fade-in animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  {slide.description}
                </p>
                {slide.buttonText && slide.buttonLink && (
                  <Button
                    asChild
                    className="bg-white text-emerald-900 hover:bg-gray-100 text-lg px-8 py-3 rounded-full shadow-lg animate-fade-in animate-slide-up"
                    style={{ animationDelay: '0.8s' }}
                  >
                    <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
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

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
              index === selectedIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
