import React, { useState } from 'react';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_PHONE_DISPLAY } from '../../data/mockData';
import { PrivacyAuthorization, privacyPreview, privacyPreviewFeedback, usePrivacyAuthorization } from '../PrivacyAuthorization';

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
  const authorization = usePrivacyAuthorization();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorization.validate()) return;
    setIsSent(true);
    if (privacyPreview) return;

    let text = `*CONTACTO WEB - DISTRIBUIDORA D&M*\n`;
    text += `👤 *Nombre:* ${name}\n`;
    if (business) text += `🏢 *Empresa / Ferretería:* ${business}\n`;
    text += `📱 *Teléfono:* ${phone}\n`;
    text += `📍 *Ciudad:* ${city}\n`;
    text += `💬 *Consulta:* ${message}\n`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_PHONE}?text=${encoded}`, '_blank');
  };

  return (
    <div className="w-full bg-[#f8f9ff] min-h-screen py-8 lg:py-12">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8 space-y-6 sm:space-y-8">
        {/* Banner */}
        <div className="bg-[#001b4b] text-white rounded-2xl p-6 lg:p-10 shadow-lg relative overflow-hidden border border-[#12306b]">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-dym-gold bg-white/10 px-3 py-1 rounded-xl">
              Canales de Atención Mayorista
            </span>
            <h1 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Habla Directo con tu Asesor en Valledupar
            </h1>
            <p className="text-xs sm:text-sm text-[#dae2ff] leading-relaxed">
              Comunícate con nosotros para consultas y cotizaciones.
            </p>
          </div>
        </div>

        {/* Canales de Contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#dae3f4] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-dym-aqua-soft text-dym-blue flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">chat</span>
            </div>
            <h3 className="font-['Montserrat'] text-base font-bold text-[#001b4b]">WhatsApp Asesor</h3>
            <p className="text-xs text-[#444650]">Escríbenos por WhatsApp para consultas o cotizaciones.</p>
            <a
              href={`https://wa.me/${COMPANY_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm font-bold text-dym-blue hover:underline"
            >
              {COMPANY_PHONE_DISPLAY} &rarr;
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#dae3f4] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#001b4b] flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">mail</span>
            </div>
            <h3 className="font-['Montserrat'] text-base font-bold text-[#001b4b]">Correo Comercial</h3>
            <p className="text-xs text-[#444650]">Envíanos tus consultas por correo.</p>
            <a href={`mailto:${COMPANY_EMAIL}`} className="flex min-h-11 items-center text-sm font-medium text-[#444650] wrap-anywhere hover:underline">{COMPANY_EMAIL}</a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xs border border-[#dae3f4] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#001b4b] flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">location_on</span>
            </div>
            <h3 className="font-['Montserrat'] text-base font-bold text-[#001b4b]">Dirección</h3>
            <p className="text-xs text-[#444650]">{COMPANY_ADDRESS}</p>
          </div>
        </div>

        {/* Formulario y Horarios */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-4 lg:gap-6">
          <div className="lg:col-span-7 bg-white p-6 lg:p-8 rounded-2xl shadow-xs border border-[#dae3f4]">
            <h3 className="font-['Montserrat'] text-lg font-bold text-[#001b4b] mb-1">
              Envía tu requerimiento directo
            </h3>
            <p className="text-xs text-[#444650] mb-6">
              El formulario prepara un mensaje para que lo revises y lo envíes por WhatsApp.
            </p>

            {isSent ? (
              <div role="status" className="bg-[#eff4ff] p-6 rounded-xl text-center space-y-2 border border-[#dae3f4]">
                <span className="material-symbols-outlined text-[36px] text-green-600">check_circle</span>
                <h4 className="font-bold text-sm text-[#001b4b]">{privacyPreview ? 'Confirmación de prueba' : 'Mensaje listo en WhatsApp'}</h4>
                <p className="text-xs text-[#444650]">
                  {privacyPreview ? privacyPreviewFeedback : 'WhatsApp se abrió con el mensaje preparado para que lo revises antes de enviarlo.'}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="mt-3 min-h-11 px-2 text-sm text-dym-blue font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-[#444650] mb-1">Nombre Completo *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Ej: Andrés Morales"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full min-h-11 text-base sm:text-sm px-3 py-3 bg-[#f8f9ff] border border-[#c4c6d1] rounded-lg placeholder:text-[#444650] focus:border-[#001b4b]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-business" className="block text-xs font-medium text-[#444650] mb-1">Ferretería / Empresa</label>
                    <input
                      id="contact-business"
                      type="text"
                      autoComplete="organization"
                      placeholder="Ej: Ferretería El Carmen"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      className="w-full min-h-11 text-base sm:text-sm px-3 py-3 bg-[#f8f9ff] border border-[#c4c6d1] rounded-lg placeholder:text-[#444650] focus:border-[#001b4b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-medium text-[#444650] mb-1">Teléfono / WhatsApp *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="Ej: 310 123 4567"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full min-h-11 text-base sm:text-sm px-3 py-3 bg-[#f8f9ff] border border-[#c4c6d1] rounded-lg placeholder:text-[#444650] focus:border-[#001b4b]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-city" className="block text-xs font-medium text-[#444650] mb-1">Ciudad o Municipio *</label>
                    <input
                      id="contact-city"
                      type="text"
                      required
                      placeholder="Ej: Valledupar, Codazzi, etc."
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full min-h-11 text-base sm:text-sm px-3 py-3 bg-[#f8f9ff] border border-[#c4c6d1] rounded-lg placeholder:text-[#444650] focus:border-[#001b4b]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-[#444650] mb-1">¿Qué materiales o servicios requieres? *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe los productos, cantidades o si deseas consultar condiciones de crédito..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-base sm:text-sm px-3 py-3 bg-[#f8f9ff] border border-[#c4c6d1] rounded-lg placeholder:text-[#444650] focus:border-[#001b4b]"
                  ></textarea>
                </div>

                <PrivacyAuthorization inputRef={authorization.inputRef} purpose="responder tu consulta" />

                <button
                  type="submit"
                  className="w-full min-h-11 px-3 py-3 bg-dym-gold hover:bg-dym-gold-hover text-[#001b4b] text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[19px]">chat</span>
                  <span>Contactar Asesor por WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Información comercial */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#dae3f4] space-y-3">
              <h4 className="font-['Montserrat'] text-sm font-bold text-[#001b4b]">
                ¿Quieres cotizar productos del catálogo?
              </h4>
              <p className="text-xs text-[#444650]">
                Añade los productos que necesitas y prepara tu solicitud de cotización.
              </p>
              <button
                onClick={onOpenQuoteModal}
                className="w-full min-h-11 py-2.5 bg-[#eff4ff] hover:bg-[#e0e9f9] text-[#001b4b] text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                <span>Abrir cotizador</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
