import { useRef, useState } from 'react';
import { reviewQuoteList } from '../data/quoteList';
import type { CartItem } from '../types';

interface QuoteListInputProps {
  cart: CartItem[];
  onDraftChange: (hasDraft: boolean) => void;
  onApply: (items: CartItem[], pendingLines: string[]) => void;
}

export function QuoteListInput({ cart, onDraftChange, onApply }: QuoteListInputProps) {
  const [source, setSource] = useState('');
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState('');
  const summaryRef = useRef<HTMLElement>(null);
  const review = checked ? reviewQuoteList(source, cart) : null;

  return (
    <details className="rounded-xl border border-dym-aqua-light bg-dym-aqua-soft">
      <summary ref={summaryRef} className="min-h-11 cursor-pointer rounded-xl px-3 py-3 text-sm font-bold text-[#001b4b]">
        Pegar una lista de materiales
      </summary>
      <div className="space-y-3 px-3 pb-3">
        <label htmlFor="quote-list" className="block text-sm font-semibold text-[#001b4b]">
          Lista de materiales
        </label>
        <p id="quote-list-help" className="text-xs leading-relaxed text-[#444650]">
          Un producto por renglón. Escribe, por ejemplo, «12 x CODO SANITARIO 2 CXE». Si omites la cantidad, se toma 1.
        </p>
        <textarea
          id="quote-list"
          aria-describedby="quote-list-help"
          value={source}
          onChange={(event) => {
            setSource(event.target.value);
            onDraftChange(Boolean(event.target.value.trim()));
            setChecked(false);
            setStatus('');
          }}
          rows={4}
          placeholder={'12 x CODO SANITARIO 2 CXE\n5 x PANEL LED INCRUSTAR 12W'}
          className="w-full rounded-lg border border-[#c4c6d1] bg-white px-3 py-2 text-base leading-relaxed"
        />
        <button
          type="button"
          onClick={() => {
            setChecked(true);
            setStatus('');
          }}
          className="min-h-11 rounded-lg bg-dym-blue px-4 py-2 text-sm font-bold text-white"
        >
          Revisar lista
        </button>
        <p role="status" className="text-sm font-medium text-[#001b4b]">
          {status || (review?.error ?? (review && `${review.items.length} ${review.items.length === 1 ? 'producto encontrado' : 'productos encontrados'} y ${review.pending.length} ${review.pending.length === 1 ? 'renglón' : 'renglones'} por confirmar.`))}
        </p>
        {review && !review.error && (
          <div className="space-y-3 rounded-lg border border-[#dae3f4] bg-white p-3">
            {review.items.length > 0 && (
              <ul aria-label="Productos encontrados" className="space-y-1 text-sm text-[#001b4b]">
                {review.items.map(({ product, quantity }) => (
                  <li key={product.id} className="wrap-anywhere">{quantity} × {product.name}</li>
                ))}
              </ul>
            )}
            {review.pending.length > 0 && (
              <div className="space-y-2 text-sm text-[#444650]">
                <h4 className="font-bold text-[#001b4b]">Por confirmar</h4>
                <ul className="space-y-2">
                  {review.pending.map(({ line, reason, examples }, index) => (
                    <li key={`${index}-${line}`} className="wrap-anywhere">
                      <span className="font-semibold">{line}</span>
                      <span className="block text-xs">{reason}</span>
                      {examples && <span className="block text-xs">Por ejemplo, {examples.join(', ')}.</span>}
                    </li>
                  ))}
                </ul>
                <p className="text-xs">Puedes corregir estos renglones arriba o conservarlos en las notas.</p>
              </div>
            )}
            <button
              type="button"
              onClick={() => {
                onApply(review.items, review.pending.map(({ line }) => line));
                setSource('');
                onDraftChange(false);
                setChecked(false);
                setStatus(review.pending.length
                  ? 'Se guardaron los renglones por confirmar en las notas.' + (review.items.length ? ' Los productos encontrados se añadieron a la cotización.' : '')
                  : 'Se añadieron los productos a la cotización.');
                summaryRef.current?.focus();
              }}
              className="min-h-11 rounded-lg bg-dym-gold px-4 py-2 text-sm font-bold text-[#001b4b] hover:bg-dym-gold-hover"
            >
              {review.items.length ? (review.pending.length ? 'Añadir productos y guardar notas' : 'Añadir productos a la cotización') : 'Guardar en notas'}
            </button>
          </div>
        )}
      </div>
    </details>
  );
}
