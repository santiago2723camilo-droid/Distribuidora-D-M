export type ScreenType = 'inicio' | 'productos' | 'aliados' | 'nosotros' | 'contacto';

export interface ProductItem {
  id: string;
  name: string;
  category: 'electricos' | 'construccion' | 'sanitarios';
  categoryLabel: string;
  sku: string;
  brand: string;
  unit: string; // e.g. "Caja x 50 un", "Rollo 100m", "Bulto x 25kg"
  minOrder: string;
  approxPrice?: string;
  description: string;
  specs: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
  unit: string;
  notes?: string;
}

export interface AlliedBrand {
  name: string;
  category: string;
  description: string;
  origin: string;
  warranty: string;
  topProducts: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  city: string;
  businessType: string;
  rating: number;
}
