import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id.toString() === id);

  const [liked, setLiked] = React.useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button
          onClick={() => navigate("/products")}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
        >
          Back to Products
        </button>
      </div>
    );
  }

  // Recommended Products (same category)
  const recommended = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left: Product Image */}
        <div className="lg:w-1/2 flex justify-center items-start">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* Right: Product Info */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-brown-900">
            {product.name}
          </h1>
          <p className="text-orange-700 font-bold text-2xl">₹{product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          <div className="flex flex-wrap gap-4">
            <span className="px-3 py-1 bg-cream text-brown rounded-full text-sm shadow-sm">
              Category: {product.category}
            </span>
            {product.material && (
              <span className="px-3 py-1 bg-cream text-brown rounded-full text-sm shadow-sm">
                Material: {product.material}
              </span>
            )}
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>

            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition ${
                liked ? "bg-red-500 text-white" : "border-red-500 text-red-500"
              }`}
            >
              <Heart className="w-5 h-5" />
              {liked ? "Liked" : "Like"}
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      {recommended.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-brown-900 mb-6">
            Recommended Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommended.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-orange-700 font-bold mt-1">₹{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
