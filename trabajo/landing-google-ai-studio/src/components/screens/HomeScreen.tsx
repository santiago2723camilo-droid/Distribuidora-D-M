import React, { useState } from 'react';
import { ScreenType } from '../../types';
import { COMPANY_PHONE, FAQS } from '../../data/mockData';
import { BrandsShowcase } from '../BrandsShowcase';

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenQuoteModal: () => void;
  onOpenCreditModal: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onOpenCreditModal,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col w-full">
      {/* SECCIÓN 2: HERO */}
      <section className="relative w-full bg-[#f8f9ff] py-10 lg:py-16 border-b border-[#dae3f4]/60">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Text Content */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-4 z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e5eeff] rounded-full text-[#001b4b] text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#fc820c] animate-pulse"></span>
                <span>Distribución Mayorista · Valledupar y Caribe Colombiano</span>
              </div>

              <h1 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-[44px] text-[#001b4b] tracking-tight font-extrabold leading-[1.15]">
                D&amp;M, Soluciones para cada necesidad
              </h1>

              <p className="font-['Inter'] text-base sm:text-lg text-[#444650] max-w-xl leading-relaxed">
                Productos para construcción, ferretería y soluciones eléctricas. Revisa el catálogo y solicita una cotización.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="inline-flex items-center justify-center gap-2 bg-[#fc820c] hover:bg-[#964900] text-white font-['Inter'] text-sm sm:text-base font-bold px-7 py-3.5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-center cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[22px]">chat</span>
                  <span>Quiero cotizar mi pedido</span>
                </button>

                <button
                  onClick={() => onNavigate('productos')}
                  className="inline-flex items-center justify-center gap-2 bg-[#e0e9f9] hover:bg-[#dae3f4] text-[#001b4b] font-['Inter'] text-sm sm:text-base font-semibold px-6 py-3.5 rounded-lg transition-colors duration-200 text-center cursor-pointer"
                >
                  <span>Explorar catálogo</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[#444650] text-xs">
                <span className="material-symbols-outlined text-[18px] text-[#fc820c]">verified</span>
                <span>Atención directa para ferreterías, maestros de obra y constructoras</span>
              </div>
            </div>

            {/* Hero Photographic Frame */}
            <div className="lg:col-span-5 relative">
              <figure className="rounded-2xl overflow-hidden shadow-sm bg-white border border-[#dae3f4]">
                <img
                  alt="Imagen ilustrativa de herramientas y materiales de ferretería"
                  className="w-full h-auto max-h-[460px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWMKUpw2rA0Ni6xuDFbfcn_sozckcp1JVvAtRmSIbg2oxk-oEkduLAt5-3yUZwNPdI1Mq0TnoB_hKK7GJA1DgnyMgcTouQisU76xlGx4YgWnT5utw5GYFqSeXvFQYSBnN5ubTLbe9vmeOlCmcqB52JfCBG5kuCDEM9lavOSEO5ngG0gG1VfcAdFbeJUXCJ_-5OZi32ASeiheuUS7twMQ_8jpAXbvg4xEV8zpTYk5A"
                  onError={(e) => {
                    // Styled resilient fallback if network blips
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <figcaption className="p-4 sm:px-5 flex items-center justify-between gap-3 border-t border-[#e5eeff]">
                  <div>
                    <p className="text-[11px] font-bold uppercase text-[#fc820c] tracking-wider">
                      Catálogo de productos
                    </p>
                    <p className="font-['Montserrat'] text-sm sm:text-base font-bold text-[#001b4b]">
                      Consulta productos
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#001b4b]">
                    <span className="material-symbols-outlined text-[22px]">inventory_2</span>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Barra de confianza (4 beneficios clave) */}
          <div className="mt-8 lg:mt-10 border-t border-[#dae3f4] pt-6 lg:pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              {/* Item 1 */}
              <button
                type="button"
                onClick={() => onNavigate('productos')}
                className="bg-white px-4 py-3.5 rounded-xl border border-[#dae3f4] hover:border-[#b1c5ff] transition-colors flex items-center gap-3 group cursor-pointer text-left"
              >
                <span className="w-11 h-11 rounded-xl bg-[#eff4ff] group-hover:bg-[#001b4b] text-[#001b4b] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <span aria-hidden="true" className="material-symbols-outlined text-[26px]">inventory_2</span>
                </span>
                <span>
                  <span className="block font-['Montserrat'] text-sm font-bold text-[#001b4b]">Catálogo amplio</span>
                  <span className="block text-xs text-[#444650]">Productos en el catálogo</span>
                </span>
              </button>

              {/* Item 2 */}
              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className="bg-white px-4 py-3.5 rounded-xl border border-[#dae3f4] hover:border-[#b1c5ff] transition-colors flex items-center gap-3 group cursor-pointer text-left"
              >
                <span className="w-11 h-11 rounded-xl bg-[#eff4ff] group-hover:bg-[#001b4b] text-[#001b4b] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <span aria-hidden="true" className="material-symbols-outlined text-[26px]">sell</span>
                </span>
                <span>
                  <span className="block font-['Montserrat'] text-sm font-bold text-[#001b4b]">Cotizaciones</span>
                  <span className="block text-xs text-[#444650]">Solicita precio y disponibilidad</span>
                </span>
              </button>

              {/* Item 3 */}
              <button
                type="button"
                onClick={onOpenCreditModal}
                className="bg-white px-4 py-3.5 rounded-xl border border-[#dae3f4] hover:border-[#b1c5ff] transition-colors flex items-center gap-3 group cursor-pointer text-left"
              >
                <span className="w-11 h-11 rounded-xl bg-[#eff4ff] group-hover:bg-[#001b4b] text-[#001b4b] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <span aria-hidden="true" className="material-symbols-outlined text-[26px]">credit_card</span>
                </span>
                <span>
                  <span className="block font-['Montserrat'] text-sm font-bold text-[#001b4b]">Crédito para ferreterías</span>
                  <span className="block text-xs text-[#444650]">Líneas de apoyo comercial</span>
                </span>
              </button>

              {/* Item 4 */}
              <button
                type="button"
                onClick={() => onNavigate('nosotros')}
                className="bg-white px-4 py-3.5 rounded-xl border border-[#dae3f4] hover:border-[#b1c5ff] transition-colors flex items-center gap-3 group cursor-pointer text-left"
              >
                <span className="w-11 h-11 rounded-xl bg-[#eff4ff] group-hover:bg-[#001b4b] text-[#001b4b] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <span aria-hidden="true" className="material-symbols-outlined text-[26px]">local_shipping</span>
                </span>
                <span>
                  <span className="block font-['Montserrat'] text-sm font-bold text-[#001b4b]">Atención por WhatsApp</span>
                  <span className="block text-xs text-[#444650]">Consulta productos y cotizaciones</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: PRODUCTOS POR CATEGORÍA */}
      <section className="w-full bg-[#eff4ff] py-12 lg:py-16 border-b border-[#dae3f4]/80" id="productos">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c]">
                Líneas al por mayor
              </span>
              <h2 className="font-['Montserrat'] text-2xl lg:text-3xl text-[#001b4b] mt-1 font-bold">
                Explora las categorías del catálogo
              </h2>
              <p className="text-sm text-[#444650] mt-2">
                Explora los productos por categoría y consulta precio y disponibilidad al cotizar.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('productos')}
                className="min-h-11 inline-flex items-center gap-1.5 text-xs font-bold text-[#001b4b] bg-white px-3.5 py-2 rounded-lg border border-[#dae3f4] hover:bg-[#e5eeff] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">list_alt</span>
                <span>Ver catálogo completo &rarr;</span>
              </button>
            </div>
          </div>

          {/* 3 Tarjetas de Categoría */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Tarjeta 1: ELÉCTRICOS */}
            <div className="relative bg-white rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-[#dae3f4] overflow-hidden">
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#ffdcc6] flex items-center justify-center text-[#964900] mb-4">
                  <span className="material-symbols-outlined text-[32px]">bolt</span>
                </div>
                <h3 className="font-['Montserrat'] text-xl text-[#001b4b] font-bold">Eléctricos</h3>
                <p className="text-sm text-[#131c28] mt-1 font-semibold">
                  Revisa los productos de esta categoría
                </p>
                <p className="text-xs text-[#444650] mt-3 leading-relaxed">
                  Explora los productos eléctricos incluidos en el catálogo.
                </p>

                <div className="mt-4 pt-3 border-t border-[#f8f9ff] flex flex-wrap gap-1.5 text-[11px] text-[#444650]">
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Eléctricos</span>
                </div>
              </div>

              <div className="mt-8 pt-4 bg-[#eff4ff] -mx-6 -mb-6 lg:-mx-7 lg:-mb-7 p-6 rounded-b-2xl flex flex-col gap-3 border-t border-[#dae3f4]">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#444650] font-semibold">Consultar precio</span>
                  <span className="text-xs text-[#001b4b] font-bold">Consulta comercial</span>
                </div>
                <button
                  onClick={() => onNavigate('productos')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#fc820c] hover:bg-[#964900] text-white text-sm font-bold py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[19px]">chat</span>
                  <span>Ver productos</span>
                </button>
              </div>
            </div>

            {/* Tarjeta 2: CONSTRUCCIÓN Y FERRETERÍA */}
            <div className="relative bg-white rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-[#dae3f4]">
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#e5eeff] flex items-center justify-center text-[#001b4b] mb-4">
                  <span className="material-symbols-outlined text-[32px]">handyman</span>
                </div>
                <h3 className="font-['Montserrat'] text-xl text-[#001b4b] font-bold">Construcción y ferretería</h3>
                <p className="text-sm text-[#131c28] mt-1 font-semibold">
                  Revisa los productos de esta categoría
                </p>
                <p className="text-xs text-[#444650] mt-3 leading-relaxed">
                  Explora los productos de construcción y ferretería incluidos en el catálogo.
                </p>

                <div className="mt-4 pt-3 border-t border-[#f8f9ff] flex flex-wrap gap-1.5 text-[11px] text-[#444650]">
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Construcción</span>
                </div>
              </div>

              <div className="mt-8 pt-4 bg-[#eff4ff] -mx-6 -mb-6 lg:-mx-7 lg:-mb-7 p-6 rounded-b-2xl flex flex-col gap-3 border-t border-[#dae3f4]">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#444650] font-semibold">Consultar precio</span>
                  <span className="text-xs text-[#001b4b] font-bold">Consulta comercial</span>
                </div>
                <button
                  onClick={() => onNavigate('productos')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#fc820c] hover:bg-[#964900] text-white text-sm font-bold py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[19px]">chat</span>
                  <span>Ver productos</span>
                </button>
              </div>
            </div>

            {/* Tarjeta 3: ACCESORIOS SANITARIOS */}
            <div className="relative bg-white rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-[#dae3f4]">
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#e5eeff] flex items-center justify-center text-[#001b4b] mb-4">
                  <span className="material-symbols-outlined text-[32px]">plumbing</span>
                </div>
                <h3 className="font-['Montserrat'] text-xl text-[#001b4b] font-bold">Accesorios sanitarios</h3>
                <p className="text-sm text-[#131c28] mt-1 font-semibold">
                  Revisa los productos de esta categoría
                </p>
                <p className="text-xs text-[#444650] mt-3 leading-relaxed">
                  Explora los productos sanitarios incluidos en el catálogo.
                </p>

                <div className="mt-4 pt-3 border-t border-[#f8f9ff] flex flex-wrap gap-1.5 text-[11px] text-[#444650]">
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Sanitarios</span>
                </div>
              </div>

              <div className="mt-8 pt-4 bg-[#eff4ff] -mx-6 -mb-6 lg:-mx-7 lg:-mb-7 p-6 rounded-b-2xl flex flex-col gap-3 border-t border-[#dae3f4]">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#444650] font-semibold">Consultar precio</span>
                  <span className="text-xs text-[#001b4b] font-bold">Consulta comercial</span>
                </div>
                <button
                  onClick={() => onNavigate('productos')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#fc820c] hover:bg-[#964900] text-white text-sm font-bold py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[19px]">chat</span>
                  <span>Ver productos</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: POR QUÉ ELEGIR D&M (AZUL OSCURO #12306B) */}
      <section data-dark-surface className="w-full bg-[#12306b] text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#001b4b] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#fc820c] rounded-full blur-3xl opacity-10 pointer-events-none"></div>

        <div className="max-w-[1320px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs text-[#ffdcc6] uppercase tracking-widest font-bold">
              Ventajas competitivas
            </span>
            <h2 className="font-['Montserrat'] text-2xl lg:text-3xl text-white mt-1 font-bold">
              Por qué elegir D&M
            </h2>
            <p className="text-sm text-[#dae2ff] mt-2">
              Diseñamos nuestro modelo de abastecimiento pensando exclusivamente en el flujo de caja y la rentabilidad de las ferreterías del Caribe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Tarjeta 1 */}
            <div className="bg-[#001b4b]/60 backdrop-blur-sm p-6 lg:p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-[#fc820c]/20 group-hover:bg-[#fc820c] text-[#ffdcc6] group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                <span className="material-symbols-outlined text-[36px]">category</span>
              </div>
              <h3 className="font-['Montserrat'] text-base font-bold text-white mb-2">Variedad</h3>
              <p className="text-xs sm:text-sm text-[#dae2ff] leading-relaxed">
                Variedad: productos para diferentes necesidades
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-[#001b4b]/60 backdrop-blur-sm p-6 lg:p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-[#fc820c]/20 group-hover:bg-[#fc820c] text-[#ffdcc6] group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                <span className="material-symbols-outlined text-[36px]">build_circle</span>
              </div>
              <h3 className="font-['Montserrat'] text-base font-bold text-white mb-2">Soluciones</h3>
              <p className="text-xs sm:text-sm text-[#dae2ff] leading-relaxed">
                Productos para construcción, ferretería y electricidad
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-[#001b4b]/60 backdrop-blur-sm p-6 lg:p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-[#fc820c]/20 group-hover:bg-[#fc820c] text-[#ffdcc6] group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                <span className="material-symbols-outlined text-[36px]">local_shipping</span>
              </div>
              <h3 className="font-['Montserrat'] text-base font-bold text-white mb-2">Distribución</h3>
              <p className="text-xs sm:text-sm text-[#dae2ff] leading-relaxed">
                Revisa los productos del catálogo y solicita información
              </p>
            </div>
          </div>

          {/* CTA Crédito */}
          <div className="text-center">
            <button
              onClick={onOpenCreditModal}
              className="inline-flex items-center gap-2.5 bg-[#fc820c] hover:bg-[#964900] text-white font-['Inter'] text-sm sm:text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-bold cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-[24px]">payments</span>
              <span>Quiero información del crédito</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CÓMO COMPRAR EN 3 PASOS */}
      <section className="w-full bg-[#f8f9ff] py-12 lg:py-16 border-b border-[#dae3f4]/70">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c]">
              Proceso comercial simple
            </span>
            <h2 className="font-['Montserrat'] text-2xl lg:text-3xl text-[#001b4b] mt-1 font-bold">
              Cómo comprar en 3 pasos
            </h2>
            <p className="text-sm text-[#444650] mt-2">
              Envía tu solicitud por WhatsApp o busca productos en el catálogo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Paso 1 */}
            <div className="bg-white p-7 rounded-2xl shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#dae3f4]">
              <div className="w-12 h-12 rounded-full bg-[#001b4b] text-white font-['Montserrat'] text-xl flex items-center justify-center mb-4 font-bold">
                1
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[24px] text-[#fc820c]">chat</span>
                <h3 className="font-['Montserrat'] text-lg text-[#001b4b] font-bold">Escríbenos por WhatsApp</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#444650] leading-relaxed">
                Envía tu listado de materiales o indica qué producto necesitas. Nuestro equipo comercial recibe tu consulta por WhatsApp.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="bg-white p-7 rounded-2xl shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#dae3f4]">
              <div className="w-12 h-12 rounded-full bg-[#001b4b] text-white font-['Montserrat'] text-xl flex items-center justify-center mb-4 font-bold">
                2
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[24px] text-[#fc820c]">receipt_long</span>
                <h3 className="font-['Montserrat'] text-lg text-[#001b4b] font-bold">Recibe tu cotización</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#444650] leading-relaxed">
                Te compartimos la información de precio y disponibilidad vigente para tu solicitud.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="bg-white p-7 rounded-2xl shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#dae3f4]">
              <div className="w-12 h-12 rounded-full bg-[#001b4b] text-white font-['Montserrat'] text-xl flex items-center justify-center mb-4 font-bold">
                3
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[24px] text-[#fc820c]">local_shipping</span>
                <h3 className="font-['Montserrat'] text-lg text-[#001b4b] font-bold">Recibe tu pedido</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#444650] leading-relaxed">
                La forma y el lugar de entrega se confirman durante la cotización.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BrandsShowcase />

      {/* SECCIÓN 8: PREGUNTAS FRECUENTES */}
      <section className="w-full bg-[#eff4ff] py-12 lg:py-16 border-b border-[#dae3f4]">
        <div className="max-w-[880px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c]">
              Resolución de dudas
            </span>
            <h2 className="font-['Montserrat'] text-2xl lg:text-3xl text-[#001b4b] mt-1 font-bold">
              Preguntas frecuentes
            </h2>
          </div>

          {/* Acordeón interactivo */}
          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-[#dae3f4]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between gap-3 p-5 rounded-xl text-left font-['Montserrat'] text-sm sm:text-base text-[#001b4b] font-bold select-none cursor-pointer hover:bg-[#f8f9ff] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#fc820c] text-[20px]">
                        {faq.icon}
                      </span>
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[22px] transition-transform duration-300 text-[#001b4b] ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-[#444650] text-xs sm:text-sm leading-relaxed border-t border-[#f8f9ff]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Botón WhatsApp FAQ */}
          <div className="mt-8 text-center">
            <a
              className="inline-flex items-center gap-2 bg-[#fc820c] hover:bg-[#964900] text-white text-sm font-bold px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              href={`https://wa.me/${COMPANY_PHONE}?text=Hola,%20tengo%20otra%20pregunta%20sobre%20la%20distribuci%C3%B3n%20mayorista`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">help_center</span>
              <span>Tengo otra pregunta</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN 9: LLAMADO FINAL (FONDO AZUL PROFUNDO #12306B) */}
      <section data-dark-surface className="w-full bg-[#12306b] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001b4b] to-[#12306b] opacity-90"></div>
        <div className="max-w-[1320px] mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs text-[#ffdcc6] uppercase tracking-widest font-bold">
              Catálogo de productos
            </span>
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
              Consulta y cotiza los productos que necesitas
            </h2>
            <p className="text-base text-[#dae2ff] leading-relaxed max-w-2xl mx-auto">
              Revisa el catálogo y envía tu solicitud por WhatsApp para confirmar precio y disponibilidad.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center gap-3 bg-[#fc820c] hover:bg-[#964900] text-white font-['Montserrat'] text-base sm:text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-bold cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined text-[28px]">chat</span>
                <span>Cotiza hoy</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
