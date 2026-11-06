import { AlliedBrand } from '../types';

export const COMPANY_PHONE = '573164602821';
export const COMPANY_PHONE_DISPLAY = '+57 316 460 2821';
export const COMPANY_EMAIL = 'distri.dym13@gmail.com';
export const COMPANY_ADDRESS = 'Carrera 4H # 21-48, barrio Villa Clara';

export const ALLIED_BRANDS: AlliedBrand[] = [
  { name: 'Cellux', logo: '/brand/partners/cellux.jpeg' },
  { name: 'DeWalt', logo: '/brand/partners/dewalt.jpeg' },
  { name: 'Fermetal', logo: '/brand/partners/fermetal.jpeg' },
  { name: 'JC Top', logo: '/brand/partners/jc-top.jpeg' },
  { name: 'JS Tools', logo: '/brand/partners/js-tools.jpeg' },
  { name: 'GR Restrepo', logo: '/brand/partners/restrepo.jpeg' },
  { name: 'Rioplast', logo: '/brand/partners/rioplast.jpeg' },
  { name: 'Total', logo: '/brand/partners/total.jpeg' },
  { name: 'UF Unifer', logo: '/brand/partners/unifer.jpeg' },
  { name: 'Vatio', logo: '/brand/partners/vatio.jpeg' },
  { name: 'Zafiro', logo: '/brand/partners/zafiro.jpeg' },
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
