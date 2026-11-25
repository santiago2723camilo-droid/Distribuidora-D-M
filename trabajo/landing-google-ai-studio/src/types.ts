export type ScreenType = 'inicio' | 'productos' | 'nosotros' | 'contacto';

export interface ProductItem {
  id: string;
  name: string;
  category: 'electricos' | 'construccion' | 'sanitarios';
  categoryLabel: string;
  brand?: string;
  unit?: string;
  minOrder?: string;
  approxPrice?: string;
  description?: string;
  specs?: string[];
  inStock?: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
  unit?: string;
  notes?: string;
}

export const MAX_ITEM_QUANTITY = 999_999_999;

export interface AlliedBrand {
  name: string;
  logo: string;
}
