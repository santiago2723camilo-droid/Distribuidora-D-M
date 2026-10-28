import React from 'react';
import { ScreenType } from '../types';
import { COMPANY_EMAIL, COMPANY_LANDLINE, COMPANY_PHONE, COMPANY_PHONE_DISPLAY } from '../data/mockData';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenCreditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCreditModal }) => {
  return (
    <footer className="w-full bg-[#001b4b] text-white border-t border-[#12306b]">
      {/* Upper Main Footer Grid */}
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#12306b]/80">
          {/* Columna 1: Marca & Descripción */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-['Montserrat'] text-2xl font-black text-white tracking-tight">
                D&M
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#dae2ff] bg-[#12306b] px-2 py-0.5 rounded">
                Distribuidora
              </span>
            </div>
            <p className="text-xs text-[#b1c5ff] leading-relaxed">
              Distribución mayorista confiable de materiales de construcción, ferretería industrial y soluciones eléctricas para obras y ferreterías en el Cesar y la región Caribe.
            </p>
            <div className="pt-2 text-xs text-[#dae2ff] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#fc820c]">location_on</span>
              <span>Zona Industrial Cra. 7A # 38-45, Valledupar, Cesar</span>
            </div>
          </div>

          {/* Columna 2: Ubicación & Cobertura */}
          <div className="space-y-3">
            <h3 className="font-['Montserrat'] text-base font-bold text-white tracking-tight">
              Ubicación & Cobertura
            </h3>
            <ul className="space-y-2 text-xs text-[#b1c5ff]">
              <li className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#fc820c] shrink-0 mt-0.5">check_circle</span>
                <span>Valledupar, Cesar - Centro Logístico & Bodega Principal</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#fc820c] shrink-0 mt-0.5">check_circle</span>
                <span>Ruta Cesar: La Paz, Codazzi, Bosconia, San Diego, Aguachica</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#fc820c] shrink-0 mt-0.5">check_circle</span>
                <span>Ruta Caribe: La Guajira, Magdalena y Bolívar</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Horarios de Despacho */}
          <div className="space-y-3">
            <h3 className="font-['Montserrat'] text-base font-bold text-white tracking-tight">
              Horarios de Despacho
            </h3>
            <ul className="space-y-2 text-xs text-[#b1c5ff]">
              <li className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#fc820c] shrink-0 mt-0.5">schedule</span>
                <span>Lunes a Viernes: 7:00 AM – 5:30 PM</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#fc820c] shrink-0 mt-0.5">schedule</span>
                <span>Sábados: 7:30 AM – 1:00 PM</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#fc820c] shrink-0 mt-0.5">support_agent</span>
                <span>Atención Comercial WhatsApp: Lunes a Sábado continua</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto Mayorista */}
          <div className="space-y-3">
            <h3 className="font-['Montserrat'] text-base font-bold text-white tracking-tight">
              Contacto Mayorista
            </h3>
            <ul className="space-y-2 text-xs text-[#b1c5ff]">
              <li>
                <span className="block text-[11px] uppercase tracking-wider text-[#dae2ff]">Línea Directa WhatsApp:</span>
                <a
                  href={`https://wa.me/${COMPANY_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#ffdcc6] hover:text-white transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  {COMPANY_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <span className="block text-[11px] uppercase tracking-wider text-[#dae2ff]">PBX Valledupar:</span>
                <span className="text-white font-medium">{COMPANY_LANDLINE}</span>
              </li>
              <li>
                <span className="block text-[11px] uppercase tracking-wider text-[#dae2ff]">Correo Institucional:</span>
                <span className="text-[#b1c5ff]">{COMPANY_EMAIL}</span>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onOpenCreditModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#fc820c] hover:text-[#ffdcc6] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">payments</span>
                <span>Líneas de Crédito para Ferreterías &rarr;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sub-pie con enlaces y copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#b1c5ff]">
          <p>© 2025 Distribuidora D&M S.A.S. Todos los derechos reservados. Valledupar, Cesar.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => onNavigate('productos')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Productos
            </button>
            <button
              onClick={() => onNavigate('aliados')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Aliados
            </button>
            <button
              onClick={() => onNavigate('nosotros')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Nosotros
            </button>
            <button
              onClick={() => onNavigate('contacto')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
