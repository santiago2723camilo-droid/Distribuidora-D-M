import { AlliedBrand } from '../types';

export const COMPANY_PHONE = '573164602821';
export const COMPANY_PHONE_DISPLAY = '+57 316 460 2821';
export const COMPANY_EMAIL = 'distri.dym13@gmail.com';
export const COMPANY_ADDRESS = 'Carrera 4H # 21-48, barrio Villa Clara';

export const ALLIED_BRANDS: AlliedBrand[] = [
  { name: 'Cellux', logo: '/brand/partners-white/cellux.png' },
  { name: 'DeWalt', logo: '/brand/partners-white/dewalt.png' },
  { name: 'Fermetal', logo: '/brand/partners-white/fermetal.png' },
  { name: 'JC Top', logo: '/brand/partners-white/jc-top.png' },
  { name: 'JS Tools', logo: '/brand/partners-white/js-tools.png' },
  { name: 'GR Restrepo', logo: '/brand/partners-white/restrepo.png' },
  { name: 'Rioplast', logo: '/brand/partners-white/rioplast.png' },
  { name: 'Total', logo: '/brand/partners-white/total.png' },
  { name: 'UF Unifer', logo: '/brand/partners-white/unifer.png' },
  { name: 'Vatio', logo: '/brand/partners-white/vatio.png' },
  { name: 'Zafiro', logo: '/brand/partners-white/zafiro.png' },
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
