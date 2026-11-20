import React, { useState } from 'react';
import { COMPANY_PHONE } from '../data/mockData';

interface CreditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreditModal: React.FC<CreditModalProps> = ({ isOpen, onClose }) => {
  const [question, setQuestion] = useState('');

  if (!isOpen) return null;

  const questionText = question.trim();
  const message = encodeURIComponent([
    'Hola, quiero consultar las condiciones vigentes para una solicitud de crédito comercial.',
    questionText ? `Mi consulta es: ${questionText}` : '',
  ].filter(Boolean).join('\n\n'));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="credit-modal-title"
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-[#dae3f4] overflow-hidden text-[#131c28]"
      >
        <div className="p-5 bg-[#12306b] text-white flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fc820c] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">payments</span>
            </div>
            <h2 id="credit-modal-title" className="font-['Montserrat'] text-lg font-bold">
              Consulta sobre crédito
            </h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Cerrar" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-[#444650] leading-relaxed">
            Las condiciones de crédito pueden cambiar. Comunícate por WhatsApp para consultar la información vigente.
          </p>
          <p className="text-xs text-[#747781]">
            Esta página no calcula cupos ni confirma plazos o aprobaciones.
          </p>
          <div>
            <label htmlFor="credit-question" className="block text-xs font-medium text-[#444650] mb-1">
              ¿Qué deseas consultar? <span className="text-[#747781]">(opcional)</span>
            </label>
            <textarea
              id="credit-question"
              rows={3}
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Escribe tu pregunta sobre las condiciones vigentes."
              className="w-full resize-y text-sm px-3 py-2 bg-white border border-[#c4c6d1] rounded-lg focus:outline-none focus:border-[#001b4b]"
            />
          </div>
          <p className="text-xs text-[#747781]">
            WhatsApp abrirá el mensaje para que lo revises y lo envíes.
          </p>
        </div>

        <div className="p-4 bg-[#f8f9ff] border-t border-[#dae3f4] flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
          <button type="button" onClick={onClose} className="w-full sm:w-auto px-4 py-2 text-sm font-semibold text-[#444650] hover:bg-[#e5eeff] rounded-lg">
            Cerrar
          </button>
          <a
            href={`https://wa.me/${COMPANY_PHONE}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#fc820c] hover:bg-[#964900] text-white text-sm font-bold px-5 py-2.5 rounded-lg"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            Abrir WhatsApp para consultar
          </a>
        </div>
      </section>
    </div>
  );
};
