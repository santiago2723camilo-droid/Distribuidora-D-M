import React from 'react';
import { COMPANY_PHONE } from '../data/mockData';

interface FloatingWhatsAppProps {
  onQuickQuoteClick?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onQuickQuoteClick }) => {
  return (
    <aside className="fixed bottom-6 right-6 z-50 flex items-center group pointer-events-auto">
      {/* Tooltip badge */}
      <span className="hidden md:inline-block mr-2 px-3 py-1.5 bg-[#001b4b] text-white text-xs font-semibold rounded-lg shadow-[0_8px_24px_-4px_rgba(18,48,107,0.25)] transition-all opacity-95 group-hover:opacity-100 whitespace-nowrap border border-[#12306b]">
        Escríbenos por WhatsApp
      </span>

      {/* Pulsing button */}
      <a
        aria-label="Chat directo por WhatsApp con asesor mayorista D&M"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#fc820c] hover:bg-[#964900] text-white shadow-[0_12px_32px_-6px_rgba(18,48,107,0.35)] transition-all transform hover:scale-110 active:scale-95"
        href={`https://wa.me/${COMPANY_PHONE}?text=Hola,%20me%20comunico%20desde%20la%20p%C3%A1gina%20web%20para%20asesor%C3%ADa%20y%20cotizaci%C3%B3n%20mayorista`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="absolute w-full h-full rounded-full bg-[#fc820c] animate-ping opacity-30"></span>
        <span className="material-symbols-outlined text-[28px] relative z-10">chat</span>
      </a>
    </aside>
  );
};
