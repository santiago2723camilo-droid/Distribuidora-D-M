import React, { useState } from 'react';
import { ScreenType } from '../types';
import { COMPANY_PHONE } from '../data/mockData';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  cartCount: number;
  onOpenQuoteModal: () => void;
  onOpenCreditModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  cartCount,
  onOpenQuoteModal,
  onOpenCreditModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ScreenType; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'productos', label: 'Productos' },
    { id: 'aliados', label: 'Aliados' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/95 backdrop-blur-xl border-b border-[#e5eeff] shadow-[0_1px_8px_rgba(18,48,107,0.06)]">
      <div className="h-20 max-w-[1320px] mx-auto px-4 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Zone */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-3 flex-shrink-0 text-left focus:outline-none group cursor-pointer"
        >
          <img
            alt="Logo D&M Distribuidora"
            className="h-8 sm:h-10 w-auto max-w-[132px] sm:max-w-[190px] object-contain transition-transform group-hover:scale-[1.02]"
            src="/brand/logo-dym.png"
          />
        </button>

        {/* Navigation Zone */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors py-2 px-3 text-sm font-semibold rounded-lg cursor-pointer ${
                  isActive
                    ? 'bg-[#e5eeff] text-[#001b4b] shadow-xs'
                    : 'text-[#444650] hover:text-[#001b4b] hover:bg-[#f8f9ff]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Quote builder button */}
          <button
            onClick={onOpenQuoteModal}
            className="relative inline-flex items-center gap-2 bg-[#fc820c] hover:bg-[#964900] text-white font-['Inter'] text-sm font-semibold px-2 sm:px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-95"
            title="Abrir cotizador o enviar pedido a WhatsApp"
          >
            <span className="material-symbols-outlined text-[19px]">chat</span>
            <span className="hidden sm:inline">Cotizar por WhatsApp</span>
            <span className="sm:hidden">Cotizar</span>
            {cartCount > 0 && (
              <span className="bg-[#001b4b] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* User / Partner portal modal trigger */}
          <button
            onClick={onOpenCreditModal}
            className="hidden sm:flex w-9 h-9 rounded-full bg-[#001b4b] hover:bg-[#12306b] text-white items-center justify-center transition-colors shadow-xs cursor-pointer"
            title="Líneas de crédito y atención ferretera"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center text-[#001b4b] hover:bg-[#e5eeff] rounded-lg cursor-pointer"
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e5eeff] bg-white px-4 py-4 shadow-xl space-y-2 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#e5eeff] text-[#001b4b] font-bold'
                    : 'text-[#444650] hover:bg-[#f8f9ff]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#e5eeff] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCreditModal();
              }}
              className="w-full py-2.5 px-3 text-left text-sm text-[#001b4b] hover:bg-[#eff4ff] rounded-lg font-medium flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px] text-[#fc820c]">payments</span>
              Solicitar Crédito Comercial
            </button>
            <a
              href={`https://wa.me/${COMPANY_PHONE}?text=Hola%20Distribuidora%20D%26M,%20solicito%20atenci%C3%B3n%20comercial`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-3 bg-[#fc820c] text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp Directo Asesor
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
