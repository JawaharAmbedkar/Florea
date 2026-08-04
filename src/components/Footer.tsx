import React, { useState } from 'react';
import { ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (category: string) => void;
  onNavigateAbout: () => void;
  onNavigateContact: () => void;
  onNavigateJournal: () => void;
  onOpenRingSizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onNavigateAbout,
  onNavigateContact,
  onNavigateJournal,
  onOpenRingSizer,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#1c1815] text-[#d9d2c5] pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-[#2e2823]">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2e2823]">
        {/* Left Column - Brand & Newsletter */}
        <div className="lg:col-span-5 space-y-6">
          <span className="brand-logo text-4xl lg:text-5xl tracking-wide text-[#f5f2eb] block">
            Floréa
          </span>

          <p className="font-sans-clean text-xs text-[#a8a092] leading-relaxed max-w-md font-light">
            Ethically sourced lab-grown diamonds and precious gems, hand-set in recycled gold. Made to last generations — designed to feel like today.
          </p>

          <div className="pt-2">
            <form onSubmit={handleSubscribe} className="max-w-md">
              <label htmlFor="newsletter-email" className="sr-only">
                Enter your email for private previews
              </label>
              <div className="relative border-b border-[#524940] focus-within:border-[#f5f2eb] transition-colors pb-1">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for private previews"
                  className="w-full bg-transparent text-xs font-sans-clean text-[#f5f2eb] placeholder-[#7d7468] focus:outline-none pr-8 py-1"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[#d9d2c5] hover:text-white transition-colors"
                  aria-label="Submit newsletter subscription"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#b89b88] font-sans-clean mt-2">
                  Thank you for joining Floréa Private Access.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Right Navigation Columns */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Column 1 - SHOP */}
          <div className="space-y-4">
            <h3 className="font-sans-clean text-[10px] tracking-[0.25em] text-[#a8a092] uppercase font-semibold">
              SHOP
            </h3>
            <ul className="space-y-2.5 font-sans-clean text-xs text-[#d9d2c5]">
              <li>
                <button onClick={() => onSelectCategory('engagement')} className="hover:text-white transition-colors">
                  Engagement
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('wedding')} className="hover:text-white transition-colors">
                  Wedding Bands
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('jewelry')} className="hover:text-white transition-colors">
                  Jewelry
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('gemstones')} className="hover:text-white transition-colors">
                  Gemstones
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('gifts')} className="hover:text-white transition-colors">
                  Gifts
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2 - COMPANY */}
          <div className="space-y-4">
            <h3 className="font-sans-clean text-[10px] tracking-[0.25em] text-[#a8a092] uppercase font-semibold">
              COMPANY
            </h3>
            <ul className="space-y-2.5 font-sans-clean text-xs text-[#d9d2c5]">
              <li>
                <button onClick={onNavigateAbout} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={onNavigateJournal} className="hover:text-white transition-colors">
                  Journal
                </button>
              </li>
              <li>
                <button onClick={onNavigateAbout} className="hover:text-white transition-colors">
                  Sustainability
                </button>
              </li>
              <li>
                <button onClick={onNavigateContact} className="hover:text-white transition-colors">
                  Ateliers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - CLIENT SERVICES */}
          <div className="space-y-4">
            <h3 className="font-sans-clean text-[10px] tracking-[0.25em] text-[#a8a092] uppercase font-semibold">
              CLIENT SERVICES
            </h3>
            <ul className="space-y-2.5 font-sans-clean text-xs text-[#d9d2c5]">
              <li>
                <button onClick={onNavigateContact} className="hover:text-white transition-colors">
                  Book an Appointment
                </button>
              </li>
              <li>
                <button onClick={onOpenRingSizer} className="hover:text-white transition-colors underline decoration-[#524940]">
                  Ring Sizer Guide
                </button>
              </li>
              <li>
                <button onClick={onNavigateContact} className="hover:text-white transition-colors">
                  Shipping & Returns
                </button>
              </li>
              <li>
                <button onClick={onNavigateContact} className="hover:text-white transition-colors">
                  Lifetime Warranty
                </button>
              </li>
              <li>
                <button onClick={onNavigateContact} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-[1800px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans-clean text-[#8a8072] gap-4">
        <p className="tracking-[0.15em] uppercase">
          © {new Date().getFullYear()} FLORÉA MAISON PARIS. ALL RIGHTS RESERVED.
        </p>

        <div className="flex items-center space-x-6 text-[#d9d2c5]">
          <a href="#instagram" className="hover:text-white transition-colors" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="#facebook" className="hover:text-white transition-colors" aria-label="Facebook">
            <Facebook size={16} />
          </a>
          <a href="#youtube" className="hover:text-white transition-colors" aria-label="YouTube">
            <Youtube size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};
