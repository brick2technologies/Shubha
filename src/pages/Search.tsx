import React, { useState, useMemo } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

interface SearchProps {
  query: string;
  onNavigate: (page: 'home' | 'categories' | 'search' | 'cart', category?: string, query?: string) => void;
}

const Search: React.FC<SearchProps> = ({ query, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const lowercaseQuery = searchQuery.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.material?.toLowerCase().includes(lowercaseQuery) ||
      product.deity?.toLowerCase().includes(lowercaseQuery) ||
      product.purpose?.toLowerCase().includes(lowercaseQuery)
    );
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search query is already being filtered in real-time
  };

  const popularSearches = ['Ganesha', 'Diwali', 'Brass', 'Diya', 'Pooja Thali'];

  return (
    <div className="min-h-screen bg-cream py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-brown mb-4">Search Products</h1>
          <p className="text-xl text-gray-600">Find the perfect pooja items for your needs</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for diyas, idols, incense, and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pr-12 text-lg border-2 border-saffron rounded-full focus:ring-4 focus:ring-saffron focus:ring-opacity-50 focus:border-saffron shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-saffron text-white p-2 rounded-full hover:bg-brown transition-colors"
            >
              <SearchIcon className="w-6 h-6" />
            </button>
          </form>
        </div>

        {/* Popular Searches */}
        {!searchQuery && (
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-4">Popular searches:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-4 py-2 bg-white text-saffron border border-saffron rounded-full hover:bg-saffron hover:text-white transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchQuery && (
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredProducts.length > 0 
                ? `Found ${filteredProducts.length} products for "${searchQuery}"`
                : `No products found for "${searchQuery}"`
              }
            </p>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : searchQuery ? (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No results found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We couldn't find any products matching "{searchQuery}". Try different keywords or browse our categories.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => setSearchQuery('')}
                className="bg-saffron text-white px-6 py-3 rounded-lg hover:bg-brown transition-colors"
              >
                Clear Search
              </button>
              <button
                onClick={() => onNavigate('categories')}
                className="bg-white text-saffron border border-saffron px-6 py-3 rounded-lg hover:bg-saffron hover:text-white transition-colors"
              >
                Browse Categories
              </button>
            </div>
            
            {/* Suggestions */}
            <div className="mt-8">
              <p className="text-gray-600 mb-4">Try searching for:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-3 py-1 bg-cream text-brown rounded-full hover:bg-saffron hover:text-white transition-colors text-sm"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">🕉️</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Start Your Search</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Enter a keyword above to find the perfect pooja items for your spiritual needs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;