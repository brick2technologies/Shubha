import React from "react";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-cream py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Start shopping to add items to your cart
            </p>
            <button
              onClick={() => navigate("/categories/all")}
              className="bg-saffron text-white px-8 py-3 rounded-lg font-medium hover:bg-brown transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brown mb-8">Shopping Cart</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Cart Items */}
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div key={item.id} className="p-6 flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-lg font-semibold text-saffron mt-1">
                    ₹{item.price}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <span className="w-12 text-center font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    ₹{item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-gray-50 px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-saffron">
                ₹{getTotalPrice()}
              </span>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={clearCart}
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Clear Cart
              </button>
              <button
                onClick={() => navigate("/categories/all")}
                className="flex-1 bg-white text-saffron border border-saffron py-3 px-6 rounded-lg font-medium hover:bg-saffron hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="flex-1 bg-saffron text-white py-3 px-6 rounded-lg font-medium hover:bg-brown transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Order Summary
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">₹{getTotalPrice()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping:</span>
              <span className="font-medium text-green-600">Free</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-lg font-bold text-saffron">
                  ₹{getTotalPrice()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
