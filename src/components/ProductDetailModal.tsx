import React, { useState } from 'react';
import { Product } from '../types';
import { X, Heart, ShoppingBag, ShieldCheck, Truck, RefreshCw, Award, ChevronDown, ChevronUp } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, metal: string, carat: string, size: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  onOpenRingSizer: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onOpenRingSizer,
}) => {
  if (!product) return null;

  const metals = product.metalOptions || ['18k White Gold', '18k Yellow Gold', '18k Rose Gold', 'Platinum'];
  const carats = ['1.00 ct', '1.25 ct', '1.50 ct', '2.00 ct'];
  const ringSizes = ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5'];

  const [selectedMetal, setSelectedMetal] = useState(metals[0]);
  const [selectedCarat, setSelectedCarat] = useState(product.carat || carats[1]);
  const [selectedRingSize, setSelectedRingSize] = useState('6.5');
  const [activeTab, setActiveTab] = useState<'specs' | 'shipping' | 'warranty'>('specs');
  const [addedToast, setAddedToast] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedMetal, selectedCarat, selectedRingSize);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#f5f2eb] border border-[#e6e0d3] max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-xs p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#3d332a] hover:text-[#000000] p-1 focus:outline-none z-10"
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left - Image Gallery Preview */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-xs bg-[#e8e2d5] border border-[#d6cfc2]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.hoverImage && (
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square overflow-hidden rounded-xs bg-[#e8e2d5] border border-[#d6cfc2]">
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} perspective`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xs bg-[#e8e2d5] border border-[#d6cfc2] flex items-center justify-center p-4 text-center">
                  <div className="space-y-1">
                    <Award size={24} className="mx-auto text-[#8b3d2b]" />
                    <p className="font-sans-clean text-[10px] uppercase tracking-widest text-[#524b42]">
                      Certified IGI Gemological Passport Included
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right - Bespoke Customization Controls */}
          <div className="space-y-6">
            <div>
              {product.collection && (
                <span className="font-sans-clean text-[10px] tracking-[0.25em] text-[#8c8276] uppercase font-semibold block mb-1">
                  {product.collection}
                </span>
              )}
              <h1 className="font-serif-display text-2xl sm:text-3xl text-[#2b2621] uppercase font-normal">
                {product.name}
              </h1>
              <p className="font-sans-clean text-lg font-semibold text-[#2b2621] mt-2">
                ${product.price.toLocaleString()} USD
              </p>
              <p className="font-sans-clean text-xs text-[#524b42] mt-2 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Metal Selector */}
            <div className="space-y-2">
              <label className="font-sans-clean text-[11px] tracking-[0.18em] text-[#3d332a] uppercase font-medium block">
                Precious Metal: <span className="font-normal text-[#70665a]">{selectedMetal}</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {metals.map((metal) => (
                  <button
                    key={metal}
                    type="button"
                    onClick={() => setSelectedMetal(metal)}
                    className={`font-sans-clean text-xs py-2 px-3 border transition-colors ${
                      selectedMetal === metal
                        ? 'border-[#2b2621] bg-[#2b2621] text-white font-medium'
                        : 'border-[#d6cfc2] bg-white text-[#3d332a] hover:border-[#8c8276]'
                    }`}
                  >
                    {metal}
                  </button>
                ))}
              </div>
            </div>

            {/* Diamond Carat Selector */}
            {product.category === 'engagement' || product.category === 'diamonds' ? (
              <div className="space-y-2">
                <label className="font-sans-clean text-[11px] tracking-[0.18em] text-[#3d332a] uppercase font-medium block">
                  Center Diamond Carat: <span className="font-normal text-[#70665a]">{selectedCarat}</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {carats.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setSelectedCarat(c)}
                      className={`font-sans-clean text-xs py-2 border transition-colors ${
                        selectedCarat === c
                          ? 'border-[#2b2621] bg-[#2b2621] text-white font-medium'
                          : 'border-[#d6cfc2] bg-white text-[#3d332a] hover:border-[#8c8276]'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Ring Size Selector */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-sans-clean text-[11px] tracking-[0.18em] text-[#3d332a] uppercase font-medium">
                  Ring Size (US)
                </label>
                <button
                  type="button"
                  onClick={onOpenRingSizer}
                  className="font-sans-clean text-[10px] text-[#8b3d2b] uppercase tracking-wider underline hover:text-[#522318]"
                >
                  Size Guide & Measurement
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {ringSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedRingSize(size)}
                    className={`font-sans-clean text-xs w-9 h-9 border flex items-center justify-center transition-colors ${
                      selectedRingSize === size
                        ? 'border-[#2b2621] bg-[#2b2621] text-white font-medium'
                        : 'border-[#d6cfc2] bg-white text-[#3d332a] hover:border-[#8c8276]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions: Add to Bag & Wishlist */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleAdd}
                className="flex-1 bg-[#2b2520] hover:bg-[#120f0d] text-[#f5f2eb] font-sans-clean text-xs tracking-[0.25em] uppercase py-3.5 px-4 font-medium transition-colors shadow-sm flex items-center justify-center space-x-2"
              >
                <ShoppingBag size={16} />
                <span>ADD TO SHOPPING BAG</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-3.5 border transition-colors ${
                  isWishlisted
                    ? 'border-[#8b3d2b] bg-[#8b3d2b] text-white'
                    : 'border-[#d6cfc2] bg-white text-[#2b2621] hover:bg-[#f5f2eb]'
                }`}
                title="Save to Wishlist"
                aria-label="Save to wishlist"
              >
                <Heart size={18} className={isWishlisted ? 'fill-white' : ''} />
              </button>
            </div>

            {addedToast && (
              <p className="text-xs text-emerald-700 font-sans-clean text-center font-medium animate-in fade-in">
                ✓ Added to your Shopping Bag with custom specifications.
              </p>
            )}

            {/* Features Accordion Tabs */}
            <div className="border-t border-[#e6e0d3] pt-4 space-y-3">
              <div className="flex border-b border-[#e6e0d3]">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`font-sans-clean text-[11px] tracking-[0.18em] uppercase py-2 px-3 border-b-2 transition-colors ${
                    activeTab === 'specs'
                      ? 'border-[#2b2621] text-[#2b2621] font-semibold'
                      : 'border-transparent text-[#8c8276]'
                  }`}
                >
                  SPECIFICATIONS
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`font-sans-clean text-[11px] tracking-[0.18em] uppercase py-2 px-3 border-b-2 transition-colors ${
                    activeTab === 'shipping'
                      ? 'border-[#2b2621] text-[#2b2621] font-semibold'
                      : 'border-transparent text-[#8c8276]'
                  }`}
                >
                  SHIPPING & RETURNS
                </button>
                <button
                  onClick={() => setActiveTab('warranty')}
                  className={`font-sans-clean text-[11px] tracking-[0.18em] uppercase py-2 px-3 border-b-2 transition-colors ${
                    activeTab === 'warranty'
                      ? 'border-[#2b2621] text-[#2b2621] font-semibold'
                      : 'border-transparent text-[#8c8276]'
                  }`}
                >
                  GUARANTEE
                </button>
              </div>

              <div className="font-sans-clean text-xs text-[#524b42] font-light leading-relaxed min-h-[80px]">
                {activeTab === 'specs' && (
                  <ul className="list-disc list-inside space-y-1">
                    {product.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 'shipping' && (
                  <p>
                    Complimentary insured global delivery via FedEx Priority with signature required.
                    Eligible for 30-day hassle-free returns in original condition with certificate.
                  </p>
                )}
                {activeTab === 'warranty' && (
                  <p>
                    Floréa lifetime warranty includes annual diamond prong inspection, ultrasonic cleaning,
                    and complimentary re-sizing within 60 days of atelier delivery.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
