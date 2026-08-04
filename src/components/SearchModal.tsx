import React, { useState } from 'react';
import { Product } from '../types';
import { Search, X, ShoppingBag } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (category: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onSelectCategory,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const popularSearches = ['Solitaire', 'Halo Ring', 'Lab Diamond', 'Sapphire', 'Emerald Cut', 'Studs'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#f5f2eb] border border-[#e6e0d3] max-w-2xl w-full rounded-xs p-6 shadow-2xl relative space-y-6">
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-[#2b2621] pb-3">
          <Search size={20} className="text-[#524b42] mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search rings, necklaces, diamonds, or gemstones..."
            className="w-full bg-transparent text-lg font-serif text-[#2b2621] placeholder-[#8c8276] focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="text-[#3d332a] hover:text-[#000000] p-1 focus:outline-none ml-2"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Popular Tags */}
        {!query && (
          <div className="space-y-3">
            <p className="font-sans-clean text-[10px] tracking-[0.2em] uppercase text-[#8c8276] font-semibold">
              POPULAR SEARCHES
            </p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="font-sans-clean text-xs px-3 py-1.5 border border-[#d6cfc2] bg-white text-[#3d332a] hover:border-[#2b2621] hover:bg-[#f5f2eb] transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="max-h-96 overflow-y-auto space-y-3 pt-2">
            <p className="font-sans-clean text-[10px] tracking-[0.2em] uppercase text-[#8c8276]">
              {filteredProducts.length} RESULT{filteredProducts.length !== 1 ? 'S' : ''} FOR "{query}"
            </p>

            {filteredProducts.length === 0 ? (
              <p className="font-serif text-base text-[#7a7063] text-center py-8">
                No matching pieces found. Please try a different search query.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="flex items-center space-x-3 p-2 bg-white border border-[#e6e0d3] hover:border-[#2b2621] cursor-pointer transition-colors rounded-xs"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 object-cover bg-[#e8e2d5] rounded-xs"
                    />
                    <div>
                      <h4 className="font-serif text-sm font-medium text-[#2b2621]">
                        {product.name}
                      </h4>
                      <p className="font-sans-clean text-xs text-[#70665a]">
                        ${product.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
