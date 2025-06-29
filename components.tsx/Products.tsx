'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// Custom icon components
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);

const HeartSolidIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
  </svg>
);

const ShoppingBagIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
);

const FunnelIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
  </svg>
);

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isHot?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Label MN Re edition Black Hoodie",
    price: 1499,
    originalPrice: 1999,
    image: "/clothing1.png",
    category: "Hoodie",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey"],
    isNew: true
  },
  {
    id: 2,
    name: "Manifest Hoodie",
    price: 1150,
    originalPrice: 1450,
    image: "/clothing2.png",
    category: "Hoodie",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Maroon", "Black"],
    isHot: true
  },
  {
    id: 3,
    name: "Zen Collection Oversized Tee",
    price: 899,
    image: "/clothing3.png",
    category: "T-Shirt",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Purple", "Pink", "Blue"],
    isNew: true
  },
  {
    id: 4,
    name: "Minimalist Crew Neck",
    price: 1299,
    image: "/clothing4.png",
    category: "Sweatshirt",
    sizes: ["M", "L", "XL"],
    colors: ["Beige", "White", "Grey"],
  },
  {
    id: 5,
    name: "Vintage Wash Denim Jacket",
    price: 2499,
    image: "/clothing5.png",
    category: "Jacket",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    isHot: true
  },
  {
    id: 6,
    name: "Essential Cotton Tee",
    price: 699,
    image: "/clothing6.png",
    category: "T-Shirt",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Grey", "Navy"],
  },
  {
    id: 7,
    name: "Premium Polo Shirt",
    price: 1199,
    image: "/clothing7.png",
    category: "Polo",
    sizes: ["M", "L", "XL"],
    colors: ["White", "Navy", "Black"],
    isNew: true
  },
  {
    id: 8,
    name: "Zen Philosophy Hoodie",
    price: 1799,
    image: "/clothing8.png",
    category: "Hoodie",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy"],
  }
];

const categories = ["All", "Hoodie", "T-Shirt", "Sweatshirt", "Jacket", "Polo"];
const sizes = ["S", "M", "L", "XL", "XXL"];
const colors = ["Black", "White", "Grey", "Navy", "Blue", "Purple", "Pink", "Maroon", "Beige"];
const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "newest", label: "Newest First" },
  { value: "name", label: "Name A-Z" }
];

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("recommended");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [expandedFilters, setExpandedFilters] = useState({
    color: false,
    sizes: true
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }

    // Filter by colors
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some(color => selectedColors.includes(color))
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order for recommended
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedSizes, selectedColors, sortBy]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleFilter = (filterType: 'color' | 'sizes') => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType]
    }));
  };

  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const handleColorToggle = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-b-3xl">
            <div 
              className="absolute inset-0"
              style={{
                transform: `translateY(${scrollY * 0.3}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <Image
                src="/group.png"
                alt="TeeZen Collection"
                fill
                className="object-contain object-center scale-110"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10"></div>
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="text-center px-4">
                <div className="inline-block bg-white/85 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg border border-gray-200/50">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 tracking-wider">
                    TeeZen Collection
                  </h1>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg text-sm border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <FunnelIcon className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-8 shadow-sm">
              <h2 className="text-lg font-medium text-gray-800 mb-5">Filter by</h2>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-1.5 text-sm rounded transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter('color')}
                  className="flex items-center justify-between w-full text-sm font-medium text-gray-700 mb-3"
                >
                  <span>Colour</span>
                  {expandedFilters.color ? (
                    <ChevronUpIcon className="w-4 h-4" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4" />
                  )}
                </button>
                {expandedFilters.color && (
                  <div className="space-y-1.5 animate-fadeIn">
                    {colors.map((color) => (
                      <label key={color} className="flex items-center space-x-2 cursor-pointer text-sm">
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(color)}
                          onChange={() => handleColorToggle(color)}
                          className="w-3 h-3 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                        />
                        <span className="text-gray-600">{color}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter('sizes')}
                  className="flex items-center justify-between w-full text-sm font-medium text-gray-700 mb-3"
                >
                  <span>Sizes</span>
                  {expandedFilters.sizes ? (
                    <ChevronUpIcon className="w-4 h-4" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4" />
                  )}
                </button>
                {expandedFilters.sizes && (
                  <div className="space-y-1.5 animate-fadeIn">
                    {sizes.map((size) => (
                      <label key={size} className="flex items-center space-x-2 cursor-pointer text-sm">
                        <input
                          type="checkbox"
                          checked={selectedSizes.includes(size)}
                          onChange={() => handleSizeToggle(size)}
                          className="w-3 h-3 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                        />
                        <span className="text-gray-600 font-mono font-medium">{size}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
              <div className="text-gray-600">
                <span className="text-sm">{filteredProducts.length} products</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-gray-600 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 bg-white text-sm focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {product.isNew && (
                        <span className="bg-black text-white px-2 py-1 rounded text-xs font-medium">
                          New
                        </span>
                      )}
                      {product.isHot && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                          Hot
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 border border-black/20"
                        style={{ backgroundColor: '#E6E6FA' }}
                      >
                        {favorites.includes(product.id) ? (
                          <HeartSolidIcon className="w-4 h-4 text-red-500" />
                        ) : (
                          <HeartIcon className="w-4 h-4 text-black" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="mb-1">
                      <span className="text-xs text-gray-500">{product.category}</span>
                    </div>
                    
                    <h3 className="text-sm font-medium text-gray-800 mb-3 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Size Options */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.slice(0, 4).map((size) => (
                          <span
                            key={size}
                            className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            {size}
                          </span>
                        ))}
                        {product.sizes.length > 4 && (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                            +{product.sizes.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-medium text-gray-800">
                          ₹ {product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            ₹ {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      
                      <button 
                        className="px-3 py-1.5 text-sm font-medium text-gray-800 rounded transition-colors hover:opacity-90"
                        style={{ backgroundColor: '#FFB6C1' }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-medium text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters to see more products.</p>
              </div>
            )}

            {/* Pagination Section */}
            {filteredProducts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    Previous
                  </button>
                  
                  <button className="px-3 py-2 text-sm bg-gray-800 text-white rounded">
                    1
                  </button>
                  <button className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    2
                  </button>
                  <button className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    3
                  </button>
                  <span className="px-2 text-gray-500">...</span>
                  <button className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    10
                  </button>
                  
                  <button className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}