import React from 'react';
import { Product } from '../types';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onAddToCart,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#f5f2eb] border-l border-[#e6e0d3] w-full max-w-md h-full flex flex-col justify-between shadow-2xl relative">
        {/* Header */}
        <div className="p-6 border-b border-[#e6e0d3] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart size={20} className="text-[#8b3d2b] fill-[#8b3d2b]" />
            <h2 className="font-serif-display text-xl tracking-wider text-[#2b2621] uppercase font-normal">
              SAVED WISHLIST
            </h2>
            <span className="font-sans-clean text-xs text-[#8c8276]">({wishlistProducts.length})</span>
          </div>

          <button
            onClick={onClose}
            className="text-[#3d332a] hover:text-[#000000] p-1 focus:outline-none"
            aria-label="Close wishlist"
          >
            <X size={20} />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <Heart size={32} className="mx-auto text-[#b0a79a]" />
              <p className="font-serif text-xl text-[#7a7063]">Your wishlist is currently empty.</p>
              <p className="font-sans-clean text-xs text-[#8c8276] max-w-xs mx-auto">
                Save your favorite engagement rings, diamonds, and fine jewelry pieces while exploring.
              </p>
              <button
                onClick={onClose}
                className="mt-2 bg-[#2b2520] hover:bg-[#120f0d] text-[#f5f2eb] font-sans-clean text-xs tracking-[0.2em] uppercase py-3 px-6"
              >
                EXPLORE FLORÉA
              </button>
            </div>
          ) : (
            <div className="space-y-4 divide-y divide-[#e6e0d3]">
              {wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="pt-4 first:pt-0 flex space-x-4 group cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-xs bg-[#e8e2d5] shrink-0 group-hover:scale-105 transition-transform"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-base text-[#2b2621] font-medium group-hover:text-[#8b3d2b] transition-colors leading-tight">
                          {product.name}
                        </h4>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveFromWishlist(product.id);
                          }}
                          className="text-[#8c8276] hover:text-[#8b3d2b] p-0.5"
                          title="Remove from Wishlist"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <p className="font-sans-clean text-xs font-semibold text-[#2b2621] mt-1">
                        ${product.price.toLocaleString()}
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product, e);
                      }}
                      className="mt-2 w-full bg-[#2b2520] hover:bg-[#120f0d] text-[#f5f2eb] font-sans-clean text-[10px] tracking-[0.2em] uppercase py-2 font-medium flex items-center justify-center space-x-1.5 transition-colors"
                    >
                      <ShoppingBag size={12} />
                      <span>ADD TO BAG</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
