import React, { useRef, useState } from 'react';
import { CartItem, MAX_ITEM_QUANTITY } from '../types';
import { COMPANY_PHONE } from '../data/mockData';
import { ModalDialog } from './ModalDialog';
import { PrivacyAuthorization, privacyPreview, privacyPreviewFeedback, usePrivacyAuthorization } from './PrivacyAuthorization';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBrowseProducts: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  onBrowseProducts,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [clientName, setClientName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('Valledupar');
  const [customCity, setCustomCity] = useState('');
  const [notes, setNotes] = useState('');
  const [isQuotePrepared, setIsQuotePrepared] = useState(false);
  const materialsHeadingRef = useRef<HTMLHeadingElement>(null);
  const authorization = usePrivacyAuthorization();

  const destinationCity = city === 'Otro' ? (customCity.trim() || 'Región Caribe') : city;

  const handleClose = () => {
    authorization.reset();
    setIsQuotePrepared(false);
    onClose();
  };

  const handleSendWhatsApp = () => {
    if (!authorization.validate()) return;
    setIsQuotePrepared(true);
    if (privacyPreview) return;

    let message = `*SOLICITUD DE COTIZACIÓN MAYORISTA - D&M*\n`;
    message += `👤 *Cliente:* ${clientName.trim() || 'Cliente Mayorista'}\n`;
    if (businessName.trim()) message += `🏢 *Ferretería / Obra:* ${businessName.trim()}\n`;
    message += `📍 *Destino de Entrega:* ${destinationCity}\n\n`;

    if (cart.length > 0) {
      message += `📦 *LISTADO DE MATERIALES:* \n`;
      cart.forEach((item, idx) => {
        message += `${idx + 1}. *${item.product.name}*\n`;
        message += `   • Cantidad: ${item.quantity}\n`;
      });
    } else {
      message += `📦 *Materiales solicitados:* Deseo cotizar surtido para mi negocio.\n`;
    }

    if (notes.trim()) {
      message += `\n💬 *Notas adicionales:* ${notes.trim()}\n`;
    }

    message += `\n_Enviado desde el cotizador web de Distribuidora D&M._`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY_PHONE}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <ModalDialog isOpen={isOpen} onClose={handleClose} titleId="quote-modal-title" className="max-w-2xl">
        {/* Header */}
        <div data-dark-surface className="shrink-0 p-4 sm:p-5 bg-linear-to-br from-[#001b4b] to-dym-blue text-white flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex w-10 h-10 shrink-0 rounded-xl bg-dym-gold items-center justify-center text-[#001b4b]">
              <span className="material-symbols-outlined text-[22px]">shopping_cart_checkout</span>
            </div>
            <div>
              <h2 id="quote-modal-title" className="font-['Montserrat'] text-base sm:text-lg leading-snug font-bold">Cotizador de Pedido Mayorista</h2>
              <p className="text-xs text-[#b1c5ff]">Genera tu listado y cotiza al instante por WhatsApp</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Cerrar cotizador"
            className="min-w-11 min-h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="site-dialog-body min-h-0 p-4 sm:p-6 overflow-y-auto overscroll-contain space-y-5">
          {/* Datos del Cliente */}
          <div className="bg-dym-aqua-soft p-4 rounded-xl border border-dym-aqua-light space-y-3">
            <h3 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-[#001b4b]">
              1. Datos de tu Negocio / Obra
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="min-w-0">
                <label htmlFor="quote-client-name" className="block text-xs font-medium text-[#444650] mb-1">Nombre o Contacto</label>
                <input
                  id="quote-client-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Ej: Mario Gómez"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full min-h-11 text-base sm:text-sm px-3 py-2.5 bg-white border border-[#c4c6d1] rounded-lg placeholder:text-[#444650] focus:border-[#001b4b]"
                />
              </div>
              <div className="min-w-0">
                <label htmlFor="quote-business-name" className="block text-xs font-medium text-[#444650] mb-1">Nombre de Ferretería / Obra</label>
                <input
                  id="quote-business-name"
                  type="text"
                  autoComplete="organization"
                  placeholder="Ej: Ferretería El Puerto"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full min-h-11 text-base sm:text-sm px-3 py-2.5 bg-white border border-[#c4c6d1] rounded-lg placeholder:text-[#444650] focus:border-[#001b4b]"
                />
              </div>
              <div className="min-w-0">
                <label htmlFor="quote-city" className="block text-xs font-medium text-[#444650] mb-1">Municipio / Destino</label>
                <select
                  id="quote-city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full min-h-11 text-base sm:text-sm px-3 py-2.5 bg-white border border-[#c4c6d1] rounded-lg focus:border-[#001b4b]"
                >
                  <option value="Valledupar">Valledupar (Cesar)</option>
                  <option value="Codazzi">Agustín Codazzi</option>
                  <option value="La Paz">La Paz (Robles)</option>
                  <option value="Bosconia">Bosconia</option>
                  <option value="San Diego">San Diego</option>
                  <option value="Aguachica">Aguachica</option>
                  <option value="San Juan del Cesar">San Juan del Cesar (Guajira)</option>
                  <option value="Riohacha">Riohacha (Guajira)</option>
                  <option value="Santa Marta">Santa Marta (Magdalena)</option>
                  <option value="Otro">Otro municipio</option>
                </select>
                {city === 'Otro' && (
                  <input
                    type="text"
                    aria-label="Otro municipio"
                    placeholder="Escribe tu municipio"
                    value={customCity}
                    onChange={(e) => setCustomCity(e.target.value)}
                    className="mt-2 w-full min-h-11 text-base sm:text-sm px-3 py-2.5 bg-white border border-[#c4c6d1] rounded-lg placeholder:text-[#444650]"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Listado de Productos en Cotización */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h3 ref={materialsHeadingRef} tabIndex={-1} className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-[#001b4b]">
                2. Materiales en tu Cotización ({cart.length})
              </h3>
              {cart.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    materialsHeadingRef.current?.focus();
                    onClearCart();
                  }}
                  className="min-h-11 shrink-0 px-2 text-xs text-[#ba1a1a] hover:underline cursor-pointer"
                >
                  Vaciar lista
                </button>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="border border-dashed border-[#c4c6d1] rounded-xl p-6 text-center text-sm text-[#444650] bg-[#f8f9ff]">
                <span className="material-symbols-outlined text-[36px] text-[#747781] mb-2 block">
                  remove_shopping_cart
                </span>
                <p className="font-semibold text-[#131c28]">Aún no has agregado materiales específicos</p>
                <p className="text-xs text-[#747781] mt-1">
                  Elige productos del catálogo o escribe en las notas qué necesitas cotizar.
                </p>
              </div>
            ) : (
              <ul className="space-y-2">
                {cart.map((item) => (
                  <li
                    key={item.product.id}
                    className="p-3 bg-white rounded-xl border border-[#dae3f4] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 shadow-xs hover:border-[#12306b]/40 transition-colors"
                  >
                    <div className="w-full sm:flex-1 min-w-0">
                      <p className="text-sm font-bold text-[#001b4b] wrap-anywhere">{item.product.name}</p>
                      <p className="text-[11px] text-[#747781]">{item.product.categoryLabel}</p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-start gap-2 flex-shrink-0">
                      <div className="flex items-center border border-[#c4c6d1] rounded-lg bg-[#f8f9ff]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          type="button"
                          aria-label={`Reducir ${item.product.name}`}
                          disabled={item.quantity <= 1}
                          className="w-11 h-11 rounded-l-lg flex items-center justify-center text-[#131c28] enabled:hover:bg-[#e5eeff] enabled:cursor-pointer disabled:opacity-40"
                        >
                          -
                        </button>
                        <input
                          key={item.quantity}
                          type="number"
                          min={1}
                          max={MAX_ITEM_QUANTITY}
                          step={1}
                          inputMode="numeric"
                          enterKeyHint="done"
                          required
                          defaultValue={item.quantity}
                          aria-label={`Cantidad de ${item.product.name}`}
                          onBlur={(event) => {
                            const input = event.currentTarget;
                            if (!input.validity.valid) {
                              input.value = String(item.quantity);
                            } else if (input.valueAsNumber !== item.quantity) {
                              onUpdateQuantity(item.product.id, input.valueAsNumber);
                            }
                          }}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                              event.preventDefault();
                              if (event.currentTarget.reportValidity()) event.currentTarget.blur();
                            }
                          }}
                          className="h-11 w-22 border-x border-[#c4c6d1] bg-white px-1 text-center text-base font-bold tabular-nums [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          type="button"
                          aria-label={`Aumentar ${item.product.name}`}
                          disabled={item.quantity >= MAX_ITEM_QUANTITY}
                          className="w-11 h-11 rounded-r-lg flex items-center justify-center text-[#131c28] enabled:hover:bg-[#e5eeff] enabled:cursor-pointer disabled:opacity-40"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={(event) => {
                          if (cart.length === 1 || event.detail === 0) materialsHeadingRef.current?.focus();
                          onRemoveItem(item.product.id);
                        }}
                        type="button"
                        aria-label={`Eliminar ${item.product.name}`}
                        className="min-w-11 min-h-11 flex items-center justify-center text-[#ba1a1a] hover:bg-[#ffdad6] p-1 rounded-md cursor-pointer"
                        title="Eliminar de la lista"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

          </div>

          {/* Notas o requerimientos especiales */}
          <div>
            <label htmlFor="quote-notes" className="block text-xs font-medium text-[#444650] mb-1">
              3. Notas o productos que no aparecen en el catálogo
            </label>
            <textarea
              id="quote-notes"
              rows={2}
              placeholder="Ej: Requiero también 5 bultos de yeso, cotización con flete puesto en obra..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full text-base sm:text-sm px-3 py-2.5 bg-white border border-[#c4c6d1] rounded-lg placeholder:text-[#444650] focus:border-[#001b4b]"
            ></textarea>
          </div>
          <PrivacyAuthorization inputRef={authorization.inputRef} purpose="responder tu solicitud de cotización" />
        </div>

        {/* Footer Actions */}
        <div className="shrink-0 px-4 py-3 sm:p-4 bg-[#f8f9ff] border-t border-[#dae3f4] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-2 lg:gap-3">
          <p role="status" className="w-full lg:flex-1 text-xs text-[#747781] text-center lg:text-left">
            {isQuotePrepared ? (
              <span className="quote-feedback-enter inline-block font-semibold text-[#001b4b]">
                {privacyPreview ? privacyPreviewFeedback : 'Borrador preparado. Revísalo en WhatsApp antes de enviarlo.'}
              </span>
            ) : 'Tu solicitud se abrirá en WhatsApp para que la revises y la envíes.'}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch gap-2 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => {
                handleClose();
                onBrowseProducts();
              }}
              className="min-w-0 min-h-11 flex-1 lg:flex-none inline-flex items-center justify-center gap-2 rounded-lg border border-[#b1c5ff] bg-white px-4 py-2 text-sm font-bold text-[#001b4b] transition-colors hover:bg-[#e5eeff]"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[18px]">inventory_2</span>
              Ver productos
            </button>
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="min-w-0 min-h-11 flex-1 lg:flex-none inline-flex items-center justify-center gap-2 rounded-lg bg-dym-gold px-4 py-2.5 text-sm font-bold text-[#001b4b] transition-colors hover:bg-dym-gold-hover"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Enviar a WhatsApp</span>
            </button>
          </div>
        </div>
    </ModalDialog>
  );
};
