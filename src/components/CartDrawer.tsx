import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoApplied, setPromoApplied] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 250;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'FLOREA10') {
      setDiscount(0.1);
      setPromoApplied('10% OFF Private Access Applied');
    } else if (promoCode.trim().toUpperCase() === 'LUXURY200') {
      setDiscount(200);
      setPromoApplied('$200 Off Atelier Voucher Applied');
    } else {
      setPromoError('Invalid coupon code. Try FLOREA10');
    }
  };

  const calculatedDiscount = typeof discount === 'number' && discount < 1 ? subtotal * discount : discount;
  const finalTotal = Math.max(0, subtotal - calculatedDiscount);

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderSuccess(true);
      onClearCart();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#f5f2eb] border-l border-[#e6e0d3] w-full max-w-md h-full flex flex-col justify-between shadow-2xl relative">
        {/* Header */}
        <div className="p-6 border-b border-[#e6e0d3] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag size={20} className="text-[#2b2621]" />
            <h2 className="font-serif-display text-xl tracking-wider text-[#2b2621] uppercase font-normal">
              YOUR SHOPPING BAG
            </h2>
            <span className="font-sans-clean text-xs text-[#8c8276]">({cart.length})</span>
          </div>

          <button
            onClick={onClose}
            className="text-[#3d332a] hover:text-[#000000] p-1 focus:outline-none"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Order Success Screen */}
          {orderSuccess ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#e6ded2] text-[#8b3d2b] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-serif text-2xl text-[#2b2621] uppercase tracking-wider">
                COMMANDE CONFIRMÉE
              </h3>
              <p className="font-sans-clean text-xs text-[#524b42] max-w-xs mx-auto leading-relaxed">
                Thank you for choosing Floréa Maison Paris. Your bespoke order #FL-{Math.floor(100000 + Math.random() * 900000)} has been placed into atelier preparation.
              </p>
              <button
                onClick={() => {
                  setOrderSuccess(false);
                  onClose();
                }}
                className="mt-4 bg-[#2b2520] text-[#f5f2eb] font-sans-clean text-xs tracking-[0.2em] uppercase py-3 px-6"
              >
                CONTINUE EXPLORING
              </button>
            </div>
          ) : cart.length === 0 ? (
            /* Empty Cart */
            <div className="py-20 text-center space-y-4">
              <p className="font-serif text-xl text-[#7a7063]">Your bag is currently empty.</p>
              <p className="font-sans-clean text-xs text-[#8c8276] max-w-xs mx-auto">
                Discover our ethical lab-grown diamond collections handcrafted in recycled gold.
              </p>
              <button
                onClick={onClose}
                className="mt-2 bg-[#2b2520] hover:bg-[#120f0d] text-[#f5f2eb] font-sans-clean text-xs tracking-[0.2em] uppercase py-3 px-6"
              >
                BROWSE COLLECTIONS
              </button>
            </div>
          ) : (
            <>
              {/* Free Shipping Progress */}
              <div className="bg-[#ebd9ca]/40 p-3.5 rounded-xs border border-[#e2d2c3] space-y-2">
                <p className="font-sans-clean text-[11px] text-[#524b42] text-center font-medium">
                  {remainingForFreeShipping > 0
                    ? `Add $${remainingForFreeShipping.toLocaleString()} more for complimentary shipping`
                    : '✓ You qualified for Complimentary Worldwide Shipping & Lifetime Insurance!'}
                </p>
                <div className="w-full bg-[#d6cfc2] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#2b2621] h-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-4 divide-y divide-[#e6e0d3]">
                {cart.map((item) => (
                  <div key={item.product.id} className="pt-4 first:pt-0 flex space-x-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-xs bg-[#e8e2d5] shrink-0"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-base text-[#2b2621] font-medium leading-tight">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-[#8c8276] hover:text-[#8b3d2b] transition-colors p-0.5"
                            title="Remove"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        <p className="font-sans-clean text-[11px] text-[#70665a] mt-0.5">
                          Metal: {item.selectedMetal} {item.selectedCarat ? `· ${item.selectedCarat}` : ''}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#d6cfc2] rounded-xs bg-white">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 text-[#524b42] hover:bg-[#f5f2eb]"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2.5 font-sans-clean text-xs font-medium text-[#2b2621]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1 text-[#524b42] hover:bg-[#f5f2eb]"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <span className="font-sans-clean text-xs font-semibold text-[#2b2621]">
                          ${(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code Input */}
              <div className="pt-2">
                <form onSubmit={applyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code (e.g. FLOREA10)"
                    className="flex-1 bg-white border border-[#d6cfc2] px-3 py-2 text-xs font-sans-clean focus:outline-none focus:border-[#2b2621]"
                  />
                  <button
                    type="submit"
                    className="bg-[#473e35] hover:bg-[#2b2520] text-[#f5f2eb] px-3 py-2 text-xs font-sans-clean uppercase tracking-wider"
                  >
                    APPLY
                  </button>
                </form>
                {promoApplied && (
                  <p className="text-[11px] text-emerald-700 font-sans-clean mt-1">✓ {promoApplied}</p>
                )}
                {promoError && (
                  <p className="text-[11px] text-[#8b3d2b] font-sans-clean mt-1">{promoError}</p>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer Summary */}
        {cart.length > 0 && !orderSuccess && (
          <div className="p-6 border-t border-[#e6e0d3] bg-[#efebe1] space-y-3">
            <div className="space-y-1.5 font-sans-clean text-xs text-[#524b42]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              {calculatedDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Discount</span>
                  <span>-${calculatedDiscount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="text-emerald-700 font-medium">COMPLIMENTARY</span>
              </div>
              <div className="flex justify-between font-semibold text-sm text-[#2b2621] pt-2 border-t border-[#d6cfc2]">
                <span>Total</span>
                <span>${finalTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleSimulateCheckout}
              disabled={isCheckingOut}
              className="w-full bg-[#2b2520] hover:bg-[#120f0d] text-[#f5f2eb] font-sans-clean text-xs tracking-[0.25em] uppercase py-3.5 font-medium transition-colors shadow-md flex items-center justify-center space-x-2"
            >
              {isCheckingOut ? (
                <span>PROCESSING ATELIER CHECKOUT...</span>
              ) : (
                <>
                  <ShieldCheck size={16} />
                  <span>PROCEED TO CHECKOUT (${finalTotal.toLocaleString()})</span>
                </>
              )}
            </button>

            <p className="text-[10px] text-[#8c8276] text-center font-sans-clean">
              Includes IGI Authenticity Certificate & Lifetime Atelier Guarantee
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
