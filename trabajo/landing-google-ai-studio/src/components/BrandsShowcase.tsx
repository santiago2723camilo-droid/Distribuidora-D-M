import React, { useEffect, useRef, useState } from 'react';
import { ALLIED_BRANDS } from '../data/mockData';
import { AlliedBrand } from '../types';

export const BrandsShowcase: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<AlliedBrand | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedBrand) return undefined;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedBrand(null);
        return;
      }

      if (event.key === 'Tab') {
        const dialog = document.getElementById('brand-details-dialog');
        const focusable = dialog?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      previousFocus?.focus();
    };
  }, [selectedBrand]);

  const renderBrandButton = (brand: AlliedBrand, duplicate = false) => (
    <button
      key={`${duplicate ? 'duplicate-' : ''}${brand.name}`}
      type="button"
      onClick={() => setSelectedBrand(brand)}
      aria-label={`Ver logo de ${brand.name}${duplicate ? ' (repetido en el carrusel)' : ''}`}
      className="flex h-28 w-40 shrink-0 flex-col items-center justify-center gap-3 rounded-xl border border-[#dae3f4] bg-white p-4 text-center shadow-xs transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001b4b]"
    >
      <img src={brand.logo} alt="" loading="lazy" className="h-12 max-w-full object-contain" />
      <span className="text-xs font-semibold text-[#001b4b]">{brand.name}</span>
    </button>
  );

  return (
    <>
      <section className="w-full border-b border-[#dae3f4] bg-[#e5eeff] py-14 lg:py-16" id="marcas" aria-labelledby="brands-title">
        <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c]">Marcas compartidas</span>
            <h2 id="brands-title" className="mt-1 font-['Montserrat'] text-2xl font-bold text-[#001b4b] lg:text-3xl">
              Marcas cuyos logos compartiste
            </h2>
          </div>

          <div className="mb-4 flex justify-end">
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              aria-pressed={isPaused}
              className="rounded-lg border border-[#b1c5ff] bg-white px-3 py-2 text-xs font-semibold text-[#001b4b] hover:bg-[#f8f9ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001b4b]"
            >
              {isPaused ? 'Reanudar movimiento' : 'Pausar movimiento'}
            </button>
          </div>

          <div className="brands-marquee overflow-hidden rounded-2xl" aria-label="Carrusel de logos; el movimiento se puede pausar">
            <div className={`brands-marquee-track flex w-max py-2 ${isPaused ? 'is-paused' : ''}`}>
              <div className="flex w-max shrink-0 gap-4 pr-4">
                {ALLIED_BRANDS.map((brand) => renderBrandButton(brand))}
              </div>
              <div className="flex w-max shrink-0 gap-4 pr-4">
                {ALLIED_BRANDS.map((brand) => renderBrandButton(brand, true))}
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-[#444650]">Selecciona un logo para verlo con más detalle.</p>
        </div>
      </section>

      {selectedBrand && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#00112f]/70 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedBrand(null);
          }}
        >
          <section
            id="brand-details-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="brand-dialog-title"
            className="relative w-full max-w-lg rounded-2xl border border-[#dae3f4] bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedBrand(null)}
              aria-label="Cerrar detalle de marca"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[#001b4b] hover:bg-[#eff4ff] focus-visible:outline-2 focus-visible:outline-[#001b4b]"
            >
              <span aria-hidden="true" className="material-symbols-outlined">close</span>
            </button>
            <div className="flex min-h-36 items-center justify-center rounded-xl bg-[#f8f9ff] p-6">
              <img src={selectedBrand.logo} alt={`Logo ${selectedBrand.name}`} className="max-h-24 max-w-full object-contain" />
            </div>
            <h2 id="brand-dialog-title" className="mt-5 font-['Montserrat'] text-xl font-bold text-[#001b4b]">{selectedBrand.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#444650]">
              Este logo fue compartido para la página de Distribuidora D&amp;M. No hay una ficha adicional de esta marca en los documentos disponibles.
            </p>
          </section>
        </div>
      )}
    </>
  );
};
