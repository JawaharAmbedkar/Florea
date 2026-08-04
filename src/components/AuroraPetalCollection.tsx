import React from 'react';
import { Product } from '../types';
import { ShoppingBag, Eye, Heart } from 'lucide-react';

interface AuroraPetalCollectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onToggleWishlist: (product: Product, e: React.MouseEvent) => void;
  wishlistIds: string[];
}

export const AuroraPetalCollection: React.FC<AuroraPetalCollectionProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
}) => {
  const collectionProducts = products.filter((p) => p.collection === 'AURORA PETAL');

  return (
    <section className="bg-[#f5f2eb] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#e6e0d3]">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Editorial Info */}
        <div className="lg:col-span-4 space-y-6 pt-2">
          <p className="font-sans-clean text-[10px] tracking-[0.25em] text-[#8c8276] uppercase font-semibold">
            COLLECTION 01
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl tracking-[0.06em] text-[#2b2621] uppercase font-light leading-tight">
            AURORA PETAL
          </h2>
          <p className="font-sans-clean text-xs sm:text-sm text-[#524b42] leading-relaxed font-light pr-2">
            The AuroraPetal™ Ceremony collection reimagines the fine ring silhouette; interlocking a captivating flower-inspired diamond bloom set atop a hand-finished band. Every piece is certified in its provenance and finished with a hallmark that only Floréa can bestow.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onSelectProduct(collectionProducts[0])}
              className="group inline-flex items-center space-x-2 font-sans-clean text-xs tracking-[0.2em] text-[#2b2621] uppercase border-b border-[#2b2621] pb-1 hover:text-[#8b3d2b] hover:border-[#8b3d2b] transition-all"
            >
              <span>DISCOVER COLLECTION</span>
              <span className="group-hover:translate-x-1 transition-transform">›</span>
            </button>
          </div>
        </div>

        {/* Right 4-Product Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collectionProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-square overflow-hidden rounded-xs bg-[#e8e2d5] mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-2 left-2 z-10 bg-[#f5f2eb]/90 backdrop-blur-xs px-2 py-1 border border-[#e6e0d3]">
                      <span className="font-sans-clean text-[9px] tracking-[0.2em] uppercase text-[#3d332a] font-medium">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => onToggleWishlist(product, e)}
                    className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#2b2621] transition-all shadow-sm"
                    aria-label="Wishlist"
                  >
                    <Heart
                      size={14}
                      className={isWishlisted ? 'fill-[#8b3d2b] text-[#8b3d2b]' : ''}
                    />
                  </button>

                  {/* Hover Overlay Buttons */}
                  <div className="absolute inset-x-0 bottom-0 p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-center gap-2">
                    <button
                      onClick={(e) => onAddToCart(product, e)}
                      className="flex-1 bg-[#2b2621] hover:bg-[#1a1816] text-[#f5f2eb] font-sans-clean text-[10px] tracking-[0.2em] uppercase py-2.5 px-2 font-medium transition-colors flex items-center justify-center space-x-1.5"
                    >
                      <ShoppingBag size={12} />
                      <span>ADD TO BAG</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="p-2.5 bg-white/90 hover:bg-white text-[#2b2621] rounded-xs transition-colors"
                      title="Quick View"
                    >
                      <Eye size={14} />
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
    </section>
  );
};
