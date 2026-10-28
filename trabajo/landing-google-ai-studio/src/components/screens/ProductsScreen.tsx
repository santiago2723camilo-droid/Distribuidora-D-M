import React, { useState } from 'react';
import { CartItem, ProductItem } from '../../types';
import { PRODUCTS_CATALOG } from '../../data/mockData';

interface ProductsScreenProps {
  onAddToCart: (product: ProductItem, quantity?: number) => void;
  onOpenQuoteModal: () => void;
  cart: CartItem[];
}

export const ProductsScreen: React.FC<ProductsScreenProps> = ({
  onAddToCart,
  onOpenQuoteModal,
  cart,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'electricos' | 'construccion' | 'sanitarios'>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedProductDetails, setSelectedProductDetails] = useState<ProductItem | null>(null);
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los productos', icon: 'apps' },
    { id: 'electricos', label: 'Eléctricos', icon: 'bolt' },
    { id: 'construccion', label: 'Construcción y ferretería', icon: 'handyman' },
    { id: 'sanitarios', label: 'Accesorios sanitarios', icon: 'plumbing' },
  ];

  const brands = ['all', 'Vatio', 'Unifer', 'Total', 'Fermetal', 'JC Tools', 'Rioplast'];

  const filteredProducts = PRODUCTS_CATALOG.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesBrand = selectedBrand === 'all' || item.brand === selectedBrand;
    const query = search.toLowerCase().trim();
    const matchesSearch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.sku.toLowerCase().includes(query) ||
      item.brand.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);
    return matchesCat && matchesBrand && matchesSearch;
  });

  const handleAdd = (product: ProductItem) => {
    onAddToCart(product, 1);
    setAddedItemNotice(product.name);
    setTimeout(() => {
      setAddedItemNotice(null);
    }, 2500);
  };

  const getCartQuantity = (productId: string) => {
    const found = cart.find((i) => i.product.id === productId);
    return found ? found.quantity : 0;
  };

  return (
    <div className="w-full bg-[#f8f9ff] min-h-screen py-10">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8 space-y-8">
        {/* Header Banner */}
        <div className="bg-[#001b4b] text-white rounded-2xl p-6 lg:p-10 shadow-lg relative overflow-hidden border border-[#12306b]">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c] bg-white/10 px-3 py-1 rounded-full">
              Catálogo Mayorista 2025
            </span>
            <h1 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Líneas Industriales & Ferretería
            </h1>
            <p className="text-xs sm:text-sm text-[#dae2ff] leading-relaxed">
              Precios especiales para ferreterías, maestros de obra y constructoras. Selecciona tus materiales, añade cantidades y genera tu cotización consolidada para despacho inmediato.
            </p>
          </div>

          <div className="absolute -right-10 -bottom-10 opacity-15 pointer-events-none text-white">
            <span className="material-symbols-outlined text-[240px]">inventory</span>
          </div>
        </div>

        {/* Notificación de producto añadido */}
        {addedItemNotice && (
          <div className="fixed top-24 right-4 z-50 bg-[#001b4b] text-white px-4 py-3 rounded-xl shadow-xl border border-[#fc820c] flex items-center gap-3 animate-in fade-in slide-in-from-right duration-200">
            <span className="material-symbols-outlined text-[#fc820c]">check_circle</span>
            <div className="text-xs">
              <p className="font-bold">Agregado a cotización</p>
              <p className="text-[#dae2ff] truncate max-w-xs">{addedItemNotice}</p>
            </div>
            <button
              onClick={onOpenQuoteModal}
              className="ml-2 bg-[#fc820c] hover:bg-[#964900] text-white text-xs px-2.5 py-1 rounded font-bold cursor-pointer"
            >
              Ver
            </button>
          </div>
        )}

        {/* Filtros & Barra de Búsqueda */}
        <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#dae3f4] space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Buscador */}
            <div className="relative w-full md:w-96">
              <span className="material-symbols-outlined text-[20px] text-[#747781] absolute left-3.5 top-1/2 -translate-y-1/2">
                search
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por SKU, producto o marca (ej: THHN, PVC, Total)..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#f8f9ff] border border-[#c4c6d1] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#001b4b]"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#747781] hover:text-[#131c28]"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              )}
            </div>

            {/* Resumen & Botón cotizar */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <span className="text-xs text-[#444650]">
                Mostrando <strong className="text-[#001b4b]">{filteredProducts.length}</strong> de {PRODUCTS_CATALOG.length} productos
              </span>
              {cart.length > 0 && (
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2 bg-[#fc820c] text-white text-xs font-bold px-3.5 py-2 rounded-lg hover:bg-[#964900] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">shopping_cart</span>
                  <span>Ver cotización ({cart.length})</span>
                </button>
              )}
            </div>
          </div>

          {/* Categorías Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    active
                      ? 'bg-[#001b4b] text-white shadow-xs'
                      : 'bg-[#eff4ff] text-[#444650] hover:bg-[#dae3f4] hover:text-[#001b4b]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Filtro por Marca */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#f8f9ff] text-xs">
            <span className="text-[#747781] shrink-0 font-medium">Marca aliada:</span>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                className={`px-3 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  selectedBrand === b
                    ? 'bg-[#fc820c] text-white font-bold'
                    : 'bg-[#f8f9ff] text-[#444650] hover:bg-[#e5eeff]'
                }`}
              >
                {b === 'all' ? 'Todas las marcas' : b}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Productos */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#dae3f4] space-y-3">
            <span className="material-symbols-outlined text-[48px] text-[#747781]">search_off</span>
            <h3 className="font-['Montserrat'] text-base font-bold text-[#001b4b]">
              No encontramos referencias con ese criterio
            </h3>
            <p className="text-xs text-[#444650] max-w-md mx-auto">
              Si buscas una medida especial o producto fuera de catálogo, nuestro equipo de compras puede ubicarlo directamente en fábrica.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedCategory('all');
                setSelectedBrand('all');
              }}
              className="mt-2 text-xs font-bold text-[#fc820c] hover:underline"
            >
              Restablecer todos los filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const qtyInCart = getCartQuantity(product.id);
              return (
                <div
                  key={product.id}
                  className={`bg-white rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 border flex flex-col justify-between ${
                    product.featured ? 'border-[#fc820c]/60' : 'border-[#dae3f4]'
                  }`}
                >
                  <div>
                    {/* Header de la tarjeta */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[11px] font-bold text-[#fc820c] uppercase">
                          {product.categoryLabel}
                        </span>
                        <span className="text-[#747781] text-xs">·</span>
                        <span className="text-[11px] font-semibold text-[#001b4b] bg-[#eff4ff] px-2 py-0.5 rounded">
                          {product.brand}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#747781] bg-[#f8f9ff] px-2 py-0.5 rounded border border-[#dae3f4]">
                        {product.sku}
                      </span>
                    </div>

                    {/* Nombre */}
                    <h3 className="font-['Montserrat'] text-base font-bold text-[#001b4b] leading-snug mb-2">
                      {product.name}
                    </h3>

                    {/* Descripción */}
                    <p className="text-xs text-[#444650] leading-relaxed line-clamp-2 mb-3">
                      {product.description}
                    </p>

                    {/* Especificaciones clave */}
                    <div className="bg-[#f8f9ff] p-3 rounded-xl border border-[#dae3f4]/70 space-y-1 mb-4">
                      {product.specs.slice(0, 3).map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5 text-[11px] text-[#444650]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#fc820c]"></span>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Empaque y pedido mínimo */}
                    <div className="flex items-center justify-between text-xs py-2 border-t border-[#f8f9ff]">
                      <div>
                        <span className="text-[11px] text-[#747781] block">Presentación:</span>
                        <span className="font-semibold text-[#131c28]">{product.unit}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] text-[#747781] block">Mínimo sugerido:</span>
                        <span className="font-semibold text-[#001b4b]">{product.minOrder}</span>
                      </div>
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="mt-4 pt-3 border-t border-[#dae3f4] flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProductDetails(product)}
                      className="px-3 py-2 text-xs text-[#001b4b] bg-[#eff4ff] hover:bg-[#e0e9f9] rounded-lg font-semibold transition-colors cursor-pointer"
                      title="Ver ficha técnica completa"
                    >
                      Ficha
                    </button>

                    <button
                      onClick={() => handleAdd(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#fc820c] hover:bg-[#964900] text-white text-xs font-bold py-2 px-3 rounded-lg shadow-xs hover:shadow-sm transition-all cursor-pointer active:scale-95"
                    >
                      <span className="material-symbols-outlined text-[17px]">add_shopping_cart</span>
                      <span>
                        {qtyInCart > 0 ? `Añadir más (${qtyInCart})` : 'Añadir a cotización'}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal de Ficha Técnica */}
        {selectedProductDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#dae3f4] relative">
              <button
                onClick={() => setSelectedProductDetails(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f8f9ff] text-[#444650] hover:text-[#001b4b] flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>

              <span className="text-[11px] font-bold text-[#fc820c] uppercase">
                {selectedProductDetails.categoryLabel} · {selectedProductDetails.brand}
              </span>
              <h2 className="font-['Montserrat'] text-lg font-bold text-[#001b4b] mt-1 mb-2">
                {selectedProductDetails.name}
              </h2>
              <p className="text-xs text-[#747781] mb-4 font-mono">
                SKU Referencia: {selectedProductDetails.sku}
              </p>

              <p className="text-xs text-[#444650] leading-relaxed mb-4">
                {selectedProductDetails.description}
              </p>

              <div className="bg-[#eff4ff] p-4 rounded-xl border border-[#dae3f4] space-y-2 mb-6">
                <h4 className="font-['Montserrat'] text-xs font-bold text-[#001b4b] uppercase tracking-wider">
                  Especificaciones Técnicas
                </h4>
                <ul className="space-y-1.5 text-xs text-[#444650]">
                  {selectedProductDetails.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-[#001b4b]">check</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#001b4b]">check</span>
                    <span>Presentación estándar de despacho: {selectedProductDetails.unit}</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedProductDetails(null)}
                  className="flex-1 py-2.5 text-xs font-semibold text-[#444650] bg-[#f8f9ff] rounded-lg hover:bg-[#e5eeff]"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => {
                    handleAdd(selectedProductDetails);
                    setSelectedProductDetails(null);
                  }}
                  className="flex-1 py-2.5 text-xs font-bold text-white bg-[#fc820c] hover:bg-[#964900] rounded-lg flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                  <span>Añadir a cotización</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
