import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingBag, Heart, SlidersHorizontal } from 'lucide-react';

interface CategoryViewProps {
  category: string;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onToggleWishlist: (product: Product, e: React.MouseEvent) => void;
  wishlistIds: string[];
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  category,
  products,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const categoryTitles: Record<string, { title: string; subtitle: string; banner: string }> = {
    engagement: {
      title: 'ENGAGEMENT RINGS',
      subtitle: 'Ethical lab-grown diamond engagement rings handcrafted in 18k recycled gold and solid platinum.',
      banner: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1600',
    },
    wedding: {
      title: 'WEDDING BANDS',
      subtitle: 'Eternity pavé bands and bespoke matching sets designed to seal everlasting vows.',
      banner: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=1600',
    },
    jewelry: {
      title: 'FINE JEWELRY',
      subtitle: 'Parisian Atelier necklaces, earrings, and bracelets studded with top 1% lab-grown diamonds.',
      banner: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1600',
    },
    diamonds: {
      title: 'CERTIFIED LAB DIAMONDS',
      subtitle: 'Pure, solar-cultivated loose diamonds and solitaire masterpieces certified by IGI.',
      banner: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1600',
    },
    gemstones: {
      title: 'PRECIOUS GEMSTONES',
      subtitle: 'Vibrant emeralds, royal sapphires, and blush pink gems framed by micro-pavé diamonds.',
      banner: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1600',
    },
    gifts: {
      title: 'GIFTS OF HIGH JEWELRY',
      subtitle: 'Curated tokens of affection wrapped in Floréa signature velvet presentation boxes.',
      banner: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1600',
    },
  };

  const activeCategoryInfo = categoryTitles[category] || {
    title: 'THE FLORÉA COLLECTION',
    subtitle: 'Explore our complete catalog of certified lab-grown diamond and fine gemstone jewelry.',
    banner: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1600',
  };

  let filtered = category === 'all' ? products : products.filter((p) => p.category === category);

  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="bg-[#f5f2eb] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto space-y-10">
        {/* Category Hero Banner */}
        <div className="relative h-64 sm:h-80 rounded-xs overflow-hidden bg-[#e8e2d5]">
          <img
            src={activeCategoryInfo.banner}
            alt={activeCategoryInfo.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 text-white">
            <h1 className="font-serif-display text-3xl sm:text-5xl tracking-[0.06em] uppercase font-light mb-3">
              {activeCategoryInfo.title}
            </h1>
            <p className="font-sans-clean text-xs sm:text-sm max-w-xl font-light leading-relaxed text-[#f5f2eb]">
              {activeCategoryInfo.subtitle}
            </p>
          </div>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#e6e0d3] gap-4">
          <div className="flex items-center space-x-2 text-xs font-sans-clean text-[#524b42]">
            <SlidersHorizontal size={14} />
            <span className="uppercase tracking-widest font-medium">
              SHOWING {filtered.length} PIECE{filtered.length !== 1 ? 'S' : ''}
            </span>
          </div>

          <div className="flex items-center space-x-2 font-sans-clean text-xs">
            <label htmlFor="sort-by" className="uppercase text-[#8c8276] tracking-wider">
              Sort By:
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-[#d6cfc2] px-3 py-1.5 focus:outline-none focus:border-[#2b2621] text-[#2b2621]"
            >
              <option value="featured">Featured Atelier Selection</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Catalog Grid */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl text-[#7a7063]">No pieces currently available in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.map((product) => {
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

                    {/* Badge */}
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
                      className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#2b2621] transition-all"
                      aria-label="Wishlist"
                    >
                      <Heart
                        size={14}
                        className={isWishlisted ? 'fill-[#8b3d2b] text-[#8b3d2b]' : ''}
                      />
                    </button>

                    {/* Add to Bag hover button */}
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
        )}
      </div>
    </div>
  );
};
