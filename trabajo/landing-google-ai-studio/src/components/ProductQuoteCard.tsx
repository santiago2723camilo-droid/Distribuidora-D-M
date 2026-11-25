import type { FormEvent } from 'react';
import { MAX_ITEM_QUANTITY, type ProductItem } from '../types';

interface ProductQuoteCardProps {
  product: ProductItem;
  quantity: number;
  onAdd: (product: ProductItem, quantity: number) => void;
  headingLevel?: 'h2' | 'h3';
  label?: string;
}

const numberFormat = new Intl.NumberFormat('es-CO');

export function ProductQuoteCard({ product, quantity, onAdd, headingLevel: Title = 'h2', label = product.categoryLabel }: ProductQuoteCardProps) {
  const remaining = MAX_ITEM_QUANTITY - quantity;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const amount = Number(new FormData(form).get('quantity'));
    if (!Number.isInteger(amount) || amount < 1 || amount > remaining) return;
    onAdd(product, amount);
    form.reset();
  };

  return (
    <article className="flex h-full flex-col justify-between gap-5 rounded-2xl border border-[#dae3f4] bg-white p-5 shadow-xs">
      <div>
        <p className="text-[11px] font-bold text-dym-blue uppercase">{label}</p>
        <Title className="mt-2 text-base font-bold leading-snug wrap-anywhere text-[#001b4b]">{product.name}</Title>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-[5rem_minmax(0,1fr)] items-end gap-2">
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
            disabled={remaining <= 0}
            className="min-h-11 w-full rounded-lg border border-[#c4c6d1] bg-[#f8f9ff] px-2 text-base text-[#001b4b]"
          />
        </label>
        <button
          type="submit"
          disabled={remaining <= 0}
          className="min-h-11 rounded-lg bg-dym-blue-soft px-2 py-2 text-sm font-bold text-dym-blue transition-colors enabled:hover:bg-dym-aqua-light disabled:opacity-50"
        >
          {remaining <= 0 ? 'Límite alcanzado' : quantity ? `Añadir más (${numberFormat.format(quantity)})` : 'Añadir a cotización'}
        </button>
      </form>
    </article>
  );
}
