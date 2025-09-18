import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <div className="group relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-saffron/20 hover:shadow-2xl hover:border-saffron/40 transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
        />
        {product.bestseller && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-saffron to-brown text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            ⭐ Bestseller
          </div>
        )}
      </div>

      {/* Product Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-brown mb-2 group-hover:text-saffron transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-extrabold text-saffron">
            ₹{product.price}
          </span>
          <span className="text-xs bg-cream text-brown px-3 py-1 rounded-full shadow-sm">
            {product.category}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-saffron to-brown text-white font-semibold py-2.5 px-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
