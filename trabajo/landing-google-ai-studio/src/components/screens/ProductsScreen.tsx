import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CartItem, MAX_ITEM_QUANTITY, ProductItem } from '../../types';
import { PRODUCT_CATEGORIES, PRODUCTS_CATALOG } from '../../data/mockData';

interface ProductsScreenProps {
  initialCategory: CategoryFilter;
  onAddToCart: (product: ProductItem, quantity?: number) => void;
  onOpenQuoteModal: () => void;
  cart: CartItem[];
}

type CategoryFilter = 'all' | ProductItem['category'];

const PAGE_SIZE = 10;
const numberFormat = new Intl.NumberFormat('es-CO');

const normalizeSearch = (value: string) =>
  value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().replace(/\s+/g, ' ');

const searchableProducts = PRODUCTS_CATALOG.map((product) => ({
  product,
  searchableName: normalizeSearch(product.name),
}));

const categories: { id: CategoryFilter; label: string; icon: string }[] = [
  { id: 'all', label: 'Todos los productos', icon: 'apps' },
  ...PRODUCT_CATEGORIES,
];

export const ProductsScreen: React.FC<ProductsScreenProps> = ({
  initialCategory,
  onAddToCart,
  onOpenQuoteModal,
  cart,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(initialCategory);
  const [page, setPage] = useState(1);
  const [pageTurn, setPageTurn] = useState(0);
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);
  const noticeTimer = useRef<number | undefined>(undefined);
  const resultsRef = useRef<HTMLElement>(null);
  const searchSectionRef = useRef<HTMLElement>(null);

  useEffect(() => () => window.clearTimeout(noticeTimer.current), []);

  const query = normalizeSearch(search);
  const filteredProducts = useMemo(() => searchableProducts
    .filter(({ product, searchableName }) =>
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      searchableName.includes(query))
    .map(({ product }) => product), [query, selectedCategory]);
  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageProducts = filteredProducts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const firstVisible = filteredProducts.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0;
  const lastVisible = Math.min(currentPage * PAGE_SIZE, filteredProducts.length);

  const handleAdd = (event: React.FormEvent<HTMLFormElement>, product: ProductItem) => {
    event.preventDefault();
    const form = event.currentTarget;
    const quantity = Number(new FormData(form).get('quantity'));
    if (!Number.isInteger(quantity) || quantity < 1 || quantity + getCartQuantity(product.id) > MAX_ITEM_QUANTITY) return;

    onAddToCart(product, quantity);
    form.reset();
    setAddedItemNotice(`${numberFormat.format(quantity)} × ${product.name}`);
    window.clearTimeout(noticeTimer.current);
    noticeTimer.current = window.setTimeout(() => setAddedItemNotice(null), 2500);
  };

  const goToPage = (nextPage: number) => {
    if (nextPage !== currentPage) setPageTurn((turn) => turn + 1);
    setPage(nextPage);
    resultsRef.current?.focus({ preventScroll: true });
    resultsRef.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
  };

  const handlePageJump = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = Number(new FormData(event.currentTarget).get('page'));
    if (Number.isInteger(target) && target >= 1 && target <= pageCount) {
      goToPage(target);
    }
  };

  const getCartQuantity = (productId: string) =>
    cart.find((item) => item.product.id === productId)?.quantity ?? 0;

  return (
    <div className="w-full bg-[#f8f9ff] min-h-screen py-8 lg:py-12">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <section data-dark-surface className="bg-[#001b4b] text-white rounded-2xl p-6 lg:p-10 border border-[#12306b]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#fc820c] bg-white/10 px-3 py-1 rounded-full">
            Catálogo de productos
          </span>
          <h1 id="catalog-title" tabIndex={-1} className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mt-3">
            Productos para construcción, ferretería y electricidad
          </h1>
          <p className="text-xs sm:text-sm text-[#dae2ff] leading-relaxed mt-3 max-w-3xl">
            Busca productos por nombre o categoría. Consulta precio y disponibilidad al solicitar tu cotización.
          </p>
        </section>

        {addedItemNotice && (
          <div data-dark-surface className="fixed top-24 right-4 z-50 max-w-[calc(100%-2rem)] pointer-events-none bg-[#001b4b] text-white px-4 py-2 rounded-xl shadow-xl border border-[#fc820c] flex items-center gap-3">
            <span aria-hidden="true" className="material-symbols-outlined text-[#fc820c]">check_circle</span>
            <div role="status" className="text-xs min-w-0">
              <p className="font-bold">Agregado a cotización</p>
              <p className="text-[#dae2ff] truncate max-w-xs">{addedItemNotice}</p>
            </div>
          </div>
        )}

        <section ref={searchSectionRef} tabIndex={-1} aria-label="Búsqueda y filtros" className="scroll-mt-24 bg-white p-5 rounded-2xl shadow-xs border border-[#dae3f4] space-y-4">
          <label className="block w-full md:max-w-lg">
            <span className="sr-only">Buscar productos</span>
            <input
              type="search"
              enterKeyHint="search"
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
                className={`min-h-11 max-w-full inline-flex items-center gap-2 px-4 py-2 rounded-xl text-left text-xs sm:text-sm font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#001b4b] text-white'
                    : 'bg-[#eff4ff] text-[#444650] hover:bg-[#dae3f4] hover:text-[#001b4b]'
                }`}
              >
                <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-[18px]">{category.icon}</span>
                <span className="min-w-0 wrap-anywhere">{category.label}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-[#f8f9ff] pt-4">
            <p className="text-xs text-[#444650]" aria-live="polite">
              {filteredProducts.length === 1 ? '1 producto encontrado' : filteredProducts.length
                ? `Mostrando ${numberFormat.format(firstVisible)}–${numberFormat.format(lastVisible)} de ${numberFormat.format(filteredProducts.length)} productos`
                : 'No hay productos que coincidan con tu búsqueda'}
            </p>
            <button type="button" onClick={onOpenQuoteModal} className="min-h-11 inline-flex items-center justify-center gap-2 bg-[#fc820c] text-[#001b4b] text-sm font-bold px-3.5 py-2 rounded-lg hover:bg-[#ff9f45] transition-colors">
              <span aria-hidden="true" className="material-symbols-outlined text-[16px]">shopping_cart</span>
              Ver cotización ({numberFormat.format(cart.reduce((sum, item) => sum + item.quantity, 0))})
            </button>
          </div>
          {pageCount > 1 && (
            <form key={`${currentPage}-${pageCount}`} onSubmit={handlePageJump} className="flex flex-wrap items-end gap-2">
              <label className="grid gap-1 text-sm text-[#444650]">
                <span>Ir a página (1–{pageCount})</span>
                <input
                  type="number"
                  name="page"
                  min={1}
                  max={pageCount}
                  step={1}
                  required
                  inputMode="numeric"
                  enterKeyHint="go"
                  defaultValue={currentPage}
                  className="w-28 min-h-11 rounded-lg border border-[#c4c6d1] px-3 text-base"
                />
              </label>
              <button type="submit" className="min-h-11 min-w-11 rounded-lg bg-[#001b4b] px-4 text-sm font-bold text-white hover:bg-[#12306b]">
                Ir
              </button>
            </form>
          )}
        </section>

        {pageProducts.length ? (
          <>
            <section ref={resultsRef} tabIndex={-1} aria-label="Resultados del catálogo" className="scroll-mt-24">
              <div key={pageTurn} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ${pageTurn ? 'catalog-page-enter' : ''}`}>
              {pageProducts.map((product) => {
                const quantity = getCartQuantity(product.id);
                const remaining = MAX_ITEM_QUANTITY - quantity;
                return (
                  <article key={product.id} className="bg-white rounded-2xl p-5 shadow-xs border border-[#dae3f4] flex flex-col justify-between gap-5">
                    <div>
                      <p className="text-[11px] font-bold text-[#fc820c] uppercase">{product.categoryLabel}</p>
                      <h2 className="font-['Montserrat'] text-base font-bold text-[#001b4b] leading-snug mt-2 wrap-anywhere">
                        {product.name}
                      </h2>
                    </div>
                    <form onSubmit={(event) => handleAdd(event, product)} className="grid grid-cols-[5rem_minmax(0,1fr)] items-end gap-2">
                      <label className="grid gap-1 text-xs font-medium text-[#444650]">
                        Cantidad <span className="sr-only">de {product.name}</span>
                        <input
                          type="number"
                          name="quantity"
                          min={1}
                          max={remaining}
                          step={1}
                          defaultValue={1}
                          inputMode="numeric"
                          enterKeyHint="go"
                          required
                          disabled={!remaining}
                          className="w-full min-h-11 rounded-lg border border-[#c4c6d1] bg-[#f8f9ff] px-2 text-base text-[#001b4b]"
                        />
                      </label>
                      <button
                        type="submit"
                        disabled={!remaining}
                        className="min-h-11 rounded-lg bg-[#eff4ff] px-2 py-2 text-sm font-bold text-[#001b4b] transition-colors enabled:hover:bg-[#e5eeff] disabled:opacity-50"
                      >
                        {!remaining ? 'Límite alcanzado' : quantity ? `Añadir más (${numberFormat.format(quantity)})` : 'Añadir a cotización'}
                      </button>
                    </form>
                  </article>
                );
              })}
              </div>
            </section>

            {pageCount > 1 && (
            <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-4" aria-label="Paginación del catálogo">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="min-h-11 px-3 sm:px-4 py-2 rounded-lg border border-[#c4c6d1] text-sm font-semibold text-[#001b4b] hover:bg-[#e5eeff] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
              >
                Anterior
              </button>
              <span className="order-first w-full sm:order-none sm:w-auto text-sm text-center tabular-nums text-[#444650]" aria-live="polite">
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
            )}
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
                searchSectionRef.current?.focus({ preventScroll: true });
                searchSectionRef.current?.scrollIntoView({ block: 'start' });
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
