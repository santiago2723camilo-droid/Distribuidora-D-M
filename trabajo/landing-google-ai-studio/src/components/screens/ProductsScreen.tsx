import React, { useEffect, useRef, useState } from 'react';
import { CartItem, ProductItem } from '../../types';
import { PRODUCTS_CATALOG } from '../../data/mockData';

interface ProductsScreenProps {
  onAddToCart: (product: ProductItem, quantity?: number) => void;
  onOpenQuoteModal: () => void;
  cart: CartItem[];
}

type CategoryFilter = 'all' | ProductItem['category'];

const PAGE_SIZE = 10;

const categories: { id: CategoryFilter; label: string; icon: string }[] = [
  { id: 'all', label: 'Todos los productos', icon: 'apps' },
  { id: 'electricos', label: 'Eléctricos', icon: 'bolt' },
  { id: 'construccion', label: 'Construcción y ferretería', icon: 'handyman' },
  { id: 'sanitarios', label: 'Accesorios sanitarios', icon: 'plumbing' },
];

export const ProductsScreen: React.FC<ProductsScreenProps> = ({
  onAddToCart,
  onOpenQuoteModal,
  cart,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [page, setPage] = useState(1);
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);
  const noticeTimer = useRef<number | undefined>(undefined);
  const resultsRef = useRef<HTMLElement>(null);

  useEffect(() => () => window.clearTimeout(noticeTimer.current), []);

  const query = search.trim().toLocaleLowerCase('es');
  const filteredProducts = PRODUCTS_CATALOG.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesCategory && (!query || item.name.toLocaleLowerCase('es').includes(query));
  });
  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageProducts = filteredProducts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const firstVisible = filteredProducts.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0;
  const lastVisible = Math.min(currentPage * PAGE_SIZE, filteredProducts.length);

  const handleAdd = (product: ProductItem) => {
    onAddToCart(product, 1);
    setAddedItemNotice(product.name);
    window.clearTimeout(noticeTimer.current);
    noticeTimer.current = window.setTimeout(() => setAddedItemNotice(null), 2500);
  };

  const goToPage = (nextPage: number) => {
    setPage(nextPage);
    resultsRef.current?.focus({ preventScroll: true });
    resultsRef.current?.scrollIntoView({ block: 'start' });
  };

  const getCartQuantity = (productId: string) =>
    cart.find((item) => item.product.id === productId)?.quantity ?? 0;

  return (
    <div className="w-full bg-[#f8f9ff] min-h-screen py-8 lg:py-12">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8 space-y-6 sm:space-y-8">
        <section className="bg-[#001b4b] text-white rounded-2xl p-6 lg:p-10 shadow-lg border border-[#12306b]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c] bg-white/10 px-3 py-1 rounded-full">
            Catálogo de productos
          </span>
          <h1 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mt-3">
            Productos para construcción, ferretería y electricidad
          </h1>
          <p className="text-xs sm:text-sm text-[#dae2ff] leading-relaxed mt-3 max-w-3xl">
            Busca productos por nombre o categoría. Consulta precio y disponibilidad al solicitar tu cotización.
          </p>
        </section>

        {addedItemNotice && (
          <div data-dark-surface className="fixed top-24 right-4 z-50 max-w-[calc(100%-2rem)] bg-[#001b4b] text-white px-4 py-2 rounded-xl shadow-xl border border-[#fc820c] flex items-center gap-3">
            <span className="material-symbols-outlined text-[#fc820c]">check_circle</span>
            <div role="status" className="text-xs min-w-0">
              <p className="font-bold">Agregado a cotización</p>
              <p className="text-[#dae2ff] truncate max-w-xs">{addedItemNotice}</p>
            </div>
            <button type="button" onClick={onOpenQuoteModal} className="min-h-11 min-w-11 shrink-0 bg-[#fc820c] hover:bg-[#964900] text-white text-xs px-2.5 rounded-lg font-bold transition-colors">
              Ver
            </button>
          </div>
        )}

        <section className="bg-white p-5 rounded-2xl shadow-xs border border-[#dae3f4] space-y-4">
          <label className="block w-full md:max-w-lg">
            <span className="sr-only">Buscar productos</span>
            <input
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
              placeholder="Buscar producto por nombre…"
              className="w-full min-h-11 px-4 py-3 bg-[#f8f9ff] border border-[#c4c6d1] rounded-xl text-base sm:text-sm placeholder:text-[#444650] focus:border-[#001b4b]"
            />
          </label>

          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar por categoría">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                aria-pressed={selectedCategory === category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setPage(1);
                }}
                className={`min-h-11 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#001b4b] text-white'
                    : 'bg-[#eff4ff] text-[#444650] hover:bg-[#dae3f4] hover:text-[#001b4b]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-[#f8f9ff] pt-4">
            <p className="text-xs text-[#444650]" aria-live="polite">
              {filteredProducts.length
                ? `Mostrando ${firstVisible}–${lastVisible} de ${filteredProducts.length} productos`
                : 'No hay productos que coincidan con tu búsqueda'}
            </p>
            {cart.length > 0 && (
              <button onClick={onOpenQuoteModal} className="min-h-11 inline-flex items-center justify-center gap-2 bg-[#fc820c] text-white text-xs font-bold px-3.5 py-2 rounded-lg hover:bg-[#964900] transition-colors">
                <span className="material-symbols-outlined text-[16px]">shopping_cart</span>
                Ver cotización ({cart.reduce((sum, item) => sum + item.quantity, 0)})
              </button>
            )}
          </div>
        </section>

        {pageProducts.length ? (
          <>
            <section ref={resultsRef} tabIndex={-1} aria-label="Resultados del catálogo" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {pageProducts.map((product) => {
                const quantity = getCartQuantity(product.id);
                return (
                  <article key={product.id} className="bg-white rounded-2xl p-5 shadow-xs border border-[#dae3f4] flex flex-col justify-between gap-5">
                    <div>
                      <p className="text-[11px] font-bold text-[#fc820c] uppercase">{product.categoryLabel}</p>
                      <h2 className="font-['Montserrat'] text-base font-bold text-[#001b4b] leading-snug mt-2 wrap-anywhere">
                        {product.name}
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleAdd(product)}
                      className="w-full min-h-11 inline-flex items-center justify-center gap-2 bg-[#fc820c] hover:bg-[#964900] text-white text-sm font-bold py-3 px-4 rounded-lg transition-colors"
                    >
                      <span className="material-symbols-outlined text-[17px]">add_shopping_cart</span>
                      {quantity ? `Añadir más (${quantity})` : 'Añadir a cotización'}
                    </button>
                  </article>
                );
              })}
            </section>

            <nav className="flex items-center justify-center gap-2 sm:gap-4" aria-label="Paginación del catálogo">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="min-h-11 px-3 sm:px-4 py-2 rounded-lg border border-[#c4c6d1] text-sm font-semibold text-[#001b4b] hover:bg-[#e5eeff] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
              >
                Anterior
              </button>
              <span className="text-sm text-center tabular-nums text-[#444650]" aria-live="polite">
                Página {currentPage} de {pageCount}
              </span>
              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === pageCount}
                className="min-h-11 px-3 sm:px-4 py-2 rounded-lg border border-[#c4c6d1] text-sm font-semibold text-[#001b4b] hover:bg-[#e5eeff] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
              >
                Siguiente
              </button>
            </nav>
          </>
        ) : (
          <section className="bg-white rounded-2xl p-10 text-center border border-[#dae3f4] space-y-3">
            <span className="material-symbols-outlined text-[42px] text-[#747781]">search_off</span>
            <h2 className="font-['Montserrat'] text-base font-bold text-[#001b4b]">No encontramos ese producto</h2>
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setSelectedCategory('all');
                setPage(1);
              }}
              className="min-h-11 px-2 text-sm font-bold text-[#964900] hover:underline"
            >
              Ver todos los productos
            </button>
          </section>
        )}
      </div>
    </div>
  );
};
