import React, { useState } from 'react';
import { Product } from '../types';
import { ChevronLeft, ChevronRight, ShoppingBag, Heart, Eye } from 'lucide-react';

interface TrendingStyleProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onToggleWishlist: (product: Product, e: React.MouseEvent) => void;
  wishlistIds: string[];
}

export const TrendingStyle: React.FC<TrendingStyleProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
}) => {
  const [scrollIndex, setScrollIndex] = useState(0);

  // Get items for trending section
  const trendingProducts = products.filter(
    (p) => p.badge === 'NEW · EDITORS CHOICE' || p.badge === 'BEST SELLER' || p.id.startsWith('trend')
  );

  const maxIndex = Math.max(0, trendingProducts.length - 4);

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="bg-[#f5f2eb] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#e6e0d3]">
      <div className="max-w-[1800px] mx-auto">
        {/* Header & Controls */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-sans-clean text-[10px] tracking-[0.25em] text-[#8c8276] uppercase font-semibold mb-2">
              EDITORS PICK
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl tracking-[0.06em] text-[#2b2621] uppercase font-light">
              TRENDING STYLE
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              disabled={scrollIndex === 0}
              className={`p-2.5 border border-[#d6cfc2] transition-colors ${
                scrollIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-[#a39a8c]'
                  : 'hover:bg-[#e8e2d5] text-[#2b2621]'
              }`}
              aria-label="Previous trending item"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              disabled={scrollIndex >= maxIndex}
              className={`p-2.5 border border-[#d6cfc2] transition-colors ${
                scrollIndex >= maxIndex
                  ? 'opacity-40 cursor-not-allowed text-[#a39a8c]'
                  : 'hover:bg-[#e8e2d5] text-[#2b2621]'
              }`}
              aria-label="Next trending item"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Product Carousel Grid */}
        <div className="overflow-hidden">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${scrollIndex * 25}%)`,
            }}
          >
            {trendingProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xs bg-[#e8e2d5] mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Tag / Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 z-10 bg-[#f5f2eb]/90 backdrop-blur-xs px-2.5 py-1 border border-[#e6e0d3]">
                        <span className="font-sans-clean text-[9px] tracking-[0.2em] uppercase text-[#3d332a] font-medium">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Wishlist Toggle */}
                    <button
                      onClick={(e) => onToggleWishlist(product, e)}
                      className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#2b2621] transition-all shadow-xs"
                      aria-label="Wishlist"
                    >
                      <Heart
                        size={14}
                        className={isWishlisted ? 'fill-[#8b3d2b] text-[#8b3d2b]' : ''}
                      />
                    </button>

                    {/* Persistent or Hover "ADD TO BAG" bar matching Screenshot 7 */}
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                      <button
                        onClick={(e) => onAddToCart(product, e)}
                        className="w-full bg-[#2b2520] hover:bg-[#120f0d] text-[#f5f2eb] font-sans-clean text-[10px] tracking-[0.25em] uppercase py-2.5 font-medium transition-colors flex items-center justify-center space-x-1.5 shadow-md"
                      >
                        <ShoppingBag size={12} />
                        <span>ADD TO BAG</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between text-xs font-sans-clean pt-1">
                    <h3 className="font-serif text-sm tracking-wide text-[#2b2621] group-hover:text-[#8b3d2b] transition-colors">
                      {product.name}
                    </h3>
                    <span className="font-medium text-[#4a4239] ml-2">
                      ${product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
