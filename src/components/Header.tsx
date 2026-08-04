import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onNavigateJournal: () => void;
  onNavigateAbout: () => void;
  onNavigateContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  activeCategory,
  onSelectCategory,
  onNavigateJournal,
  onNavigateAbout,
  onNavigateContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavItems = [
    { label: 'ENGAGEMENT', id: 'engagement' },
    { label: 'WEDDING', id: 'wedding' },
    { label: 'JEWELRY', id: 'jewelry' },
    { label: 'DIAMONDS', id: 'diamonds' },
    { label: 'GEMSTONES', id: 'gemstones' },
    { label: 'GIFTS', id: 'gifts' },
    { label: 'ABOUT', id: 'about' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#f5f2eb]/95 backdrop-blur-md border-b border-[#e6e0d3]">
      {/* Top Announcement Bar */}
      <div className="bg-[#ebd9ca]/30 py-2 px-4 text-center border-b border-[#e6e0d3]/60">
        <p className="font-sans-clean text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#524b42] font-medium">
          COMPLIMENTARY SHIPPING ON ORDERS OVER $250 · LIFETIME WARRANTY
        </p>
      </div>

      {/* Main Top Header */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between">
        {/* Left Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <button 
            onClick={onNavigateAbout} 
            className="font-sans-clean text-xs tracking-[0.18em] uppercase text-[#474139] hover:text-[#000000] transition-colors"
          >
            ABOUT US
          </button>
          <button 
            onClick={onNavigateContact} 
            className="font-sans-clean text-xs tracking-[0.18em] uppercase text-[#474139] hover:text-[#000000] transition-colors"
          >
            CONTACT
          </button>
          <button 
            onClick={onNavigateJournal} 
            className="font-sans-clean text-xs tracking-[0.18em] uppercase text-[#474139] hover:text-[#000000] transition-colors"
          >
            JOURNAL
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#3d332a] p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Center Brand Logo */}
        <div className="text-center">
          <button 
            onClick={() => onSelectCategory('all')} 
            className="inline-block group focus:outline-none"
          >
            <span className="brand-logo text-3xl sm:text-4xl lg:text-[42px] tracking-wide text-[#2b2621] font-serif leading-none block">
              Floréa
            </span>
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 sm:space-x-5">
          <button
            onClick={onOpenSearch}
            className="text-[#3d332a] hover:text-[#000000] transition-colors p-1"
            aria-label="Search"
            title="Search Products"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>

          <button
            onClick={onNavigateAbout}
            className="hidden sm:block text-[#3d332a] hover:text-[#000000] transition-colors p-1"
            aria-label="Account"
            title="Customer Account"
          >
            <User size={18} strokeWidth={1.5} />
          </button>

          <button
            onClick={onOpenWishlist}
            className="text-[#3d332a] hover:text-[#000000] transition-colors p-1 relative"
            aria-label="Wishlist"
            title="Saved Wishlist"
          >
            <Heart size={18} strokeWidth={1.5} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#8b3d2b] text-white text-[9px] font-sans-clean font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCart}
            className="text-[#3d332a] hover:text-[#000000] transition-colors p-1 relative"
            aria-label="Cart"
            title="Shopping Bag"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#2b2621] text-white text-[9px] font-sans-clean font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Primary Category Navigation Bar (Desktop) */}
      <nav className="hidden lg:block border-t border-[#e6e0d3]/70">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 flex justify-center space-x-12 py-3">
          {mainNavItems.map((item) => {
            const isActive = activeCategory === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'about') {
                    onNavigateAbout();
                  } else {
                    onSelectCategory(item.id);
                  }
                }}
                className={`font-sans-clean text-[11px] tracking-[0.2em] uppercase transition-all py-1 border-b ${
                  isActive
                    ? 'text-[#1a1816] font-semibold border-[#2b2621]'
                    : 'text-[#5e564d] border-transparent hover:text-[#1a1816]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f5f2eb] border-t border-[#e6e0d3] px-6 py-6 space-y-5 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex flex-col space-y-3 pb-4 border-b border-[#e6e0d3]">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#8c8276]">Categories</p>
            {mainNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'about') {
                    onNavigateAbout();
                  } else {
                    onSelectCategory(item.id);
                  }
                  setMobileMenuOpen(false);
                }}
                className="text-left font-serif text-lg tracking-wider text-[#2b2621] hover:text-[#8b3d2b] py-1"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col space-y-3 pt-2">
            <button
              onClick={() => {
                onNavigateAbout();
                setMobileMenuOpen(false);
              }}
              className="text-left font-sans-clean text-xs tracking-widest text-[#5e564d] uppercase py-1"
            >
              ABOUT US
            </button>
            <button
              onClick={() => {
                onNavigateContact();
                setMobileMenuOpen(false);
              }}
              className="text-left font-sans-clean text-xs tracking-widest text-[#5e564d] uppercase py-1"
            >
              CONTACT ATELIER
            </button>
            <button
              onClick={() => {
                onNavigateJournal();
                setMobileMenuOpen(false);
              }}
              className="text-left font-sans-clean text-xs tracking-widest text-[#5e564d] uppercase py-1"
            >
              THE JOURNAL
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
