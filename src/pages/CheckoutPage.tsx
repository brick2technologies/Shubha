import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <button
            onClick={() => navigate("/categories/all")}
            className="bg-saffron text-white px-6 py-3 rounded-lg hover:bg-brown transition-colors"
          >
            Shop Now
          </button>
        </div>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brown mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing Info */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-saffron"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-saffron"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-saffron"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-saffron"
              />
              <input
                type="text"
                placeholder="Pincode"
                className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-saffron"
              />
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="divide-y">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between py-2">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="border-t mt-4 pt-4 flex justify-between font-bold">
              <span>Total</span>
              <span className="text-saffron">₹{getTotalPrice()}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="mt-6 w-full bg-saffron text-white py-3 rounded-lg font-semibold hover:bg-brown transition-colors"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
