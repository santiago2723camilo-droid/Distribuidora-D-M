import { MAX_ITEM_QUANTITY, type CartItem } from '../types';
import { normalizeProductSearch, searchableProducts } from './catalogSearch';

const MAX_LINES = 50;
const MAX_TEXT_LENGTH = 6000;

type PendingItem = { line: string; reason: string; examples?: string[] };

export type QuoteListReview = { items: CartItem[]; pending: PendingItem[]; error?: string };

export function reviewQuoteList(source: string, cart: CartItem[]): QuoteListReview {
  const lines = source.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const items = new Map<string, CartItem>();
  const pending: PendingItem[] = [];
  const quantities = new Map(cart.map((item) => [item.product.id, item.quantity]));

  if (!lines.length) return { items: [], pending, error: 'Escribe o pega una lista para revisarla.' };
  if (lines.length > MAX_LINES || source.length > MAX_TEXT_LENGTH) {
    return { items: [], pending, error: 'Divide la lista en bloques de hasta 50 renglones y 6.000 caracteres.' };
  }

  for (const line of lines) {
    const normalizedLine = normalizeProductSearch(line);
    const exactLine = searchableProducts.filter(({ searchableName }) => searchableName === normalizedLine);
    const prefix = exactLine.length ? null : /^([+-]?\d+(?:[.,]\d+)?)\s*[x×]\s*(\p{L}.*)$/iu.exec(line);
    const suffix = exactLine.length || prefix ? null : /^(.+?)\s+[x×]\s*([+-]?\d+(?:[.,]\d+)?)$/iu.exec(line);
    const spaced = exactLine.length || prefix || suffix ? null : /^([+-]?\d+(?:[.,]\d+)?)\s+(\p{L}.*)$/u.exec(line);
    const quantityText = prefix?.[1] || suffix?.[2] || spaced?.[1] || '1';
    const quantity = Number(quantityText);
    const name = normalizeProductSearch(prefix?.[2] || suffix?.[1] || spaced?.[2] || line);

    if (!/^\+?\d+$/.test(quantityText) || !Number.isSafeInteger(quantity) || quantity < 1 || quantity > MAX_ITEM_QUANTITY) {
      pending.push({ line, reason: 'La cantidad debe ser un número entero positivo dentro del límite del cotizador.' });
      continue;
    }

    const exact = exactLine.length ? exactLine : searchableProducts.filter(({ searchableName }) => searchableName === name);
    const matches = exact.length ? exact : searchableProducts.filter(({ searchableName }) => searchableName.includes(name));
    if (matches.length !== 1) {
      pending.push(matches.length ? {
        line,
        reason: 'Hay varias opciones. Agrega la medida o referencia para elegir una.',
        examples: matches.slice(0, 3).map(({ product }) => product.name),
      } : { line, reason: 'No encontramos ese nombre en el catálogo.' });
      continue;
    }

    const { product } = matches[0];
    const total = (quantities.get(product.id) ?? 0) + (items.get(product.id)?.quantity ?? 0) + quantity;
    if (total > MAX_ITEM_QUANTITY) {
      pending.push({ line, reason: 'La cantidad supera el límite para este producto.' });
      continue;
    }
    items.set(product.id, { product, quantity: (items.get(product.id)?.quantity ?? 0) + quantity });
  }

  return { items: [...items.values()], pending };
}
