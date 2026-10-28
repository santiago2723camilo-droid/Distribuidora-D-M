import React, { useState } from 'react';
import { ScreenType } from '../../types';
import { ALLIED_BRANDS, COMPANY_PHONE, FAQS, TESTIMONIALS } from '../../data/mockData';

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenQuoteModal: (categoryFilter?: string) => void;
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
      <section className="relative w-full overflow-hidden bg-[#f8f9ff] py-12 lg:py-20 border-b border-[#dae3f4]/60">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Text Content */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-4 z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e5eeff] rounded-full text-[#001b4b] text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#fc820c] animate-pulse"></span>
                <span>Distribución Mayorista · Valledupar y Caribe Colombiano</span>
              </div>

              <h1 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-[44px] text-[#001b4b] tracking-tight font-extrabold uppercase leading-[1.15]">
                D&M, TU ALIADO EN CADA PROYECTO
              </h1>

              <p className="font-['Inter'] text-base sm:text-lg text-[#444650] max-w-xl leading-relaxed">
                Catálogo amplio, precios accesibles, crédito y entregas eficientes en el Caribe colombiano.
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2 border border-[#dae3f4]">
                <img
                  alt="Herramientas de ferretería y material eléctrico sobre mesa de trabajo industrial en Valledupar"
                  className="w-full h-auto max-h-[460px] object-cover rounded-xl transform hover:scale-[1.02] transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWMKUpw2rA0Ni6xuDFbfcn_sozckcp1JVvAtRmSIbg2oxk-oEkduLAt5-3yUZwNPdI1Mq0TnoB_hKK7GJA1DgnyMgcTouQisU76xlGx4YgWnT5utw5GYFqSeXvFQYSBnN5ubTLbe9vmeOlCmcqB52JfCBG5kuCDEM9lavOSEO5ngG0gG1VfcAdFbeJUXCJ_-5OZi32ASeiheuUS7twMQ_8jpAXbvg4xEV8zpTYk5A"
                  onError={(e) => {
                    // Styled resilient fallback if network blips
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center justify-between border border-[#e5eeff]">
                  <div>
                    <p className="text-[11px] font-bold uppercase text-[#fc820c] tracking-wider">
                      Inventario permanente
                    </p>
                    <p className="font-['Montserrat'] text-sm sm:text-base font-bold text-[#001b4b]">
                      +3.500 referencias disponibles
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#001b4b]">
                    <span className="material-symbols-outlined text-[22px]">inventory_2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Barra de confianza (4 beneficios clave) */}
          <div className="mt-12 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Item 1 */}
              <div
                onClick={() => onNavigate('productos')}
                className="bg-white p-5 rounded-xl shadow-xs hover:shadow-md border border-[#dae3f4]/70 transition-all duration-300 flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#eff4ff] group-hover:bg-[#001b4b] text-[#001b4b] group-hover:text-white flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                  <span className="material-symbols-outlined text-[26px]">inventory_2</span>
                </div>
                <div>
                  <h3 className="font-['Montserrat'] text-sm font-bold text-[#001b4b]">Catálogo amplio</h3>
                  <p className="text-xs text-[#444650]">Miles de SKUs para surtir</p>
                </div>
              </div>

              {/* Item 2 */}
              <div
                onClick={() => onOpenQuoteModal()}
                className="bg-white p-5 rounded-xl shadow-xs hover:shadow-md border border-[#dae3f4]/70 transition-all duration-300 flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#eff4ff] group-hover:bg-[#001b4b] text-[#001b4b] group-hover:text-white flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                  <span className="material-symbols-outlined text-[26px]">sell</span>
                </div>
                <div>
                  <h3 className="font-['Montserrat'] text-sm font-bold text-[#001b4b]">Precios accesibles</h3>
                  <p className="text-xs text-[#444650]">Márgenes pensados para reventa</p>
                </div>
              </div>

              {/* Item 3 */}
              <div
                onClick={onOpenCreditModal}
                className="bg-white p-5 rounded-xl shadow-xs hover:shadow-md border border-[#dae3f4]/70 transition-all duration-300 flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#eff4ff] group-hover:bg-[#001b4b] text-[#001b4b] group-hover:text-white flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                  <span className="material-symbols-outlined text-[26px]">credit_card</span>
                </div>
                <div>
                  <h3 className="font-['Montserrat'] text-sm font-bold text-[#001b4b]">Crédito para ferreterías</h3>
                  <p className="text-xs text-[#444650]">Líneas de apoyo comercial</p>
                </div>
              </div>

              {/* Item 4 */}
              <div
                onClick={() => onNavigate('nosotros')}
                className="bg-white p-5 rounded-xl shadow-xs hover:shadow-md border border-[#dae3f4]/70 transition-all duration-300 flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#eff4ff] group-hover:bg-[#001b4b] text-[#001b4b] group-hover:text-white flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                  <span className="material-symbols-outlined text-[26px]">local_shipping</span>
                </div>
                <div>
                  <h3 className="font-['Montserrat'] text-sm font-bold text-[#001b4b]">Entregas eficientes</h3>
                  <p className="text-xs text-[#444650]">Rutas diarias por el Caribe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: PRODUCTOS POR CATEGORÍA */}
      <section className="w-full bg-[#eff4ff] py-14 lg:py-20 border-b border-[#dae3f4]/80" id="productos">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c]">
                Líneas al por mayor
              </span>
              <h2 className="font-['Montserrat'] text-2xl lg:text-3xl text-[#001b4b] mt-1 font-bold">
                Todo lo que tu ferretería necesita
              </h2>
              <p className="text-sm text-[#444650] mt-2">
                Despachos consolidados en bulto, cajas maestras y volumen industrial con los mejores precios directos de distribuidor en la región.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('productos')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001b4b] bg-white px-3.5 py-2 rounded-lg border border-[#dae3f4] hover:bg-[#e5eeff] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">list_alt</span>
                <span>Ver catálogo completo &rarr;</span>
              </button>
            </div>
          </div>

          {/* 3 Tarjetas de Categoría */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Tarjeta 1: ELÉCTRICOS (DESTACADA) */}
            <div className="relative bg-white rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border-2 border-[#fc820c]/60 overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#fc820c] text-white text-[11px] px-3.5 py-1 rounded-bl-xl font-bold uppercase tracking-wider shadow-xs">
                Categoría destacada
              </div>

              <div>
                <div className="w-14 h-14 rounded-xl bg-[#ffdcc6] flex items-center justify-center text-[#964900] mb-4">
                  <span className="material-symbols-outlined text-[32px]">bolt</span>
                </div>
                <h3 className="font-['Montserrat'] text-xl text-[#001b4b] font-bold">Eléctricos</h3>
                <p className="text-sm text-[#131c28] mt-1 font-semibold">
                  Gran variedad para surtir tu negocio en una sola compra
                </p>
                <p className="text-xs text-[#444650] mt-3 leading-relaxed">
                  Cables certificados, iluminación LED de alto rendimiento, interruptores, cajas de paso, tomacorrientes y protecciones térmicas industriales.
                </p>

                <div className="mt-4 pt-3 border-t border-[#f8f9ff] flex flex-wrap gap-1.5 text-[11px] text-[#444650]">
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Cables THHN</span>
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Iluminación LED</span>
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Breakers</span>
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Tubería EMT</span>
                </div>
              </div>

              <div className="mt-8 pt-4 bg-[#eff4ff] -mx-6 -mb-6 lg:-mx-7 lg:-mb-7 p-6 rounded-b-2xl flex flex-col gap-3 border-t border-[#dae3f4]">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#444650] font-semibold">Consultar precio</span>
                  <span className="text-xs text-[#001b4b] font-bold">Venta al por mayor</span>
                </div>
                <button
                  onClick={() => onOpenQuoteModal('electricos')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#fc820c] hover:bg-[#964900] text-white text-sm font-bold py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[19px]">chat</span>
                  <span>Cotizar eléctricos</span>
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
                  Herramientas y materiales para cada proyecto
                </p>
                <p className="text-xs text-[#444650] mt-3 leading-relaxed">
                  Herramientas manuales, discos de corte, abrasivos, fijaciones, cerraduras, alambres, cintas técnicas y equipos para faena pesada.
                </p>

                <div className="mt-4 pt-3 border-t border-[#f8f9ff] flex flex-wrap gap-1.5 text-[11px] text-[#444650]">
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Discos de corte</span>
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Alambre recocido</span>
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Cerraduras</span>
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Fijaciones Drywall</span>
                </div>
              </div>

              <div className="mt-8 pt-4 bg-[#eff4ff] -mx-6 -mb-6 lg:-mx-7 lg:-mb-7 p-6 rounded-b-2xl flex flex-col gap-3 border-t border-[#dae3f4]">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#444650] font-semibold">Consultar precio</span>
                  <span className="text-xs text-[#001b4b] font-bold">Precios por escala</span>
                </div>
                <button
                  onClick={() => onOpenQuoteModal('construccion')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#fc820c] hover:bg-[#964900] text-white text-sm font-bold py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[19px]">chat</span>
                  <span>Cotizar ferretería</span>
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
                  Soluciones para obra y para vender en tu local
                </p>
                <p className="text-xs text-[#444650] mt-3 leading-relaxed">
                  Válvulas, tubería hidrosanitaria, accesorios de PVC, grifería institucional, selladores, sifones y repuestos de alta rotación para mostrador.
                </p>

                <div className="mt-4 pt-3 border-t border-[#f8f9ff] flex flex-wrap gap-1.5 text-[11px] text-[#444650]">
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Válvulas PVC</span>
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Soldadura PVC</span>
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Sifones flexibles</span>
                  <span className="bg-[#eff4ff] px-2 py-0.5 rounded">Teflón industrial</span>
                </div>
              </div>

              <div className="mt-8 pt-4 bg-[#eff4ff] -mx-6 -mb-6 lg:-mx-7 lg:-mb-7 p-6 rounded-b-2xl flex flex-col gap-3 border-t border-[#dae3f4]">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#444650] font-semibold">Consultar precio</span>
                  <span className="text-xs text-[#001b4b] font-bold">Disponibilidad en bodega</span>
                </div>
                <button
                  onClick={() => onOpenQuoteModal('sanitarios')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#fc820c] hover:bg-[#964900] text-white text-sm font-bold py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[19px]">chat</span>
                  <span>Cotizar sanitarios</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: POR QUÉ ELEGIR D&M (AZUL OSCURO #12306B) */}
      <section className="w-full bg-[#12306b] text-white py-14 lg:py-20 relative overflow-hidden">
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
                Soluciones: opciones para construcción, ferretería y electricidad
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-[#001b4b]/60 backdrop-blur-sm p-6 lg:p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-[#fc820c]/20 group-hover:bg-[#fc820c] text-[#ffdcc6] group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                <span className="material-symbols-outlined text-[36px]">local_shipping</span>
              </div>
              <h3 className="font-['Montserrat'] text-base font-bold text-white mb-2">Distribución</h3>
              <p className="text-xs sm:text-sm text-[#dae2ff] leading-relaxed">
                Distribución: atención y entrega para todos nuestros clientes
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
      <section className="w-full bg-[#f8f9ff] py-14 lg:py-20 border-b border-[#dae3f4]/70">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c]">
              Proceso comercial simple
            </span>
            <h2 className="font-['Montserrat'] text-2xl lg:text-3xl text-[#001b4b] mt-1 font-bold">
              Cómo comprar en 3 pasos
            </h2>
            <p className="text-sm text-[#444650] mt-2">
              Sin formularios interminables ni demoras administrativas. Respuesta rápida directo a tu celular.
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
                Envía tu listado de materiales o la referencia que necesitas. Nuestro equipo comercial te responde en minutos.
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
                Te compartimos precios por volumen, disponibilidad inmediata de bodega y opciones de pago o crédito.
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
                Coordinamos la logística directa hasta tu negocio o frente de obra en Valledupar y departamentos cercanos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: NUESTROS ALIADOS */}
      <section className="w-full bg-[#e5eeff] py-14 lg:py-16 border-b border-[#dae3f4]" id="aliados">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c]">
              Marcas respaldadas
            </span>
            <h2 className="font-['Montserrat'] text-2xl lg:text-3xl text-[#001b4b] mt-1 font-bold">
              Trabajamos con las mejores marcas
            </h2>
          </div>

          {/* Cuadrícula de 6 tarjetas de marcas */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ALLIED_BRANDS.map((brand) => (
              <div
                key={brand.name}
                onClick={() => onNavigate('aliados')}
                className="bg-white p-4 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[110px] border border-[#dae3f4] cursor-pointer group"
              >
                <span className="font-['Montserrat'] text-lg text-[#001b4b] font-bold tracking-tight group-hover:text-[#fc820c] transition-colors">
                  {brand.name}
                </span>
                <span className="text-[11px] text-[#444650] uppercase mt-1 font-medium">
                  {brand.category.split('&')[0].trim()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: TESTIMONIOS (ID: nosotros) */}
      <section className="w-full bg-[#f8f9ff] py-14 lg:py-20 border-b border-[#dae3f4]/70" id="nosotros">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c]">
              Confianza comprobada
            </span>
            <h2 className="font-['Montserrat'] text-2xl lg:text-3xl text-[#001b4b] mt-1 font-bold">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-sm text-[#444650] mt-2">
              Experiencias reales de comerciantes y constructores que crecen junto a D&M Distribuidora.
            </p>
          </div>

          {/* 3 Tarjetas de testimonios reales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 lg:p-7 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-[#dae3f4]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded bg-[#eff4ff] text-[11px] text-[#001b4b] font-semibold">
                      Cliente Verificado
                    </span>
                    <div className="flex text-[#fc820c]">
                      {[...Array(t.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#131c28] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#f8f9ff] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#e5eeff] flex-shrink-0 flex items-center justify-center text-[#001b4b] font-bold text-sm">
                    {t.clientName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-['Montserrat'] text-xs sm:text-sm text-[#001b4b] font-bold">
                      {t.clientName} · {t.city}
                    </p>
                    <p className="text-[11px] text-[#444650] font-medium">{t.businessType}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 8: PREGUNTAS FRECUENTES */}
      <section className="w-full bg-[#eff4ff] py-14 lg:py-20 border-b border-[#dae3f4]">
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
                  className="bg-white rounded-xl shadow-xs border border-[#dae3f4] transition-all duration-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-['Montserrat'] text-sm sm:text-base text-[#001b4b] font-bold select-none cursor-pointer hover:bg-[#f8f9ff] transition-colors"
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
      <section className="w-full bg-[#12306b] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001b4b] to-[#12306b] opacity-90"></div>
        <div className="max-w-[1320px] mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs text-[#ffdcc6] uppercase tracking-widest font-bold">
              Abastecimiento inmediato
            </span>
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
              Cotiza hoy y surte tu ferretería
            </h2>
            <p className="text-base text-[#dae2ff] leading-relaxed max-w-2xl mx-auto">
              Optimiza la rotación de tu inventario con despacho preferencial, precios de distribuidor y la atención dedicada que tu negocio en el Caribe merece.
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
