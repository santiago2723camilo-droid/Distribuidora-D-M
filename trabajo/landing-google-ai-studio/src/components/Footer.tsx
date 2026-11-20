import React from 'react';
import { ScreenType } from '../types';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_PHONE_DISPLAY } from '../data/mockData';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenCreditModal: () => void;
}

const navigation: { id: ScreenType | 'marcas'; label: string }[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'productos', label: 'Productos' },
  { id: 'marcas', label: 'Marcas' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'contacto', label: 'Contacto' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCreditModal }) => (
  <footer className="w-full bg-[#001b4b] text-white border-t border-[#12306b]">
    <div className="max-w-[1320px] mx-auto px-4 lg:px-8 py-10 lg:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 border-b border-[#12306b]/80">
        <section className="space-y-3">
          <h2 className="font-['Montserrat'] text-xl font-black">D&M</h2>
          <p className="text-sm font-semibold text-[#ffdcc6]">Soluciones para cada necesidad</p>
          <p className="text-xs text-[#b1c5ff] leading-relaxed">
            Productos para construcción, ferretería y soluciones eléctricas.
          </p>
        </section>

        <nav aria-label="Navegación del pie de página" className="space-y-3">
          <h2 className="font-['Montserrat'] text-base font-bold">Explora la página</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm text-[#b1c5ff]">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate(item.id === 'marcas' ? 'inicio' : item.id);
                    if (item.id === 'marcas') {
                      window.setTimeout(() => document.getElementById('marcas')?.scrollIntoView({ behavior: 'smooth' }), 0);
                    }
                  }}
                  className="hover:text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <section className="space-y-3">
          <h2 className="font-['Montserrat'] text-base font-bold">Contacto</h2>
          <p className="text-xs text-[#b1c5ff]">{COMPANY_ADDRESS}</p>
          <a href={`https://wa.me/${COMPANY_PHONE}`} target="_blank" rel="noopener noreferrer" className="block text-sm text-[#ffdcc6] hover:text-white">
            WhatsApp: {COMPANY_PHONE_DISPLAY}
          </a>
          <a href={`mailto:${COMPANY_EMAIL}`} className="block text-sm text-[#b1c5ff] hover:text-white">
            {COMPANY_EMAIL}
          </a>
          <button type="button" onClick={onOpenCreditModal} className="text-sm font-semibold text-[#fc820c] hover:text-[#ffdcc6]">
            Consultar condiciones de crédito
          </button>
        </section>
      </div>
      <p className="text-xs text-[#b1c5ff] pt-6">© {new Date().getFullYear()} Distribuidora D&M</p>
    </div>
  </footer>
);
