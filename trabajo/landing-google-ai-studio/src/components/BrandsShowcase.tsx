import React, { useState } from 'react';
import { ALLIED_BRANDS } from '../data/mockData';
import { AlliedBrand } from '../types';
import { ModalDialog } from './ModalDialog';

export const BrandsShowcase: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<AlliedBrand | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const renderBrandButton = (brand: AlliedBrand, duplicate = false) => (
    <button
      key={`${duplicate ? 'duplicate-' : ''}${brand.name}`}
      type="button"
      onClick={(event) => {
        event.currentTarget.focus({ preventScroll: true });
        setSelectedBrand(brand);
      }}
      tabIndex={duplicate ? -1 : undefined}
      aria-label={`Ver logo de ${brand.name}${duplicate ? ' (repetido en el carrusel)' : ''}`}
      className="flex h-28 w-40 shrink-0 snap-start flex-col items-center justify-center gap-3 rounded-xl border border-[#dae3f4] bg-white p-4 text-center shadow-xs transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#001b4b]"
    >
      <img src={brand.logo} alt="" loading="lazy" className="h-12 max-w-full object-contain" />
      <span className="text-xs font-semibold text-[#001b4b]">{brand.name}</span>
    </button>
  );

  return (
    <>
      <section className="w-full scroll-mt-20 border-b border-[#dae3f4] bg-white py-12 lg:py-16" id="marcas" aria-labelledby="brands-title">
        <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c]">Marcas compartidas</span>
            <h2 id="brands-title" className="mt-1 font-['Montserrat'] text-2xl font-bold text-[#001b4b] lg:text-3xl">
              Marcas cuyos logos compartiste
            </h2>
          </div>

          <div className="brands-pause mb-4 flex justify-end">
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              aria-pressed={isPaused}
              className="min-h-11 rounded-lg border border-[#b1c5ff] bg-white px-3 py-2 text-xs font-semibold text-[#001b4b] hover:bg-[#f8f9ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001b4b]"
            >
              {isPaused ? 'Reanudar movimiento' : 'Pausar movimiento'}
            </button>
          </div>

          <div className="brands-marquee overflow-hidden rounded-2xl" role="group" aria-label="Logos de marcas">
            <div className={`brands-marquee-track flex w-max py-2 ${isPaused ? 'is-paused' : ''}`}>
              <div className="flex w-max shrink-0 gap-4 pr-4">
                {ALLIED_BRANDS.map((brand) => renderBrandButton(brand))}
              </div>
              <div className="brands-repeat flex w-max shrink-0 gap-4 pr-4">
                {ALLIED_BRANDS.map((brand) => renderBrandButton(brand, true))}
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-[#444650]">
            <span className="brands-swipe-hint hidden">Desliza para ver todas las marcas. </span>
            Selecciona un logo para verlo con más detalle.
          </p>
        </div>
      </section>

      <ModalDialog
        isOpen={selectedBrand !== null}
        titleId="brand-dialog-title"
        className="brand-dialog-enter max-w-lg"
        onClose={() => setSelectedBrand(null)}
        closeOnBackdrop
      >
        <div className="site-dialog-body min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setSelectedBrand(null)}
              aria-label="Cerrar detalle de marca"
              className="flex h-11 w-11 items-center justify-center rounded-full text-[#001b4b] hover:bg-[#eff4ff]"
            >
              <span aria-hidden="true" className="material-symbols-outlined">close</span>
            </button>
          </div>
          {selectedBrand && (
            <>
              <div className="flex min-h-24 items-center justify-center rounded-xl bg-white p-3 sm:p-6">
                <img src={selectedBrand.logo} alt={`Logo ${selectedBrand.name}`} className="max-h-24 max-w-full object-contain" />
              </div>
              <h2 id="brand-dialog-title" className="mt-4 font-['Montserrat'] text-xl font-bold text-[#001b4b] wrap-anywhere">{selectedBrand.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#444650]">
                Este logo fue compartido para la página de Distribuidora D&amp;M. No hay una ficha adicional de esta marca en los documentos disponibles.
              </p>
            </>
          )}
        </div>
      </ModalDialog>
    </>
  );
};
