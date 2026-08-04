import React from 'react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="bg-[#f5f2eb] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#e6e0d3]">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl text-[#2b2621] uppercase mb-6 font-light tracking-[0.06em]">
          THE FUTURE OF DIAMOND
        </h2>
        <p className="font-sans-clean text-sm sm:text-base text-[#524b42] max-w-3xl mx-auto leading-relaxed font-light">
          At Floréa, we unite social impact with stunning design to create ethical engagement rings 
          and fine jewelry crafted with the world's top one percent of lab-grown diamonds and 
          gems. Enjoy beauty you can truly feel good about.
        </p>
      </div>

      {/* Dual Featured Atelier Images */}
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-xs bg-[#e8e2d5] group">
          <img
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwamV3ZWxyeXxlbnwwfHx8fDE3ODU3NTYyNjZ8MA&ixlib=rb-4.1.0&q=85"
            alt="Floréa Diamond Fine Jewelry"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
        <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-xs bg-[#e8e2d5] group">
          <img
            src="https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY6NzF8MHwxfHNlYXJjaHw0fHxlbmdhZ2VtZW50JTIwcmluZ3xlbnwwfHx8fDE3ODU3NTYyNjZ8MA&ixlib=rb-4.1.0&q=85"
            alt="Floréa Ethical Engagement Ring"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    </section>
  );
};
