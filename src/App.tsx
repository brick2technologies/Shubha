import { useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Search from './pages/Search';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import AboutUs from './pages/Aboutus';
import ContactUs from './pages/ContactUs';
import Festivals from './pages/Festivals';

type Page = 'home' | 'categories' | 'festivals' | 'about' | 'contact' | 'search' | 'cart';


function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const navigateTo = (page: Page, category?: string, query?: string) => {
    setCurrentPage(page);
    if (category) setSelectedCategory(category);
    if (query !== undefined) setSearchQuery(query);
  };

  const renderPage = () => {
  switch (currentPage) {
    case 'home':
      return <Home onNavigate={navigateTo} />;
    case 'categories':
      return <Categories category={selectedCategory} onNavigate={navigateTo} />;
    case 'festivals':
      return <Festivals onNavigate={navigateTo} />;
    case 'about':
      return <AboutUs onNavigate={navigateTo} />;
    case 'contact':
      return <ContactUs onNavigate={navigateTo} />;
    case 'search':
      return <Search query={searchQuery} onNavigate={navigateTo} />;
    case 'cart':
      return <Cart onNavigate={navigateTo} />;
    default:
      return <Home onNavigate={navigateTo} />;
  }
};

  return (
    <CartProvider>
      <div className="min-h-screen bg-cream">
        <Header onNavigate={navigateTo} currentPage={currentPage} />
        <main className="pt-16">
          {renderPage()}
        </main>
        <Footer onNavigate={navigateTo} />
      </div>
    </CartProvider>
  );
}

export default App;