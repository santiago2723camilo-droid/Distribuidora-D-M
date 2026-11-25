import { AlliedBrand, ProductItem } from '../types';

export const COMPANY_PHONE = '573164602821';
export const COMPANY_PHONE_DISPLAY = '+57 316 460 2821';
export const COMPANY_EMAIL = 'distri.dym13@gmail.com';
export const COMPANY_ADDRESS = 'Carrera 4H # 21-48, barrio Villa Clara';

export const PRODUCT_CATEGORIES: { id: ProductItem['category']; label: string; icon: string }[] = [
  { id: 'electricos', label: 'Eléctricos', icon: 'bolt' },
  { id: 'construccion', label: 'Construcción y ferretería', icon: 'handyman' },
  { id: 'sanitarios', label: 'Accesorios sanitarios', icon: 'plumbing' },
];

const partnerLogoBase = `${import.meta.env.BASE_URL}brand/partners-white/`;

export const ALLIED_BRANDS: AlliedBrand[] = [
  { name: 'Cellux', logo: `${partnerLogoBase}cellux.png` },
  { name: 'DeWalt', logo: `${partnerLogoBase}dewalt.png` },
  { name: 'Fermetal', logo: `${partnerLogoBase}fermetal.png` },
  { name: 'JC Top', logo: `${partnerLogoBase}jc-top.png` },
  { name: 'JS Tools', logo: `${partnerLogoBase}js-tools.png` },
  { name: 'GR Restrepo', logo: `${partnerLogoBase}restrepo.png` },
  { name: 'Rioplast', logo: `${partnerLogoBase}rioplast.png` },
  { name: 'Total', logo: `${partnerLogoBase}total.png` },
  { name: 'UF Unifer', logo: `${partnerLogoBase}unifer.png` },
  { name: 'Vatio', logo: `${partnerLogoBase}vatio.png` },
  { name: 'Zafiro', logo: `${partnerLogoBase}zafiro.png` },
];

export { PRODUCTS_CATALOG } from './inventoryCatalog';

export const FAQS = [
  {
    id: 'faq-catalogo',
    icon: 'search',
    question: '¿Cómo encuentro un producto?',
    answer: 'Busca por nombre o selecciona una de las categorías del catálogo. Puedes avanzar por sus páginas sin perder los filtros.',
  },
  {
    id: 'faq-cotizacion',
    icon: 'shopping_cart_checkout',
    question: '¿Cómo solicito una cotización?',
    answer: 'Añade los productos al listado de cotización y envíalo por WhatsApp. La disponibilidad y el precio se confirman al momento de atender tu solicitud.',
  },
  {
    id: 'faq-credito',
    icon: 'account_balance_wallet',
    question: '¿Cómo consulto las condiciones de crédito?',
    answer: 'Las condiciones pueden cambiar. Escríbenos por WhatsApp para consultar la información vigente; cualquier solicitud está sujeta a revisión.',
  },
];
