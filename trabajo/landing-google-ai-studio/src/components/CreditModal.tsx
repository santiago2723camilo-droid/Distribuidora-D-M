import React, { useState } from 'react';
import { COMPANY_PHONE } from '../data/mockData';

interface CreditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreditModal: React.FC<CreditModalProps> = ({ isOpen, onClose }) => {
  const [hardwareName, setHardwareName] = useState('');
  const [city, setCity] = useState('Valledupar');
  const [yearsOperating, setYearsOperating] = useState('1-3 años');
  const [monthlyVolume, setMonthlyVolume] = useState('15000000'); // 15 million COP

  if (!isOpen) return null;

  // Simple simulated credit quota: ~35% of monthly purchase volume
  const numVolume = parseInt(monthlyVolume, 10) || 10000000;
  const simulatedQuota = Math.round((numVolume * 0.4) / 1000000) * 1000000;

  const handleRequestCredit = () => {
    let msg = `*SOLICITUD DE CRÉDITO COMERCIAL - D&M DISTRIBUIDORA*\n`;
    msg += `🏢 *Ferretería / Negocio:* ${hardwareName || 'Ferretería en el Caribe'}\n`;
    msg += `📍 *Ciudad / Municipio:* ${city}\n`;
    msg += `⏳ *Tiempo de operación:* ${yearsOperating}\n`;
    msg += `💰 *Compra mensual estimada:* $${numVolume.toLocaleString('es-CO')} COP\n`;
    msg += `📊 *Cupo estimado de interés:* $${simulatedQuota.toLocaleString('es-CO')} COP (Plazo 30 a 45 días)\n\n`;
    msg += `_Deseo conocer los requisitos y el formato de vinculación comercial._`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${COMPANY_PHONE}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#dae3f4] overflow-hidden text-[#131c28]">
        {/* Header */}
        <div className="p-5 bg-[#12306b] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fc820c] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[22px]">payments</span>
            </div>
            <div>
              <h2 className="font-['Montserrat'] text-lg font-bold">Línea de Crédito para Ferreterías</h2>
              <p className="text-xs text-[#b1c5ff]">Financiación directa a 30 y 45 días en el Caribe</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {/* Key Advantages */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-[#eff4ff] rounded-xl border border-[#dae3f4]">
              <span className="font-['Montserrat'] text-lg font-bold text-[#001b4b] block">30 - 45</span>
              <span className="text-[11px] text-[#444650]">Días de plazo</span>
            </div>
            <div className="p-3 bg-[#eff4ff] rounded-xl border border-[#dae3f4]">
              <span className="font-['Montserrat'] text-lg font-bold text-[#fc820c] block">0% Interés</span>
              <span className="text-[11px] text-[#444650]">En plazo pactado</span>
            </div>
            <div className="p-3 bg-[#eff4ff] rounded-xl border border-[#dae3f4]">
              <span className="font-['Montserrat'] text-lg font-bold text-[#001b4b] block">24 - 48h</span>
              <span className="text-[11px] text-[#444650]">Aprobación ágil</span>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-3 bg-[#f8f9ff] p-4 rounded-xl border border-[#dae3f4]">
            <h3 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-[#001b4b]">
              Simula tu cupo comercial
            </h3>

            <div>
              <label className="block text-xs font-medium text-[#444650] mb-1">Nombre de la Ferretería o Razón Social</label>
              <input
                type="text"
                placeholder="Ej: Ferretería Central del Cesar"
                value={hardwareName}
                onChange={(e) => setHardwareName(e.target.value)}
                className="w-full text-xs px-3 py-2 bg-white border border-[#c4c6d1] rounded-lg focus:outline-none focus:border-[#001b4b]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#444650] mb-1">Municipio</label>
                <input
                  type="text"
                  placeholder="Valledupar, Codazzi, etc."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-[#c4c6d1] rounded-lg"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#444650] mb-1">Años de funcionamiento</label>
                <select
                  value={yearsOperating}
                  onChange={(e) => setYearsOperating(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-[#c4c6d1] rounded-lg"
                >
                  <option value="Menos de 1 año">Menos de 1 año</option>
                  <option value="1 a 3 años">1 a 3 años</option>
                  <option value="Más de 3 años">Más de 3 años</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#444650] mb-1">
                Estimado de compras mensuales en materiales:
                <span className="font-bold text-[#001b4b] ml-1">
                  ${parseInt(monthlyVolume, 10).toLocaleString('es-CO')} COP
                </span>
              </label>
              <input
                type="range"
                min="5000000"
                max="50000000"
                step="2500000"
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(e.target.value)}
                className="w-full accent-[#fc820c] cursor-pointer"
              />
            </div>

            {/* Resultado Simulado */}
            <div className="mt-3 p-3 bg-[#e5eeff] rounded-lg flex items-center justify-between border border-[#819adb]/30">
              <div>
                <span className="text-[11px] text-[#444650] block">Cupo de crédito estimado:</span>
                <span className="font-['Montserrat'] text-base font-extrabold text-[#001b4b]">
                  ${simulatedQuota.toLocaleString('es-CO')} COP
                </span>
              </div>
              <span className="text-[11px] bg-white px-2 py-1 rounded text-[#001b4b] font-bold">
                Rotación 30 días
              </span>
            </div>
          </div>

          {/* Requisitos */}
          <div className="text-xs text-[#444650] space-y-1">
            <p className="font-bold text-[#001b4b]">Requisitos mínimos para apertura:</p>
            <ul className="list-disc pl-4 space-y-0.5">
              <li>RUT actualizado y Certificado de Cámara de Comercio (si aplica).</li>
              <li>Copia de cédula del propietario o representante legal.</li>
              <li>Dos referencias comerciales de distribuidores ferreteros.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f8f9ff] border-t border-[#dae3f4] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#444650] hover:bg-[#e5eeff] rounded-lg cursor-pointer"
          >
            Cerrar
          </button>
          <button
            onClick={handleRequestCredit}
            className="inline-flex items-center gap-2 bg-[#fc820c] hover:bg-[#964900] text-white font-['Inter'] text-sm font-bold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Solicitar Requisitos por WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
