import { PRODUCTS_CATALOG } from './inventoryCatalog';

export const normalizeProductSearch = (value: string) =>
  value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().replace(/\s+/g, ' ');

export const searchableProducts = PRODUCTS_CATALOG.map((product) => ({
  product,
  searchableName: normalizeProductSearch(product.name),
}));
