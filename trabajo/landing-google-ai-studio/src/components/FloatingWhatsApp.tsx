import React from 'react';
import { COMPANY_PHONE } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="group fixed bottom-6 right-6 z-50 hidden md:flex items-center">
      <span aria-hidden="true" className="pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded-lg bg-[#001b4b] px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
        Escríbenos por WhatsApp
      </span>

      <a
        aria-label="Chat directo por WhatsApp con asesor mayorista D&M"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fc820c] text-[#001b4b] shadow-md transition-colors hover:bg-[#ff9f45]"
        href={`https://wa.me/${COMPANY_PHONE}?text=Hola,%20me%20comunico%20desde%20la%20p%C3%A1gina%20web%20para%20asesor%C3%ADa%20y%20cotizaci%C3%B3n%20mayorista`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span aria-hidden="true" className="material-symbols-outlined">chat</span>
      </a>
    </aside>
  );
};
