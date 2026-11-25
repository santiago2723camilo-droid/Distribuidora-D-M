import React, { useRef, useState } from 'react';
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
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navItems: { id: ScreenType | 'marcas'; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'productos', label: 'Productos' },
    { id: 'marcas', label: 'Marcas' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (screen: ScreenType | 'marcas') => {
    onNavigate(screen === 'marcas' ? 'inicio' : screen);
    setMobileMenuOpen(false);
    if (screen === 'marcas') {
      window.setTimeout(() => document.getElementById('marcas')?.scrollIntoView(), 0);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/95 backdrop-blur-xl border-b border-[#e5eeff] shadow-[0_1px_8px_rgba(18,48,107,0.06)]">
      <div className="h-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Zone */}
        <button
          onClick={() => handleNavClick('inicio')}
          aria-label="Ir al inicio de Distribuidora D&M"
          className="flex min-h-11 w-[clamp(8.5rem,39vw,10.5rem)] min-w-0 items-center rounded-lg sm:w-[11.5rem] xl:w-48"
        >
          <img
            alt="Distribuidora D&M"
            width={653}
            height={160}
            className="h-auto w-full"
            src={`${import.meta.env.BASE_URL}brand/logo-dym.png`}
          />
        </button>

        {/* Navigation Zone */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = item.id !== 'marcas' && currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`min-h-11 transition-colors py-2 px-3 text-sm font-semibold rounded-lg cursor-pointer ${
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
        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          {/* Quote builder button */}
          <button
            onClick={onOpenQuoteModal}
            className="min-h-11 inline-flex items-center gap-2 rounded-lg border border-[#dae3f4] bg-[#eff4ff] px-2.5 py-2 text-sm font-bold text-[#001b4b] transition-colors hover:bg-[#e5eeff] sm:px-4 whitespace-nowrap"
            title="Abrir cotizador o enviar pedido a WhatsApp"
            aria-label={cartCount > 0 ? `Cotizar por WhatsApp, ${cartCount} ${cartCount === 1 ? 'unidad' : 'unidades'}` : undefined}
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[19px]">chat</span>
            <span className="hidden sm:inline">Cotizar por WhatsApp</span>
            <span className="sm:hidden">Cotizar</span>
            {cartCount > 0 && (
              <span aria-hidden="true" className="bg-[#001b4b] text-white text-xs font-bold min-w-5 px-1 h-5 rounded-full flex items-center justify-center tabular-nums">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </button>

          {/* User / Partner portal modal trigger */}
          <button
            onClick={onOpenCreditModal}
            className="hidden sm:flex w-11 h-11 rounded-full bg-[#001b4b] hover:bg-[#12306b] text-white items-center justify-center transition-colors shadow-xs cursor-pointer"
            title="Líneas de crédito y atención ferretera"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-[#001b4b] hover:bg-[#e5eeff] rounded-lg cursor-pointer"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            aria-controls={mobileMenuOpen ? 'mobile-menu' : undefined}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <nav id="mobile-menu" className="lg:hidden max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-[#e5eeff] bg-white px-4 py-4 shadow-xl space-y-2">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`w-full min-h-11 text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
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
                menuButtonRef.current?.focus();
                setMobileMenuOpen(false);
                onOpenCreditModal();
              }}
              className="w-full min-h-11 py-2.5 px-3 text-left text-sm text-[#001b4b] hover:bg-[#eff4ff] rounded-lg font-medium flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px] text-[#fc820c]">payments</span>
              Solicitar Crédito Comercial
            </button>
            <a
              href={`https://wa.me/${COMPANY_PHONE}?text=Hola%20Distribuidora%20D%26M,%20solicito%20atenci%C3%B3n%20comercial`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-11 text-center py-2.5 px-3 bg-[#fc820c] text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp Directo Asesor
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
