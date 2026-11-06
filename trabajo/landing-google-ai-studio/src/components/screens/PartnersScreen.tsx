import React from 'react';
import { ALLIED_BRANDS } from '../../data/mockData';

export const PartnersScreen: React.FC = () => (
  <div className="w-full bg-[#f8f9ff] min-h-screen py-10">
    <div className="max-w-[1320px] mx-auto px-4 lg:px-8 space-y-8">
      <section className="bg-[#001b4b] text-white rounded-2xl p-6 lg:p-10 shadow-lg border border-[#12306b]">
        <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c] bg-white/10 px-3 py-1 rounded-full">
          Marcas
        </span>
        <h1 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mt-3">
          Marcas compartidas por Distribuidora D&M
        </h1>
      </section>

      <section aria-label="Logos de marcas" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {ALLIED_BRANDS.map((brand) => (
          <figure key={brand.name} className="bg-white rounded-2xl p-5 border border-[#dae3f4] flex flex-col items-center justify-center gap-3 min-h-36">
            <img src={brand.logo} alt={`Logo ${brand.name}`} loading="lazy" className="w-full h-16 object-contain" />
            <figcaption className="text-sm font-semibold text-[#001b4b]">{brand.name}</figcaption>
          </figure>
        ))}
      </section>
    </div>
  </div>
);
