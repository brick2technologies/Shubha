import React, { useEffect } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { motion } from "framer-motion";


interface HomeProps {
  onNavigate: (page: 'home' | 'categories' | 'search' | 'cart', category?: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const bestsellers = products.filter(p => p.bestseller);

  useEffect(() => {
    // Fade-in animation
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100');
        el.classList.remove('opacity-0');
      }, index * 200);
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[radial-gradient(circle,hsla(31,100%,90%,1)_0%,hsla(45,100%,88%,1)_100%,hsla(39,96%,90%,1)_100%)] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-10 ">
        {/* Decorative overlay */}
        <div className="absolute inset-0"></div>

        {/* ✨ Floating Sparkles / Stars */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_12px_rgba(255,200,0,0.8)]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center top-20 md:top-0 sm:top-0 ">

          {/* Left Content */}
          <div className="text-center md:text-left space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in md:mt-[-20px]  ">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#e21f26] leading-snug font-playfair">
              Bringing Divinity to Your Home
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-Inter max-w-md mx-auto md:mx-0">
              Discover authentic pooja items, sacred idols, and spiritual essentials
              to enhance your devotional journey. Shop from our curated collection
              of traditional and modern pooja accessories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-gradient-to-r from-yellow-400 to-[#ef9221] text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:scale-105 transition drop-shadow-[0_0_20px_rgba(255,140,0,0.8)]">
                👜 Shop Now
              </button>
              <button className="border-2 border-red-600 text-red-600 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-red-600 hover:text-white transition">
                Explore Categories
              </button>
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative flex justify-center md:mt-0 drop-shadow-[0_0_20px_rgba(255,140,0,0.8)]"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="hero-image.png"
              alt="Collection of pooja items for worship"
              loading="lazy"
              decoding="async"
              className="rounded-2xl w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] h-auto object-contain"
            />
          </motion.div>

        </div>

        {/* Floating side lamps */}
        <motion.img
          src="long-deepam.webp"
          alt="Lamp"
          className="absolute top-4 left-4 sm:top-5 sm:left-10 w-16 sm:w-20 h-32 sm:h-40 drop-shadow-[0_0_20px_rgba(255,140,0,0.8)]"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src="right-lamp.webp"
          alt="Lamp"
          className="absolute top-4 right-4 sm:top-5 sm:right-10 w-16 sm:w-20 h-32 sm:h-40 drop-shadow-[0_0_20px_rgba(255,140,0,0.8)] transform -rotate-90 scale-x-[-1] origin-center"
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>




      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in opacity-0">
            <h2 className="text-4xl font-bold text-red-800 mb-4 font-playfair">Sacred Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-Inter">
              Explore our carefully curated collection of authentic pooja items and spiritual essentials
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.name}
                onClick={() => onNavigate("categories", category.name)}
                className="group relative cursor-pointer bg-white/90 backdrop-blur-sm border border-orange-200 hover:border-saffron rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Floating emoji/icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-300 to-orange-500 text-3xl shadow-md mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.name === "Diyas" && "🪔"}
                  {category.name === "Idols" && "🕉️"}
                  {category.name === "Pooja Thalis" && "🪙"}
                  {category.name === "Incense" && "🔥"}
                  {category.name === "Festive Kits" && "🎁"}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-brown group-hover:text-saffron transition-colors mb-1">
                  {category.name}
                </h3>
                {/* Decorative glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-200/30 to-orange-200/30 opacity-0 group-hover:opacity-100 blur-lg transition duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 bg-[linear-gradient(135deg,hsla(50,55%,70%,1)_0%,hsla(0,100%,74%,1)_100%)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Heading */}
          <div className="text-center mb-16 animate-fade-in opacity-0">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-red-600 mb-4 relative inline-block">
              ✨ Bestselling Items ✨
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Most loved products by our devotees
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestsellers.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in opacity-0 transform transition-all hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Glow Ornaments */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-tr from-yellow-300/40 to-orange-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-tr from-orange-400/30 to-red-300/20 rounded-full blur-3xl"></div>
      </section>


      {/* Festival Promotion */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in opacity-0">
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-white/20">
      <h2 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
        🪔✨ Dasara Celebration Sale ✨🪔
      </h2>
      <p className="text-xl text-cream mb-8 max-w-2xl mx-auto">
        Celebrate the victory of good over evil with our special Dasara
        collection. Flat <span className="font-bold text-yellow-200">30% OFF</span> on
        idols, pooja thalis, and festive kits!
      </p>
      <button
        onClick={() => onNavigate('categories', 'Festive Kits')}
        className="bg-yellow-400 hover:bg-yellow-300 text-brown font-bold py-3 px-10 rounded-full text-lg shadow-md transition-all duration-300 transform hover:scale-110 flex items-center justify-center mx-auto"
      >
        Explore Dasara Collection
        <ChevronRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  </div>
</section>


      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in opacity-0">
            <h2 className="text-4xl font-bold text-brown mb-4">What Our Devotees Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of families across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Mumbai",
                rating: 5,
                text: "Amazing quality products! The brass diyas are beautifully crafted and the delivery was super fast. Highly recommend!"
              },
              {
                name: "Rajesh Kumar",
                location: "Delhi",
                rating: 5,
                text: "Best place for authentic pooja items. The Ganesh idol I bought was absolutely stunning and perfect for our celebration."
              },
              {
                name: "Meera Patel",
                location: "Ahmedabad",
                rating: 5,
                text: "Excellent service and genuine products. The incense sticks are of premium quality and last longer than others."
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`bg-cream rounded-lg p-6 animate-fade-in opacity-0`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-saffron fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-brown">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;