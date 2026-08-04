/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { BrandStatement } from './components/BrandStatement';
import { AuroraPetalCollection } from './components/AuroraPetalCollection';
import { TrendingStyle } from './components/TrendingStyle';
import { AtelierBanner } from './components/AtelierBanner';
import { TheJournal } from './components/TheJournal';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { RingSizerModal } from './components/RingSizerModal';
import { SearchModal } from './components/SearchModal';
import { CategoryView } from './components/CategoryView';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';
import { Check, Heart, ShoppingBag } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('florea_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('florea_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isRingSizerOpen, setIsRingSizerOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('florea_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('florea_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3500);
  };

  const handleAddToCart = (
    product: Product,
    metal: string = '18k White Gold',
    carat: string = '1.25 ct',
    size: string = '6.5',
    e?: React.MouseEvent
  ) => {
    if (e) e.stopPropagation();

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedMetal === metal
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
          selectedMetal: metal,
          selectedCarat: carat,
          selectedSize: size,
        },
      ];
    });

    showToast(`Added ${product.name} to your Shopping Bag`);
  };

  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleToggleWishlist = (product: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    setWishlist((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast(`Removed ${product.name} from Wishlist`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved ${product.name} to Wishlist`);
        return [...prev, product.id];
      }
    });
  };

  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="min-h-screen bg-[#f5f2eb] text-[#221f1d] font-sans-clean flex flex-col justify-between selection:bg-[#3d332a] selection:text-[#f5f2eb]">
      {/* Toast Feedback Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2b2621] text-[#f5f2eb] px-5 py-3 rounded-xs shadow-2xl border border-[#524940] flex items-center space-x-3 text-xs font-sans-clean tracking-wider animate-in slide-in-from-bottom duration-300">
          <Check size={16} className="text-[#b89b88]" />
          <span>{toast}</span>
        </div>
      )}

      {/* Main Top Header */}
      <Header
        cartCount={cartTotalCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateJournal={() => {
          setActiveCategory('all');
          setTimeout(() => {
            document.getElementById('journal-section')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        onNavigateAbout={() => setIsAboutOpen(true)}
        onNavigateContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeCategory === 'all' ? (
          <>
            {/* 1. Hero Carousel Section */}
            <HeroSlider
              onShopCollection={(cat) => {
                setActiveCategory(cat);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 2. Brand Statement: THE FUTURE OF DIAMOND */}
            <BrandStatement />

            {/* 3. Collection 01: AURORA PETAL */}
            <AuroraPetalCollection
              products={PRODUCTS}
              onSelectProduct={setSelectedProduct}
              onAddToCart={(p, e) => handleAddToCart(p, undefined, undefined, undefined, e)}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlist}
            />

            {/* 4. Trending Style Section */}
            <TrendingStyle
              products={PRODUCTS}
              onSelectProduct={setSelectedProduct}
              onAddToCart={(p, e) => handleAddToCart(p, undefined, undefined, undefined, e)}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlist}
            />

            {/* 5. Parisian Atelier Full-Width Banner */}
            <AtelierBanner onExplore={() => setIsAboutOpen(true)} />

            {/* 6. The Journal Field Notes Section */}
            <div id="journal-section">
              <TheJournal />
            </div>
          </>
        ) : (
          /* Filtered Category Catalog View */
          <CategoryView
            category={activeCategory}
            products={PRODUCTS}
            onSelectProduct={setSelectedProduct}
            onAddToCart={(p, e) => handleAddToCart(p, undefined, undefined, undefined, e)}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlist}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateAbout={() => setIsAboutOpen(true)}
        onNavigateContact={() => setIsContactOpen(true)}
        onNavigateJournal={() => {
          setActiveCategory('all');
          setTimeout(() => {
            document.getElementById('journal-section')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        onOpenRingSizer={() => setIsRingSizerOpen(true)}
      />

      {/* Slide-over Drawers & Interactive Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={() => setCart([])}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={(id) => handleToggleWishlist(PRODUCTS.find((p) => p.id === id)!)}
        onAddToCart={(p, e) => handleAddToCart(p, undefined, undefined, undefined, e)}
        onSelectProduct={setSelectedProduct}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={setSelectedProduct}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setIsSearchOpen(false);
        }}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(p, m, c, s) => {
          handleAddToCart(p, m, c, s);
          setSelectedProduct(null);
        }}
        onToggleWishlist={(p) => handleToggleWishlist(p)}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onOpenRingSizer={() => setIsRingSizerOpen(true)}
      />

      <RingSizerModal
        isOpen={isRingSizerOpen}
        onClose={() => setIsRingSizerOpen(false)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
