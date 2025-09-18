import { useState, useMemo } from "react";
import { motion } from "framer-motion";



// Example product data
const products = [
  { id: 1, name: "Brass Diya", price: 299, category: "Pooja Items", material: "Brass", image: "/images/diya.jpg" },
  { id: 2, name: "Silver Idol", price: 1200, category: "Idols", material: "Silver", image: "/images/idol.jpg" },
  { id: 3, name: "Copper Kalash", price: 750, category: "Pooja Items", material: "Copper", image: "copper-kalash.jpg" },
  { id: 4, name: "Incense Sticks", price: 150, category: "Essentials", material: "Wood", image: "/images/incense.jpg" },
];

// Extract unique categories and materials
const categories = Array.from(new Set(products.map((p) => p.category)));
const materials = Array.from(new Set(products.map((p) => p.material)));

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [materialFilter, setMaterialFilter] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<string>(""); // ✅ now useful
  const [sortBy, setSortBy] = useState<string>("");

  // Filtering + Sorting
  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (materialFilter) {
      filtered = filtered.filter((p) => p.material === materialFilter);
    }

    // ✅ Apply price filter properly
    if (priceFilter === "below-500") {
      filtered = filtered.filter((p) => p.price < 500);
    } else if (priceFilter === "500-1000") {
      filtered = filtered.filter((p) => p.price >= 500 && p.price <= 1000);
    } else if (priceFilter === "above-1000") {
      filtered = filtered.filter((p) => p.price > 1000);
    }

    // Sorting
    if (sortBy === "price-low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [selectedCategory, materialFilter, priceFilter, sortBy]);

  return (
    <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
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
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-500"
          >
            <option value="">All Categories</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Material Filter */}
          <select
            value={materialFilter}
            onChange={(e) => setMaterialFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-500"
          >
            <option value="">All Materials</option>
            {materials.map((mat, i) => (
              <option key={i} value={mat}>
                {mat}
              </option>
            ))}
          </select>

          {/* Price Filter ✅ */}
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-500"
          >
            <option value="">All Prices</option>
            <option value="below-500">Below ₹500</option>
            <option value="500-1000">₹500 – ₹1000</option>
            <option value="above-1000">Above ₹1000</option>
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-orange-700 font-bold mt-1">₹{product.price}</p>
                <p className="text-sm text-gray-500">{product.material}</p>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
