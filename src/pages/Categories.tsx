import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { products } from "../data/products";
import { useCart } from "../context/CartContext";

// Extract unique categories and materials
const categories = Array.from(new Set(products.map((p) => p.category)));
const materials = Array.from(new Set(products.map((p) => p.material)));

export default function Products() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [materialFilter, setMaterialFilter] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [likedProducts, setLikedProducts] = useState<string[]>([]);

  const { addToCart } = useCart();

  // Price formatter
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  // Filtering + Sorting
  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory) filtered = filtered.filter((p) => p.category === selectedCategory);
    if (materialFilter) filtered = filtered.filter((p) => p.material === materialFilter);

    if (priceFilter === "below-500") filtered = filtered.filter((p) => p.price < 500);
    else if (priceFilter === "500-1000") filtered = filtered.filter((p) => p.price >= 500 && p.price <= 1000);
    else if (priceFilter === "above-1000") filtered = filtered.filter((p) => p.price > 1000);

    if (sortBy === "price-low") filtered = [...filtered].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") filtered = [...filtered].sort((a, b) => b.price - a.price);
    else if (sortBy === "name") filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

    return filtered;
  }, [selectedCategory, materialFilter, priceFilter, sortBy]);

  // Reset filters
  const resetFilters = () => {
    setSelectedCategory("");
    setMaterialFilter("");
    setPriceFilter("");
    setSortBy("");
  };

  const toggleLike = (id: string) => {
    setLikedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-brown-900 mb-10"
        >
          Our <span className="text-orange-700">Products</span>
        </motion.h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {/* Category */}
          <select
            aria-label="Filter by category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-500 outline-none"
          >
            <option value="">All Categories</option>
            {categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
          </select>

          {/* Material */}
          <select
            aria-label="Filter by material"
            value={materialFilter}
            onChange={(e) => setMaterialFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-500 outline-none"
          >
            <option value="">All Materials</option>
            {materials.map((mat, i) => <option key={i} value={mat}>{mat}</option>)}
          </select>

          {/* Price */}
          <select
            aria-label="Filter by price"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-500 outline-none"
          >
            <option value="">All Prices</option>
            <option value="below-500">Below ₹500</option>
            <option value="500-1000">₹500 – ₹1000</option>
            <option value="above-1000">Above ₹1000</option>
          </select>

          {/* Sort */}
          <select
            aria-label="Sort products"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-500 outline-none"
          >
            <option value="">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name (A-Z)</option>
          </select>

          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
          >
            Reset
          </button>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No products found. Try adjusting your filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all relative cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)} // navigate on card click
              >
                <img src={product.image} alt={product.name} loading="lazy" className="w-full h-56 object-contain" />
                
                {/* Like Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleLike(product.id); }} // stop propagation
                  className={`absolute top-3 right-3 p-2 rounded-full transition ${
                    likedProducts.includes(product.id) ? "bg-red-500 text-white" : "bg-white text-red-500"
                  }`}
                >
                  <Heart className="w-5 h-5" />
                </button>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-orange-700 font-bold mt-1">{formatPrice(product.price)}</p>
                  <p className="text-sm text-gray-500">{product.material}</p>

                  {/* Add to Cart */}
                  <button
                    onClick={(e) => { e.stopPropagation(); addToCart(product); }} // stop propagation
                    className="mt-3 flex items-center justify-center gap-2 w-full bg-orange-600 text-white rounded-lg py-2 hover:bg-orange-700 transition"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
