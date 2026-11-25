import React, { useState } from 'react';
import { ProductItem, ScreenType } from '../../types';
import { COMPANY_PHONE, FAQS, PRODUCT_CATEGORIES } from '../../data/mockData';
import { BrandsShowcase } from '../BrandsShowcase';

interface HomeScreenProps {
  onNavigate: (screen: ScreenType, category?: ProductItem['category']) => void;
  onOpenQuoteModal: () => void;
  onOpenCreditModal: () => void;
}

const categoryTone: Record<ProductItem['category'], string> = {
  electricos: 'border-dym-gold/70 bg-dym-gold-soft',
  construccion: 'border-dym-blue/20 bg-dym-blue-soft',
  sanitarios: 'border-dym-aqua bg-dym-aqua-soft',
};

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onOpenCreditModal,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showHeroImage, setShowHeroImage] = useState(true);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col w-full">
      <section className="border-b border-dym-aqua-light bg-linear-to-br from-white via-dym-aqua-soft to-dym-aqua-light py-8 sm:py-12 lg:py-16">
        <div className={`mx-auto grid max-w-[1320px] items-center gap-7 px-4 sm:px-6 lg:gap-12 lg:px-8 ${showHeroImage ? 'min-[700px]:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]' : ''}`}>
          <div className="min-w-0">
            <p className="mb-4 border-l-3 border-dym-blue pl-3 text-xs font-semibold leading-relaxed text-dym-blue sm:text-sm">
              Distribución mayorista · Valledupar y Caribe Colombiano
            </p>
            <h1 className="max-w-2xl text-balance text-[clamp(1.9rem,4.2vw,3.45rem)] font-extrabold leading-[1.1] tracking-tight text-[#001b4b]">
              D&amp;M, Soluciones para cada necesidad
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-[#444650] lg:text-lg">
              Distribuimos al por mayor productos de ferretería y construcción, accesorios sanitarios y eléctricos. Consulta el catálogo y cotiza por WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-dym-gold px-4 py-2.5 text-center text-sm font-bold text-[#001b4b] transition-colors hover:bg-dym-gold-hover min-[390px]:w-auto"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[20px]">chat</span>
                Quiero cotizar mi pedido
              </button>
              <button
                type="button"
                onClick={() => onNavigate('productos')}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 py-2 text-sm font-bold text-dym-blue transition-colors hover:bg-dym-blue-soft"
              >
                Explorar catálogo
                <span aria-hidden="true" className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
            <p className="mt-4 flex max-w-lg items-start gap-2 text-xs leading-relaxed text-[#444650]">
              <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-[18px] text-dym-blue">verified</span>
              Atención directa para ferreterías, maestros de obra y constructoras
            </p>
          </div>

          {showHeroImage && (
            <figure className="min-w-0 overflow-hidden rounded-2xl border border-dym-aqua bg-dym-aqua-soft shadow-sm">
              <img
                alt="Foto ilustrativa de herramientas manuales y accesorios de ferretería sobre una mesa"
                className="block aspect-[16/9] w-full object-cover min-[700px]:aspect-[5/4]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWMKUpw2rA0Ni6xuDFbfcn_sozckcp1JVvAtRmSIbg2oxk-oEkduLAt5-3yUZwNPdI1Mq0TnoB_hKK7GJA1DgnyMgcTouQisU76xlGx4YgWnT5utw5GYFqSeXvFQYSBnN5ubTLbe9vmeOlCmcqB52JfCBG5kuCDEM9lavOSEO5ngG0gG1VfcAdFbeJUXCJ_-5OZi32ASeiheuUS7twMQ_8jpAXbvg4xEV8zpTYk5A"
                fetchPriority="high"
                onError={() => setShowHeroImage(false)}
              />
            </figure>
          )}
        </div>
      </section>

      <section className="border-b border-[#dae3f4] bg-white py-9 sm:py-12" id="productos" aria-labelledby="product-categories-title">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <h2 id="product-categories-title" className="mb-5 text-2xl font-bold text-[#001b4b] lg:text-3xl">
            Explora el catálogo por categoría
          </h2>
          <div className="grid gap-3 min-[700px]:grid-cols-3 lg:gap-5">
            {PRODUCT_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => onNavigate('productos', category.id)}
                className={`group flex min-h-20 items-center gap-3 rounded-xl border p-3.5 text-left text-[#001b4b] transition-colors hover:border-dym-blue lg:p-4 ${categoryTone[category.id]}`}
              >
                <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-dym-blue">
                  <span className="material-symbols-outlined">{category.icon}</span>
                </span>
                <span className="min-w-0 flex-1 text-sm font-bold lg:text-base">{category.label}</span>
                <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-[18px] text-[#444650] group-hover:text-[#001b4b]">arrow_forward</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: POR QUÉ ELEGIR D&M */}
      <section data-dark-surface className="w-full bg-linear-to-br from-[#001b4b] to-dym-blue text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#001b4b] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-dym-aqua rounded-full blur-3xl opacity-15 pointer-events-none"></div>

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
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
              <div className="w-16 h-16 rounded-2xl bg-dym-aqua/15 text-dym-aqua group-hover:bg-dym-aqua group-hover:text-[#001b4b] flex items-center justify-center mb-4 transition-colors duration-300">
                <span className="material-symbols-outlined text-[36px]">category</span>
              </div>
              <h3 className="font-['Montserrat'] text-base font-bold text-white mb-2">Variedad</h3>
              <p className="text-xs sm:text-sm text-[#dae2ff] leading-relaxed">
                Variedad: productos para diferentes necesidades
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-[#001b4b]/60 backdrop-blur-sm p-6 lg:p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-dym-aqua/15 text-dym-aqua group-hover:bg-dym-aqua group-hover:text-[#001b4b] flex items-center justify-center mb-4 transition-colors duration-300">
                <span className="material-symbols-outlined text-[36px]">build_circle</span>
              </div>
              <h3 className="font-['Montserrat'] text-base font-bold text-white mb-2">Soluciones</h3>
              <p className="text-xs sm:text-sm text-[#dae2ff] leading-relaxed">
                Productos para construcción, ferretería y electricidad
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-[#001b4b]/60 backdrop-blur-sm p-6 lg:p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-dym-aqua/15 text-dym-aqua group-hover:bg-dym-aqua group-hover:text-[#001b4b] flex items-center justify-center mb-4 transition-colors duration-300">
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
              className="inline-flex min-h-11 items-center gap-2.5 rounded-lg border border-[#b1c5ff]/70 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              <span className="material-symbols-outlined text-[24px]">payments</span>
              <span>Quiero información del crédito</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CÓMO COMPRAR EN 3 PASOS */}
      <section className="w-full bg-[#f8f9ff] py-12 lg:py-16 border-b border-[#dae3f4]/70">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
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
                <span className="material-symbols-outlined text-[24px] text-dym-blue">chat</span>
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
                <span className="material-symbols-outlined text-[24px] text-dym-blue">receipt_long</span>
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
                <span className="material-symbols-outlined text-[24px] text-dym-blue">local_shipping</span>
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
      <section className="w-full bg-dym-blue-soft py-12 lg:py-16 border-b border-dym-blue/15">
        <div className="max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
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
                      <span className="material-symbols-outlined text-dym-blue text-[20px]">
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
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#b1c5ff] bg-white px-4 py-2.5 text-sm font-bold text-[#001b4b] transition-colors hover:bg-[#e5eeff]"
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
        <div className="absolute inset-0 bg-linear-to-r from-[#001b4b] to-dym-blue"></div>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
              Consulta y cotiza los productos que necesitas
            </h2>
            <p className="text-base text-[#dae2ff] leading-relaxed max-w-2xl mx-auto">
              Revisa el catálogo y envía tu solicitud por WhatsApp para confirmar precio y disponibilidad.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-dym-gold px-5 py-3 text-sm font-bold text-[#001b4b] transition-colors hover:bg-dym-gold-hover"
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
