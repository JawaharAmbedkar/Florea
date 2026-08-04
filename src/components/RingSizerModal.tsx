import React, { useState } from 'react';
import { X, Ruler, CheckCircle } from 'lucide-react';

interface RingSizerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RingSizerModal: React.FC<RingSizerModalProps> = ({ isOpen, onClose }) => {
  const [selectedMM, setSelectedMM] = useState(16.5);

  if (!isOpen) return null;

  const ringSizesData = [
    { size: '5', mm: 15.7, circumference: 49.3 },
    { size: '5.5', mm: 16.1, circumference: 50.6 },
    { size: '6', mm: 16.5, circumference: 51.8 },
    { size: '6.5', mm: 16.9, circumference: 53.1 },
    { size: '7', mm: 17.3, circumference: 54.4 },
    { size: '7.5', mm: 17.7, circumference: 55.7 },
    { size: '8', mm: 18.1, circumference: 57.0 },
    { size: '8.5', mm: 18.5, circumference: 58.3 },
  ];

  const currentMatch = ringSizesData.find((r) => Math.abs(r.mm - selectedMM) < 0.3) || ringSizesData[2];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#f5f2eb] border border-[#e6e0d3] max-w-xl w-full max-h-[90vh] overflow-y-auto rounded-xs p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#3d332a] hover:text-[#000000] p-1 focus:outline-none z-10"
          aria-label="Close ring sizer"
        >
          <X size={20} />
        </button>

        <div className="text-center space-y-3 mb-6">
          <Ruler size={28} className="mx-auto text-[#8b3d2b]" />
          <h2 className="font-serif-display text-2xl text-[#2b2621] uppercase tracking-wider">
            ATELIER RING SIZER GUIDE
          </h2>
          <p className="font-sans-clean text-xs text-[#524b42] max-w-md mx-auto leading-relaxed">
            Place an existing ring directly over the circle below or adjust the diameter slider to match your ring's inside edge.
          </p>
        </div>

        {/* Visual Ring Circle */}
        <div className="bg-white border border-[#e6e0d3] p-8 rounded-xs text-center space-y-4 mb-6">
          <div className="flex items-center justify-center h-48">
            <div
              className="rounded-full border-2 border-[#2b2621] flex items-center justify-center transition-all duration-300 relative"
              style={{
                width: `${selectedMM * 8.5}px`,
                height: `${selectedMM * 8.5}px`,
              }}
            >
              <span className="font-serif text-sm font-semibold text-[#8b3d2b]">
                US Size {currentMatch.size}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between font-sans-clean text-xs text-[#524b42]">
              <span>Diameter: {selectedMM.toFixed(1)} mm</span>
              <span>Circumference: {currentMatch.circumference} mm</span>
            </div>
            <input
              type="range"
              min="15.0"
              max="19.0"
              step="0.1"
              value={selectedMM}
              onChange={(e) => setSelectedMM(parseFloat(e.target.value))}
              className="w-full accent-[#2b2621] cursor-pointer"
            />
          </div>
        </div>

        {/* Reference Table */}
        <div className="border border-[#e6e0d3] bg-[#efebe1] rounded-xs p-4">
          <h3 className="font-sans-clean text-[11px] tracking-[0.2em] text-[#3d332a] uppercase font-semibold mb-3">
            US & EUROPEAN CONVERSION CHART
          </h3>
          <div className="grid grid-cols-4 gap-2 text-center font-sans-clean text-xs">
            {ringSizesData.map((item) => (
              <div
                key={item.size}
                onClick={() => setSelectedMM(item.mm)}
                className={`p-2 border rounded-xs cursor-pointer transition-colors ${
                  item.size === currentMatch.size
                    ? 'border-[#8b3d2b] bg-white font-bold text-[#8b3d2b]'
                    : 'border-[#d6cfc2] bg-[#f5f2eb] text-[#524b42] hover:bg-white'
                }`}
              >
                <div>US {item.size}</div>
                <div className="text-[10px] text-[#7a7063]">{item.mm} mm</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-[#2b2520] hover:bg-[#120f0d] text-[#f5f2eb] font-sans-clean text-xs tracking-[0.2em] uppercase py-3 px-8"
          >
            CONFIRM RING SIZE (US {currentMatch.size})
          </button>
        </div>
      </div>
    </div>
  );
};
