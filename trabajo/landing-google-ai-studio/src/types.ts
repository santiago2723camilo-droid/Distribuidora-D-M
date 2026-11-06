export type ScreenType = 'inicio' | 'productos' | 'aliados' | 'nosotros' | 'contacto';

export interface ProductItem {
  id: string;
  name: string;
  category: 'electricos' | 'construccion' | 'sanitarios';
  categoryLabel: string;
  sku?: string;
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

export interface AlliedBrand {
  name: string;
  logo: string;
}
