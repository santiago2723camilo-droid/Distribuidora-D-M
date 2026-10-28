import React, { useState } from 'react';
import { CartItem, ProductItem } from '../types';
import { COMPANY_PHONE, PRODUCTS_CATALOG } from '../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onAddToCart: (product: ProductItem, quantity?: number) => void;
  onClearCart: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onAddToCart,
  onClearCart,
}) => {
  const [clientName, setClientName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('Valledupar');
  const [customCity, setCustomCity] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedQuickAdd, setSelectedQuickAdd] = useState('');

  if (!isOpen) return null;

  const destinationCity = city === 'Otro' ? (customCity || 'Región Caribe') : city;

  const handleSendWhatsApp = () => {
    let message = `*SOLICITUD DE COTIZACIÓN MAYORISTA - D&M*\n`;
    message += `👤 *Cliente:* ${clientName || 'Cliente Mayorista'}\n`;
    if (businessName) message += `🏢 *Ferretería / Obra:* ${businessName}\n`;
    message += `📍 *Destino de Entrega:* ${destinationCity}\n\n`;

    if (cart.length > 0) {
      message += `📦 *LISTADO DE MATERIALES:* \n`;
      cart.forEach((item, idx) => {
        message += `${idx + 1}. *${item.product.name}* (SKU: ${item.product.sku})\n`;
        message += `   • Cantidad: ${item.quantity} [${item.product.unit}]\n`;
        message += `   • Marca: ${item.product.brand}\n`;
      });
    } else {
      message += `📦 *Materiales solicitados:* Deseo cotizar surtido para mi negocio.\n`;
    }

    if (notes.trim()) {
      message += `\n💬 *Notas adicionales:* ${notes.trim()}\n`;
    }

    message += `\n_Enviado desde el cotizador web de Distribuidora D&M._`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY_PHONE}?text=${encoded}`, '_blank');
  };

  const handleQuickAdd = (productId: string) => {
    const prod = PRODUCTS_CATALOG.find((p) => p.id === productId);
    if (prod) {
      onAddToCart(prod, 1);
      setSelectedQuickAdd('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#dae3f4] overflow-hidden">
        {/* Header */}
        <div className="p-5 bg-[#001b4b] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fc820c] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[22px]">shopping_cart_checkout</span>
            </div>
            <div>
              <h2 className="font-['Montserrat'] text-lg font-bold">Cotizador de Pedido Mayorista</h2>
              <p className="text-xs text-[#b1c5ff]">Genera tu listado y cotiza al instante por WhatsApp</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-[#131c28]">
          {/* Datos del Cliente */}
          <div className="bg-[#eff4ff] p-4 rounded-xl border border-[#dae3f4] space-y-3">
            <h3 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-[#001b4b]">
              1. Datos de tu Negocio / Obra
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#444650] mb-1">Nombre o Contacto</label>
                <input
                  type="text"
                  placeholder="Ej: Mario Gómez"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-[#c4c6d1] rounded-lg focus:outline-none focus:border-[#001b4b]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#444650] mb-1">Nombre de Ferretería / Obra</label>
                <input
                  type="text"
                  placeholder="Ej: Ferretería El Puerto"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-[#c4c6d1] rounded-lg focus:outline-none focus:border-[#001b4b]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#444650] mb-1">Municipio / Destino</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-[#c4c6d1] rounded-lg focus:outline-none focus:border-[#001b4b]"
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
                    placeholder="Escribe tu municipio"
                    value={customCity}
                    onChange={(e) => setCustomCity(e.target.value)}
                    className="mt-2 w-full text-xs px-3 py-1.5 bg-white border border-[#c4c6d1] rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Listado de Productos en Cotización */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-[#001b4b]">
                2. Materiales en tu Cotización ({cart.length})
              </h3>
              {cart.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-[#ba1a1a] hover:underline cursor-pointer"
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
                  Puedes agregar referencias del catálogo rápido abajo, o enviar tu mensaje directo por WhatsApp indicando qué necesitas.
                </p>
              </div>
            ) : (
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3 bg-white rounded-xl border border-[#dae3f4] flex items-center justify-between gap-3 shadow-xs hover:border-[#12306b]/40 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#001b4b] truncate">{item.product.name}</p>
                      <p className="text-[11px] text-[#747781]">
                        SKU: {item.product.sku} · Marca: {item.product.brand} · Pres.: {item.product.unit}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="flex items-center border border-[#c4c6d1] rounded-lg overflow-hidden bg-[#f8f9ff]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="w-7 h-7 flex items-center justify-center text-[#131c28] hover:bg-[#e5eeff] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#131c28] hover:bg-[#e5eeff] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[#ba1a1a] hover:bg-[#ffdad6] p-1 rounded-md cursor-pointer"
                        title="Eliminar de la lista"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quick-Add dropdown from catalog */}
            <div className="pt-2 flex items-center gap-2">
              <select
                value={selectedQuickAdd}
                onChange={(e) => {
                  setSelectedQuickAdd(e.target.value);
                  if (e.target.value) handleQuickAdd(e.target.value);
                }}
                className="flex-1 text-xs px-3 py-2 bg-[#f8f9ff] border border-[#c4c6d1] rounded-lg text-[#131c28] cursor-pointer"
              >
                <option value="">+ Agregar material frecuente del catálogo...</option>
                {PRODUCTS_CATALOG.map((p) => (
                  <option key={p.id} value={p.id}>
                    [{p.categoryLabel}] {p.name} - {p.unit}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Notas o requerimientos especiales */}
          <div>
            <label className="block text-xs font-medium text-[#444650] mb-1">
              3. Notas o referencias adicionales que no ves en el listado
            </label>
            <textarea
              rows={2}
              placeholder="Ej: Requiero también 5 bultos de yeso, cotización con flete puesto en obra..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full text-xs px-3 py-2 bg-white border border-[#c4c6d1] rounded-lg focus:outline-none focus:border-[#001b4b]"
            ></textarea>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#f8f9ff] border-t border-[#dae3f4] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#747781] text-center sm:text-left">
            <span className="font-semibold text-[#001b4b]">Respuesta en 15 minutos:</span> Asesor comercial directo en Valledupar.
          </p>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-[#444650] hover:bg-[#e5eeff] rounded-lg transition-colors cursor-pointer"
            >
              Seguir explorando
            </button>
            <button
              onClick={handleSendWhatsApp}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#fc820c] hover:bg-[#964900] text-white font-['Inter'] text-sm font-bold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Enviar a WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
