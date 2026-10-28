import React from 'react';
import { TESTIMONIALS } from '../../data/mockData';

interface AboutScreenProps {
  onOpenCreditModal: () => void;
  onOpenQuoteModal: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  onOpenCreditModal,
  onOpenQuoteModal,
}) => {
  return (
    <div className="w-full bg-[#f8f9ff] min-h-screen py-10">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="bg-[#001b4b] text-white rounded-2xl p-6 lg:p-10 shadow-lg relative overflow-hidden border border-[#12306b]">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c] bg-white/10 px-3 py-1 rounded-full">
              Sobre Distribuidora D&M
            </span>
            <h1 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Infraestructura Logística al Servicio del Caribe
            </h1>
            <p className="text-xs sm:text-sm text-[#dae2ff] leading-relaxed">
              Nacimos en Valledupar con una misión clara: abastecer de manera confiable, sin intermediarios costosos y con facilidades de crédito a los ferreteros y constructores de nuestra región.
            </p>
          </div>
        </div>

        {/* Cobertura & Centro Logístico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c]">
              Ubicación Estratégica
            </span>
            <h2 className="font-['Montserrat'] text-2xl lg:text-3xl font-bold text-[#001b4b]">
              Bodega Central en Valledupar, Cesar
            </h2>
            <p className="text-xs sm:text-sm text-[#444650] leading-relaxed">
              Ubicados en el corazón de la Zona Industrial de Valledupar, operamos una bodega con más de 3.500 referencias en stock continuo. Nuestra flota propia de vehículos de carga cubre rutas fijas semanales para garantizar que tu ferretería nunca se quede sin stock de alta rotación.
            </p>

            <div className="space-y-2 pt-2">
              <div className="p-3 bg-white rounded-xl border border-[#dae3f4] flex items-center gap-3">
                <span className="material-symbols-outlined text-[#fc820c] text-[24px]">local_shipping</span>
                <div className="text-xs">
                  <strong className="text-[#001b4b] block">Ruta Cesar Diaria:</strong>
                  <span className="text-[#444650]">Valledupar, La Paz, Codazzi, Becerril, San Diego, Bosconia, El Copey y Aguachica.</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#dae3f4] flex items-center gap-3">
                <span className="material-symbols-outlined text-[#fc820c] text-[24px]">explore</span>
                <div className="text-xs">
                  <strong className="text-[#001b4b] block">Ruta Caribe Interdepartamental:</strong>
                  <span className="text-[#444650]">Sur y Norte de La Guajira (San Juan, Fonseca, Villanueva, Riohacha), Magdalena y Bolívar.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#eff4ff] p-6 lg:p-8 rounded-2xl border border-[#dae3f4] space-y-4">
            <h3 className="font-['Montserrat'] text-lg font-bold text-[#001b4b]">
              Pilares de Nuestro Servicio
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-[#dae3f4]">
                <span className="material-symbols-outlined text-[28px] text-[#001b4b] mb-2">savings</span>
                <h4 className="font-bold text-xs text-[#001b4b]">Precios de Fábrica</h4>
                <p className="text-[11px] text-[#444650] mt-1">
                  Compramos en volumen maestro directo para transferirte el mejor margen de reventa.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#dae3f4]">
                <span className="material-symbols-outlined text-[28px] text-[#001b4b] mb-2">credit_score</span>
                <h4 className="font-bold text-xs text-[#001b4b]">Crédito Comercial</h4>
                <p className="text-[11px] text-[#444650] mt-1">
                  Flexibilidad de pago a 30 y 45 días sin trámites bancarios engorrosos.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#dae3f4]">
                <span className="material-symbols-outlined text-[28px] text-[#001b4b] mb-2">verified</span>
                <h4 className="font-bold text-xs text-[#001b4b]">Calidad Certificada</h4>
                <p className="text-[11px] text-[#444650] mt-1">
                  Certificaciones RETIE y NTC en cada cable, tubería y accesorio despachado.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#dae3f4]">
                <span className="material-symbols-outlined text-[28px] text-[#001b4b] mb-2">support_agent</span>
                <h4 className="font-bold text-xs text-[#001b4b]">Atención Personalizada</h4>
                <p className="text-[11px] text-[#444650] mt-1">
                  Asesor asignado que conoce tu zona, tus clientes y tus tiempos de obra.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenCreditModal}
                className="w-full py-3 bg-[#fc820c] hover:bg-[#964900] text-white text-xs font-bold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">payments</span>
                <span>Conocer Condiciones de Crédito</span>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c]">
              Historias de Éxito
            </span>
            <h2 className="font-['Montserrat'] text-2xl font-bold text-[#001b4b] mt-1">
              Ferreterías que Confían en D&M
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-2xl shadow-xs border border-[#dae3f4] flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-[#131c28] italic leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-[#f8f9ff]">
                  <div className="w-10 h-10 rounded-full bg-[#001b4b] text-white flex items-center justify-center font-bold text-xs">
                    {t.clientName.charAt(0)}
                  </div>
                  <div>
                    <strong className="text-xs text-[#001b4b] block">{t.clientName}</strong>
                    <span className="text-[11px] text-[#747781]">{t.businessType} · {t.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
