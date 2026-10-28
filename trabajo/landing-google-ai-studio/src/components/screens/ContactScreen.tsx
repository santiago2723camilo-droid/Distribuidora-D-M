import React, { useState } from 'react';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_LANDLINE, COMPANY_PHONE, COMPANY_PHONE_DISPLAY, FAQS } from '../../data/mockData';

interface ContactScreenProps {
  onOpenQuoteModal: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onOpenQuoteModal }) => {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Valledupar');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `*CONTACTO WEB - DISTRIBUIDORA D&M*\n`;
    text += `👤 *Nombre:* ${name}\n`;
    if (business) text += `🏢 *Empresa / Ferretería:* ${business}\n`;
    text += `📱 *Teléfono:* ${phone}\n`;
    text += `📍 *Ciudad:* ${city}\n`;
    text += `💬 *Consulta:* ${message}\n`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_PHONE}?text=${encoded}`, '_blank');
    setIsSent(true);
  };

  return (
    <div className="w-full bg-[#f8f9ff] min-h-screen py-10">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="bg-[#001b4b] text-white rounded-2xl p-6 lg:p-10 shadow-lg relative overflow-hidden border border-[#12306b]">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c] bg-white/10 px-3 py-1 rounded-full">
              Canales de Atención Mayorista
            </span>
            <h1 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Habla Directo con tu Asesor en Valledupar
            </h1>
            <p className="text-xs sm:text-sm text-[#dae2ff] leading-relaxed">
              Atención inmediata para cotizaciones, despachos a obras, consulta de existencias o solicitudes de crédito comercial.
            </p>
          </div>
        </div>

        {/* Canales de Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#dae3f4] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#ffdcc6] text-[#fc820c] flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">chat</span>
            </div>
            <h3 className="font-['Montserrat'] text-base font-bold text-[#001b4b]">WhatsApp Asesor</h3>
            <p className="text-xs text-[#444650]">Respuesta en 15 minutos en horario hábil.</p>
            <a
              href={`https://wa.me/${COMPANY_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-bold text-[#fc820c] hover:underline"
            >
              {COMPANY_PHONE_DISPLAY} &rarr;
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#dae3f4] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#001b4b] flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">call</span>
            </div>
            <h3 className="font-['Montserrat'] text-base font-bold text-[#001b4b]">Línea Fija PBX</h3>
            <p className="text-xs text-[#444650]">Central de pedidos y facturación.</p>
            <span className="text-xs font-bold text-[#001b4b] block">{COMPANY_LANDLINE}</span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#dae3f4] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#001b4b] flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">mail</span>
            </div>
            <h3 className="font-['Montserrat'] text-base font-bold text-[#001b4b]">Correo Comercial</h3>
            <p className="text-xs text-[#444650]">Envío de licitaciones y órdenes de compra.</p>
            <span className="text-xs font-medium text-[#444650] block truncate">{COMPANY_EMAIL}</span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#dae3f4] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#001b4b] flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">location_on</span>
            </div>
            <h3 className="font-['Montserrat'] text-base font-bold text-[#001b4b]">Bodega Principal</h3>
            <p className="text-xs text-[#444650]">{COMPANY_ADDRESS}</p>
            <span className="text-[11px] text-[#747781] block">Retiros en bodega autorizados</span>
          </div>
        </div>

        {/* Formulario y Horarios */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white p-6 lg:p-8 rounded-2xl shadow-xs border border-[#dae3f4]">
            <h3 className="font-['Montserrat'] text-lg font-bold text-[#001b4b] mb-1">
              Envía tu requerimiento directo
            </h3>
            <p className="text-xs text-[#444650] mb-6">
              Te contestaremos directamente a tu WhatsApp con los precios de distribuidor aplicables.
            </p>

            {isSent ? (
              <div className="bg-[#eff4ff] p-6 rounded-xl text-center space-y-2 border border-[#dae3f4]">
                <span className="material-symbols-outlined text-[36px] text-green-600">check_circle</span>
                <h4 className="font-bold text-sm text-[#001b4b]">Mensaje listo en WhatsApp</h4>
                <p className="text-xs text-[#444650]">
                  Tu conversación se abrió con nuestro asesor comercial.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-3 text-xs text-[#fc820c] font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#444650] mb-1">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Andrés Morales"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs px-3 py-2.5 bg-[#f8f9ff] border border-[#c4c6d1] rounded-lg focus:outline-none focus:border-[#001b4b]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#444650] mb-1">Ferretería / Empresa</label>
                    <input
                      type="text"
                      placeholder="Ej: Ferretería El Carmen"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      className="w-full text-xs px-3 py-2.5 bg-[#f8f9ff] border border-[#c4c6d1] rounded-lg focus:outline-none focus:border-[#001b4b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#444650] mb-1">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: 310 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs px-3 py-2.5 bg-[#f8f9ff] border border-[#c4c6d1] rounded-lg focus:outline-none focus:border-[#001b4b]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#444650] mb-1">Ciudad o Municipio *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Valledupar, Codazzi, etc."
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full text-xs px-3 py-2.5 bg-[#f8f9ff] border border-[#c4c6d1] rounded-lg focus:outline-none focus:border-[#001b4b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#444650] mb-1">¿Qué materiales o servicios requieres? *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe los productos, cantidades o si deseas consultar condiciones de crédito..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 bg-[#f8f9ff] border border-[#c4c6d1] rounded-lg focus:outline-none focus:border-[#001b4b]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#fc820c] hover:bg-[#964900] text-white text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[19px]">chat</span>
                  <span>Contactar Asesor por WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Horarios & Ubicación Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#12306b] text-white p-6 rounded-2xl space-y-4">
              <h3 className="font-['Montserrat'] text-base font-bold text-white">
                Horarios de Operación Logística
              </h3>
              <div className="space-y-3 text-xs text-[#dae2ff]">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span>Lunes a Viernes:</span>
                  <span className="font-bold text-white">7:00 AM – 5:30 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span>Sábados:</span>
                  <span className="font-bold text-white">7:30 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span>Domingos y Festivos:</span>
                  <span className="text-[#ffdcc6]">Cerrado para bodega</span>
                </div>
              </div>
              <p className="text-[11px] text-[#b1c5ff] pt-2">
                * Para despachos de urgencia en fin de semana en obra civil, consultar con su asesor comercial previamente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#dae3f4] space-y-3">
              <h4 className="font-['Montserrat'] text-sm font-bold text-[#001b4b]">
                ¿Prefieres cotizar con listado dinámico?
              </h4>
              <p className="text-xs text-[#444650]">
                Usa nuestro cotizador interactivo para armar cantidades de cable, tubería o herramientas y calcular tu pedido exacto.
              </p>
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-2.5 bg-[#eff4ff] hover:bg-[#e0e9f9] text-[#001b4b] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                <span>Abrir Cotizador Interactivo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
