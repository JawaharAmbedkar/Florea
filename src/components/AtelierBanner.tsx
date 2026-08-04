import React from 'react';

interface AtelierBannerProps {
  onExplore: () => void;
}

export const AtelierBanner: React.FC<AtelierBannerProps> = ({ onExplore }) => {
  return (
    <section className="bg-[#f5f2eb] py-16 lg:py-24 border-t border-[#e6e0d3]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dual Split Full Image Banner */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 rounded-xs overflow-hidden bg-[#e8e2d5] aspect-[16/9] sm:aspect-[21/9]">
          <div className="relative h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwyfHxkaWFtb25kJTIwbmVja2xhY2V8ZW58MHx8fHwxNzg1NzU2Mjc0fDA&ixlib=rb-4.1.0&q=85"
              alt="Parisian Atelier Craftsmanship 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="relative h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1583937443325-97becde478a8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjByaW5nfGVufDB8fHx8MTc4NTc1NjI3NXww&ixlib=rb-4.1.0&q=85"
              alt="Parisian Atelier Craftsmanship 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Central Overlay Typography */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-serif-display text-5xl sm:text-7xl lg:text-9xl tracking-[0.25em] text-white/30 uppercase select-none">
              LUXURY
            </span>
          </div>
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-4">
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2b2621] font-light max-w-2xl leading-snug">
            Handcrafted in our Parisian atelier — worn wherever love takes you.
          </p>

          <button
            onClick={onExplore}
            className="bg-[#2b2520] hover:bg-[#151210] text-[#f5f2eb] font-sans-clean text-xs tracking-[0.25em] uppercase py-4 px-8 font-medium transition-colors whitespace-nowrap shadow-sm"
          >
            EXPLORE FLORÉA
          </button>
        </div>
      </div>
    </section>
  );
};
