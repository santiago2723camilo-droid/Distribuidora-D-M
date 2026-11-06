import inventoryRows from './inventoryCatalog.json';
import { ProductItem } from '../types';

const categoryLabels: Record<ProductItem['category'], string> = {
  electricos: 'Eléctricos',
  construccion: 'Construcción y ferretería',
  sanitarios: 'Accesorios sanitarios',
};

export const PRODUCTS_CATALOG: ProductItem[] = inventoryRows.map((row, index) => {
  const category = row.category as ProductItem['category'];
  return {
    id: `inventario-${index + 1}`,
    name: row.name,
    category,
    categoryLabel: categoryLabels[category],
  };
});
