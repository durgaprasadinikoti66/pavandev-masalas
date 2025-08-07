import Header from "@/components/header"
import ProductList from "@/components/product-list"
import HeroCarousel from "@/components/hero-carousel"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Now using the Carousel */}
        <HeroCarousel />

        {/* Products Section */}
        <section id="products" className="container mx-auto px-4 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 animate-fade-in animate-slide-up" style={{ animationDelay: '0.8s' }}>
            Our Exquisite Range of Masalas
          </h2>
          <ProductList />
        </section>

        {/* About Us Section */}
        <section id="about-us" className="bg-white py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 animate-fade-in animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Our Story: The Essence of Pavandev
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed animate-fade-in animate-slide-up" style={{ animationDelay: '0.4s' }}>
              At Pavandev Masala, our journey began with a simple yet profound vision: to bring the authentic flavors of Indian cuisine to every home. Rooted in generations of culinary tradition, we meticulously select the finest whole spices from across India.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed animate-fade-in animate-slide-up" style={{ animationDelay: '0.6s' }}>
              Each blend is hand-ground with precision and passion, ensuring that every packet of Pavandev Masala delivers unparalleled aroma, rich taste, and the true essence of homemade goodness. We are committed to purity, quality, and the joy of cooking.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in animate-slide-up" style={{ animationDelay: '0.8s' }}>
              Join us in celebrating the vibrant culinary heritage of India, one delicious meal at a time.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 px-4 bg-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 animate-fade-in animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed animate-fade-in animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Have questions, feedback, or just want to say hello? We'd love to hear from you!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800 animate-fade-in animate-slide-up" style={{ animationDelay: '0.6s'}}>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-red-600 mb-2" />
                <h3 className="font-semibold text-xl mb-1">Email Us</h3>
                <a href="mailto:info@pavandevmasala.com" className="text-red-600 hover:underline">info@pavandevmasala.com</a>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-red-600 mb-2" />
                <h3 className="font-semibold text-xl mb-1">Call Us</h3>
                <a href="tel:+911234567890" className="text-red-600 hover:underline">+91 12345 67890</a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-red-600 mb-2" />
                <h3 className="font-semibold text-xl mb-1">Visit Us</h3>
                <p className="text-center">123 Spice Lane, Flavor City, India</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 px-4 md:px-8 lg:px-12 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Pavandev Masala. All rights reserved.</p>
      </footer>
    </div>
  )
}
