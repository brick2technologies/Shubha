import React, { useState } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";

interface HeaderProps {
  onNavigate: (
    page: "home" | "categories" | "festivals" | "about" | "contact" | "search" | "cart",
    category?: string,
    query?: string
  ) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { getTotalItems } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate("search", undefined, searchQuery);
      setSearchQuery("");
    }
  };

  const menuItems = [
    { name: "Home", page: "home" as const },
    { name: "Categories", page: "categories" as const },
    { name: "Festivals", page: "festivals" as const },
    { name: "About", page: "about" as const },
    { name: "Contact", page: "contact" as const },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      {/* 🔴 Top Offer Bar */}
      <div className="bg-[#e21f26] text-white text-sm py-2 px-4 text-center flex items-center justify-center">
        <span className="mr-2">🚚</span>
        Free Shipping on Orders Above ₹999 | Dasara Special Offer - Up to 30% Off
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate("home")}  
          >
            <div className="flex items-center">
              <img
                src="logo.png" // replace with your logo path
                alt="Shubham Logo"
                className="w-28 h-auto mr-2 object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.page)}
                className={`text-lg font-medium transition-colors hover:text-red-800 ${currentPage === item.page ? "text-saffron" : "text-gray-700"
                  }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Search + Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search pooja items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pr-10 border  rounded-full 
               focus:ring-2 focus:ring-saffron focus:border-saffron outline-none transition-all"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-saffron"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>


            {/* Profile Icon */}
            <button className="p-2 text-gray-700 hover:text-red-800">
              <User className="w-6 h-6" />
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => onNavigate("cart")}
              className="relative p-2 text-gray-700 hover:text-red-800"
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => onNavigate("search")}
              className="p-2 text-gray-700"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate("cart")}
              className="relative p-2 text-gray-700"
            >
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-800 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onNavigate(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${currentPage === item.page
                      ? "text-red-800 bg-gray-100"
                      : "text-gray-700 hover:text-red-800 hover:bg-gray-100"
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
