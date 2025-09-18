import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import AboutUs from "./pages/Aboutus";
import ContactUs from "./pages/ContactUs";
import Festivals from "./pages/Festivals";
import ProductDetail from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <CartProvider>
      {/* Router must wrap everything that uses useNavigate */}
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-cream">
          <Header /> {/* ✅ inside Router */}
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories/:category" element={<Categories />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/festivals" element={<Festivals />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/search/:query" element={<Search />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
          <Footer /> {/* ✅ inside Router */}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
