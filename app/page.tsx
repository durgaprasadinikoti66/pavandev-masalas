import Header from "@/components/header"
import ProductList from "@/components/product-list"
import HeroCarousel from "@/components/hero-carousel"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <HeroCarousel />

        <section id="products" className="container mx-auto px-4 py-16 md:py-20">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 animate-fade-in animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            Our Exquisite Range of Masalas
          </h2>
          <ProductList />
        </section>

        <section id="about-us" className="bg-white py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 animate-fade-in animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Our Story: The Essence of Pavandev
            </h2>
            <p
              className="text-lg text-gray-700 mb-6 leading-relaxed animate-fade-in animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              At Pavandev Masala, our journey began with a simple yet profound vision: to bring the authentic flavors of
              Indian cuisine to every home. Rooted in generations of culinary tradition, we meticulously select the
              finest whole spices from across India.
            </p>
            <p
              className="text-lg text-gray-700 mb-6 leading-relaxed animate-fade-in animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              Each blend is hand-ground with precision and passion, ensuring that every packet of Pavandev Masala
              delivers unparalleled aroma, rich taste, and the true essence of homemade goodness. We are committed to
              purity, quality, and the joy of cooking.
            </p>
            <p
              className="text-lg text-gray-700 leading-relaxed animate-fade-in animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              Join us in celebrating the vibrant culinary heritage of India, one delicious meal at a time.
            </p>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-20 px-4 bg-gray-100">
          <div className="container mx-auto max-w-6xl text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 animate-fade-in animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Get in Touch
            </h2>
            <p
              className="text-lg text-gray-700 mb-12 leading-relaxed animate-fade-in animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              Have questions, feedback, or just want to say hello? We'd love to hear from you!
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800 animate-fade-in animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-red-600 mb-3" />
                <h3 className="font-semibold text-xl mb-2">Call Us</h3>
                <a href="tel:+919590369231" className="text-red-600 hover:underline text-lg">
                  +91 95903 69231
                </a>
              </div>

              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-red-600 mb-3" />
                <h3 className="font-semibold text-xl mb-2">Email Us</h3>
                <a href="mailto:info@pavandevmasala.com" className="text-red-600 hover:underline">
                  info@pavandevmasala.com
                </a>
              </div>

              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-red-600 mb-3" />
                <h3 className="font-semibold text-xl mb-2">Visit Us</h3>
                <div className="text-center text-sm leading-relaxed">
                  <p className="font-medium mb-1">MFD AND MKTD BY</p>
                  <p className="font-medium mb-1">PRAGATHI TRADERS</p>
                  <p>#61 SR NO 6/3 HIREMAGALUR</p>
                  <p>CHIKKAMAGALURU 577102</p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <Instagram className="h-8 w-8 text-red-600 mb-3" />
                <h3 className="font-semibold text-xl mb-2">Follow Us</h3>
                <a
                  href="https://www.instagram.com/pavandev_masala?igsh=cGpuemVibTdiMHll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline flex items-center gap-2"
                >
                  <Instagram className="h-5 w-5" />
                  @pavandev_masala
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <a
              href="https://www.instagram.com/pavandev_masala?igsh=cGpuemVibTdiMHll"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-red-400 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              Follow us on Instagram
            </a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Pavandev Masala. All rights reserved.</p>
          <p className="text-xs mt-2 text-gray-400">MFD AND MKTD BY PRAGATHI TRADERS, CHIKKAMAGALURU</p>
        </div>
      </footer>
    </div>
  )
}
