import React, { useState } from 'react';
import { ALLIED_BRANDS, COMPANY_PHONE } from '../../data/mockData';

interface PartnersScreenProps {
  onOpenQuoteModal: () => void;
}

export const PartnersScreen: React.FC<PartnersScreenProps> = ({ onOpenQuoteModal }) => {
  const [supplierName, setSupplierName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [category, setCategory] = useState('Herramientas');
  const [proposalSent, setProposalSent] = useState(false);

  const handleSupplierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = `*PROPUESTA DE MARCA / PROVEEDOR PARA D&M DISTRIBUIDORA*\n`;
    msg += `🏢 *Empresa / Representante:* ${supplierName}\n`;
    msg += `🏷️ *Marca:* ${brandName}\n`;
    msg += `📦 *Categoría:* ${category}\n\n`;
    msg += `_Deseamos presentar nuestro catálogo de fábrica para distribución mayorista en el Caribe colombiano._`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${COMPANY_PHONE}?text=${encoded}`, '_blank');
    setProposalSent(true);
  };

  return (
    <div className="w-full bg-[#f8f9ff] min-h-screen py-10">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="bg-[#001b4b] text-white rounded-2xl p-6 lg:p-10 shadow-lg relative overflow-hidden border border-[#12306b]">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ffdcc6] bg-white/10 px-3 py-1 rounded-full">
              Marcas Respaldadas & Alianzas
            </span>
            <h1 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Garantía de Fábrica Directa en Cada Referencia
            </h1>
            <p className="text-xs sm:text-sm text-[#dae2ff] leading-relaxed">
              En Distribuidora D&M nos asociamos exclusivamente con fabricantes que certifican sus procesos, cumplen las normas técnicas colombianas (RETIE, NTC) y garantizan respaldo de repuestos y soporte técnico.
            </p>
          </div>
        </div>

        {/* Brand Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALLIED_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 border border-[#dae3f4] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#001b4b] font-['Montserrat'] text-xl font-black">
                    {brand.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[11px] font-semibold text-[#fc820c] bg-[#ffdcc6]/40 px-2.5 py-1 rounded-full">
                    {brand.origin}
                  </span>
                </div>

                <h3 className="font-['Montserrat'] text-xl font-bold text-[#001b4b] mb-1">
                  {brand.name}
                </h3>
                <span className="text-xs text-[#747781] block mb-3 font-medium">
                  {brand.category}
                </span>

                <p className="text-xs text-[#444650] leading-relaxed mb-4">
                  {brand.description}
                </p>

                <div className="bg-[#f8f9ff] p-3 rounded-xl border border-[#dae3f4] space-y-1 mb-4">
                  <span className="text-[11px] font-bold text-[#001b4b] uppercase block">
                    Líneas más despachadas:
                  </span>
                  <ul className="text-xs text-[#444650] space-y-0.5">
                    {brand.topProducts.map((p, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fc820c]"></span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-[#f8f9ff] flex items-center justify-between text-xs">
                <div className="text-[11px] text-[#747781]">
                  <span className="font-semibold text-[#131c28]">Garantía:</span> {brand.warranty}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección: Distribuir tu marca con D&M */}
        <div className="bg-[#12306b] text-white rounded-2xl p-6 lg:p-10 shadow-lg border border-[#001b4b] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c]">
              Alianzas de Abastecimiento
            </span>
            <h2 className="font-['Montserrat'] text-2xl lg:text-3xl font-bold">
              ¿Eres fabricante o importador de ferretería?
            </h2>
            <p className="text-xs sm:text-sm text-[#dae2ff] leading-relaxed">
              Distribuidora D&M cuenta con flota de transporte y red comercial activa en más de 20 municipios del Cesar, Guajira, Magdalena y Bolívar. Presenta tu catálogo para abastecer nuestro centro logístico en Valledupar.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-[#ffdcc6]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Pagos puntuales
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Bodega de alta capacidad
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Distribución capilar
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white text-[#131c28] p-6 rounded-xl shadow-md border border-[#dae3f4]">
            {proposalSent ? (
              <div className="text-center py-4 space-y-2">
                <span className="material-symbols-outlined text-[40px] text-green-600">check_circle</span>
                <h4 className="font-bold text-[#001b4b]">¡Propuesta Enviada!</h4>
                <p className="text-xs text-[#444650]">
                  Tu propuesta fue canalizada hacia el WhatsApp de Gerencia de Compras. En breve te contactaremos.
                </p>
                <button
                  onClick={() => setProposalSent(false)}
                  className="mt-2 text-xs text-[#fc820c] font-bold hover:underline"
                >
                  Enviar otra propuesta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSupplierSubmit} className="space-y-3">
                <h4 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-[#001b4b]">
                  Presentar Portafolio
                </h4>
                <div>
                  <label className="block text-xs font-medium text-[#444650] mb-1">Tu Empresa o Razón Social</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Industrias Metalmecánicas SAS"
                    value={supplierName}
                    onChange={(e) => setSupplierName(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-[#f8f9ff] border border-[#c4c6d1] rounded-lg focus:outline-none focus:border-[#001b4b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#444650] mb-1">Marca(s) que representas</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Marca comercial de discos / cables"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-[#f8f9ff] border border-[#c4c6d1] rounded-lg focus:outline-none focus:border-[#001b4b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#444650] mb-1">Línea Principal</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-[#f8f9ff] border border-[#c4c6d1] rounded-lg focus:outline-none focus:border-[#001b4b]"
                  >
                    <option value="Material Eléctrico">Material Eléctrico</option>
                    <option value="Construcción y Herramientas">Construcción y Herramientas</option>
                    <option value="Accesorios Sanitarios & PVC">Accesorios Sanitarios & PVC</option>
                    <option value="Pinturas & Químicos">Pinturas & Químicos</option>
                    <option value="Cerrajería & Seguridad">Cerrajería & Seguridad</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#fc820c] hover:bg-[#964900] text-white text-xs font-bold rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Contactar Compras por WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
