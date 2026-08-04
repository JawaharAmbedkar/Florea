import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_SLIDES } from '../data/content';

interface HeroSliderProps {
  onShopCollection: (category: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onShopCollection }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = HERO_SLIDES[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="relative bg-[#f5f2eb] pt-2 pb-8 px-2 sm:px-4 lg:px-8">
      <div className="max-w-[1800px] mx-auto">
        {/* Main Hero Container */}
        <div className="relative h-[520px] sm:h-[620px] lg:h-[720px] xl:h-[780px] rounded-xs overflow-hidden bg-[#e8e2d5]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              {/* Main Image */}
              <img
                src={currentSlide.mainImage}
                alt={currentSlide.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-transparent" />

              {/* Responsive Hero Content Layout (Prevents text from overlapping or hiding behind card) */}
              <div className="absolute inset-0 p-5 xs:p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 flex flex-col md:flex-row items-start md:items-center justify-between z-10 gap-6">
                {/* Left/Main Title Section */}
                <div className="flex-1 max-w-full md:max-w-[55%] lg:max-w-[60%] xl:max-w-[65%] mt-2 md:mt-0">
                  {currentSlide.subtitle && (
                    <motion.p
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.7 }}
                      className="text-[10px] xs:text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] text-white/90 uppercase font-sans-clean font-medium mb-2 drop-shadow-md"
                    >
                      {currentSlide.subtitle}
                    </motion.p>
                  )}
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.8 }}
                    className="font-serif-display text-2xl xs:text-3xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl tracking-[0.04em] text-white font-light drop-shadow-2xl uppercase select-none leading-[1.08]"
                  >
                    {currentSlide.title}
                  </motion.h1>
                </div>

                {/* Right Floating Shop Collection Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.8 }}
                  className="self-end md:self-center shrink-0 z-20"
                >
                  <div className="bg-white/95 backdrop-blur-md p-2.5 xs:p-3 sm:p-4 shadow-2xl rounded-xs w-[140px] xs:w-[160px] sm:w-[210px] md:w-[250px] lg:w-[290px] xl:w-[320px] border border-white/80">
                    <div className="aspect-[4/5] overflow-hidden rounded-xs mb-2 sm:mb-3 bg-[#f5f2eb] border border-[#e6e0d3]">
                      <img
                        src={currentSlide.insetImage}
                        alt={currentSlide.collectionName}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <button
                      onClick={() => onShopCollection(currentSlide.targetCategory)}
                      className="w-full bg-[#2b2520] hover:bg-[#1a1613] text-[#f5f2eb] font-sans-clean text-[9px] xs:text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em] uppercase py-2 sm:py-3 px-2 sm:px-3 font-medium transition-colors text-center block rounded-xs"
                    >
                      SHOP COLLECTION
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Hero Control & Status Bar */}
        <div className="mt-4 flex flex-wrap items-center justify-between text-[#5e564d] text-xs font-sans-clean px-1 gap-y-2">
          {/* Left Caption */}
          <div className="w-full sm:w-auto">
            <span className="tracking-[0.2em] uppercase text-[10px] sm:text-[11px] font-medium text-[#423c34]">
              {currentSlide.caption}
            </span>
          </div>

          {/* Center Navigation Controls */}
          <div className="flex items-center space-x-6 mx-auto sm:mx-0 text-[11px] tracking-[0.2em] uppercase font-medium">
            <button
              onClick={handlePrev}
              className="hover:text-[#000000] transition-colors py-1 focus:outline-none"
            >
              Prev
            </button>
            <span className="text-[#8c8276] font-serif text-sm">
              0{currentSlide.id} / 0{HERO_SLIDES.length}
            </span>
            <button
              onClick={handleNext}
              className="hover:text-[#000000] transition-colors py-1 focus:outline-none"
            >
              Next
            </button>
          </div>

          {/* Right Scroll Indicator */}
          <div className="hidden md:flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase text-[#61584f]">
            <span>SCROLL FOR MORE</span>
            <span className="w-8 h-[1px] bg-[#61584f] inline-block"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
