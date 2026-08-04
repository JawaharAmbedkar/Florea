import React, { useState } from 'react';
import { X, Calendar, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'Paris Place Vendôme',
    date: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#f5f2eb] border border-[#e6e0d3] max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xs p-6 sm:p-8 shadow-2xl relative space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#3d332a] hover:text-[#000000] p-1 focus:outline-none z-10"
          aria-label="Close contact modal"
        >
          <X size={20} />
        </button>

        <div className="text-center space-y-2">
          <p className="font-sans-clean text-[10px] tracking-[0.25em] text-[#8c8276] uppercase font-semibold">
            PRIVATE CONCIERGE & APPOINTMENTS
          </p>
          <h2 className="font-serif-display text-2xl sm:text-3xl text-[#2b2621] uppercase">
            BOOK AN ATELIER CONSULTATION
          </h2>
          <p className="font-sans-clean text-xs text-[#524b42] max-w-md mx-auto leading-relaxed">
            Schedule a private one-on-one session with a Floréa Diamond Specialist in Paris, New York, or via virtual HD video salon.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4 bg-white border border-[#e6e0d3] rounded-xs p-6">
            <CheckCircle2 size={40} className="mx-auto text-emerald-700" />
            <h3 className="font-serif text-xl text-[#2b2621]">APPOINTMENT REQUEST RECEIVED</h3>
            <p className="font-sans-clean text-xs text-[#524b42]">
              Our Senior Diamond Advisor will contact you within 2 business hours to confirm your reservation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans-clean text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#3d332a] uppercase tracking-wider mb-1 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Élodie Vance"
                  className="w-full bg-white border border-[#d6cfc2] px-3 py-2 text-xs focus:outline-none focus:border-[#2b2621]"
                />
              </div>

              <div>
                <label className="block text-[#3d332a] uppercase tracking-wider mb-1 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="elodie@example.com"
                  className="w-full bg-white border border-[#d6cfc2] px-3 py-2 text-xs focus:outline-none focus:border-[#2b2621]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#3d332a] uppercase tracking-wider mb-1 font-medium">
                  Atelier Salon Location
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-white border border-[#d6cfc2] px-3 py-2 text-xs focus:outline-none focus:border-[#2b2621]"
                >
                  <option value="Paris Place Vendôme">Paris · 18 Place Vendôme</option>
                  <option value="New York 5th Ave">New York · 712 Fifth Avenue</option>
                  <option value="Virtual Video Salon">Virtual Video Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-[#3d332a] uppercase tracking-wider mb-1 font-medium">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-white border border-[#d6cfc2] px-3 py-2 text-xs focus:outline-none focus:border-[#2b2621]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#3d332a] uppercase tracking-wider mb-1 font-medium">
                Interests / Notes for Advisor
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention specific ring styles, diamond carat sizes, or custom requests..."
                className="w-full bg-white border border-[#d6cfc2] px-3 py-2 text-xs focus:outline-none focus:border-[#2b2621]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2b2520] hover:bg-[#120f0d] text-[#f5f2eb] font-sans-clean text-xs tracking-[0.25em] uppercase py-3.5 font-medium transition-colors"
            >
              CONFIRM APPOINTMENT REQUEST
            </button>
          </form>
        )}

        <div className="pt-4 border-t border-[#e6e0d3] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans-clean text-[#70665a]">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-[#8b3d2b]" />
            <span>Concierge: +33 1 42 68 00 00</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-[#8b3d2b]" />
            <span>concierge@florea-paris.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
