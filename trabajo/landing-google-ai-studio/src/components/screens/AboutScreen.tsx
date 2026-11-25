import React from 'react';
import { COMPANY_ADDRESS } from '../../data/mockData';

interface AboutScreenProps {
  onOpenCreditModal: () => void;
  onOpenQuoteModal: () => void;
}

const productLines = [
  { title: 'Construcción y ferretería', icon: 'handyman' },
  { title: 'Accesorios sanitarios', icon: 'plumbing' },
  { title: 'Productos eléctricos', icon: 'bolt' },
];

const companyPurpose = [
  {
    title: 'Misión',
    text: 'Ofrecer productos para construcción, ferretería y soluciones eléctricas, con responsabilidad y una atención cercana a las necesidades de nuestros clientes.',
  },
  {
    title: 'Visión',
    text: 'Ser una distribuidora reconocida por la variedad de sus productos y el compromiso con sus clientes.',
  },
];

export const AboutScreen: React.FC<AboutScreenProps> = ({
  onOpenCreditModal,
  onOpenQuoteModal,
}) => (
  <div className="w-full bg-[#f8f9ff] min-h-screen py-8 lg:py-12">
    <div className="max-w-[1320px] mx-auto px-4 lg:px-8 space-y-6 sm:space-y-8">
      <section className="bg-[#001b4b] text-white rounded-2xl p-6 lg:p-10 shadow-lg border border-[#12306b]">
        <span className="text-xs font-bold uppercase tracking-wider text-dym-gold bg-white/10 px-3 py-1 rounded-full">
          Sobre Distribuidora D&M
        </span>
        <h1 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mt-3">
          Soluciones para construcción, ferretería y electricidad
        </h1>
        <p className="text-sm text-[#dae2ff] leading-relaxed mt-3 max-w-2xl">
          Distribuidora D&M ofrece productos para construcción, ferretería y soluciones eléctricas.
        </p>
      </section>

      <section aria-label="Misión y visión" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {companyPurpose.map((item) => (
          <article key={item.title} className="bg-white p-6 rounded-2xl border border-[#dae3f4] shadow-xs">
            <h2 className="font-['Montserrat'] text-xl font-bold text-[#001b4b]">{item.title}</h2>
            <p className="text-sm text-[#444650] leading-relaxed mt-3">{item.text}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="product-lines-title" className="space-y-4">
        <h2 id="product-lines-title" className="font-['Montserrat'] text-xl sm:text-2xl font-bold text-[#001b4b]">
          Líneas de productos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {productLines.map((line) => (
            <article key={line.title} className="bg-white p-6 rounded-2xl border border-[#dae3f4] flex items-center gap-4">
              <span className="material-symbols-outlined text-[30px] text-dym-blue">{line.icon}</span>
              <h3 className="font-['Montserrat'] text-base font-bold text-[#001b4b]">{line.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl border border-[#dae3f4] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-['Montserrat'] text-lg font-bold text-[#001b4b]">Dirección y catálogo</h2>
          <p className="text-sm text-[#444650] mt-1">{COMPANY_ADDRESS}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button type="button" onClick={onOpenQuoteModal} className="px-5 py-3 rounded-lg bg-dym-gold text-[#001b4b] text-sm font-bold hover:bg-dym-gold-hover">
            Solicitar cotización
          </button>
          <button type="button" onClick={onOpenCreditModal} className="px-5 py-3 rounded-lg bg-[#eff4ff] text-[#001b4b] text-sm font-bold hover:bg-[#e0e9f9]">
            Consultar crédito
          </button>
        </div>
      </section>
    </div>
  </div>
);
