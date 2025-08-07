import Header from "@/components/header"
import ProductList from "@/components/product-list"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-500 py-20 px-4 md:py-28 md:px-8 lg:px-12 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Savor the Essence of India
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 animate-fade-in animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Authentic Pavandev Masalas
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Hand-ground with passion and tradition, our premium spices bring unparalleled flavor to every dish. Explore our exquisite range and elevate your culinary journey.
          </p>
        </section>

        {/* Products Section */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 animate-fade-in animate-slide-up" style={{ animationDelay: '0.8s' }}>
            Our Exquisite Range of Masalas
          </h2>
          <ProductList />
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 px-4 md:px-8 lg:px-12 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Pavandev Masala. All rights reserved.</p>
      </footer>
    </div>
  )
}
