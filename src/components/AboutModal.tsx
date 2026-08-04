import React from 'react';
import { X, Award, ShieldCheck, Gem, Compass } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#f5f2eb] border border-[#e6e0d3] max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xs p-6 sm:p-10 shadow-2xl relative space-y-8">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#3d332a] hover:text-[#000000] p-1 focus:outline-none z-10"
          aria-label="Close about modal"
        >
          <X size={22} />
        </button>

        <div className="text-center space-y-3">
          <span className="brand-logo text-4xl text-[#2b2621] block">Floréa</span>
          <p className="font-sans-clean text-[10px] tracking-[0.25em] text-[#8c8276] uppercase font-semibold">
            MAISON DE HAUTE JOAILLERIE · PARIS
          </p>
        </div>

        <div className="aspect-[16/9] overflow-hidden rounded-xs bg-[#e8e2d5]">
          <img
            src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200"
            alt="Parisian Atelier"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4 font-sans-clean text-xs sm:text-sm text-[#423c34] font-light leading-relaxed">
          <h3 className="font-serif-display text-2xl text-[#2b2621] uppercase tracking-wider">
            OUR ETHICAL HERITAGE
          </h3>
          <p>
            Founded in Paris, Floréa was born from a desire to redefine fine jewelry for the modern era. We combine French lapidary craftsmanship with breakthrough solar technology to create lab-grown diamonds that match mined diamonds in carbon purity, clarity, and optical brilliance.
          </p>
          <p>
            Every piece is custom set by hand in 100% recycled 18k gold and solid platinum in our Parisian atelier, ensuring zero compromises between breathtaking beauty and ethical environmental guardianship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#e6e0d3]">
          <div className="p-4 bg-white border border-[#e6e0d3] rounded-xs text-center space-y-2">
            <Gem size={20} className="mx-auto text-[#8b3d2b]" />
            <h4 className="font-serif text-sm font-semibold text-[#2b2621]">Top 1% Diamonds</h4>
            <p className="font-sans-clean text-[11px] text-[#70665a]">
              Only VVS1+ clarity, Color D-F diamonds selected for Floréa collections.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#e6e0d3] rounded-xs text-center space-y-2">
            <Compass size={20} className="mx-auto text-[#8b3d2b]" />
            <h4 className="font-serif text-sm font-semibold text-[#2b2621]">Solar Cultivated</h4>
            <p className="font-sans-clean text-[11px] text-[#70665a]">
              100% zero-emission solar energy used during diamond crystallization.
            </p>
          </div>

          <div className="p-4 bg-white border border-[#e6e0d3] rounded-xs text-center space-y-2">
            <ShieldCheck size={20} className="mx-auto text-[#8b3d2b]" />
            <h4 className="font-serif text-sm font-semibold text-[#2b2621]">Lifetime Warranty</h4>
            <p className="font-sans-clean text-[11px] text-[#70665a]">
              Full provenance certificate, annual cleaning, and lifetime assurance.
            </p>
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={onClose}
            className="bg-[#2b2520] hover:bg-[#120f0d] text-[#f5f2eb] font-sans-clean text-xs tracking-[0.2em] uppercase py-3 px-8"
          >
            RETURN TO CATALOG
          </button>
        </div>
      </div>
    </div>
  );
};
