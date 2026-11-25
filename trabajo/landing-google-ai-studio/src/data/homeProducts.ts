import { PRODUCTS_CATALOG } from './inventoryCatalog';

const featuredLines = [
  { label: 'Rodillos', search: 'rodillo', example: 'RODILLO FELPA 9' },
  { label: 'Paneles', search: 'panel led', example: 'PANEL LED INCRUSTAR 12W' },
  { label: 'Aerosoles', search: 'aerosol', example: 'AEROSOL BLANCO MATE' },
  { label: 'Brochas', search: 'brocha', example: 'BROCHA MANGO AZUL 2"' },
  { label: 'Tornillería', search: 'tornillo', example: 'TORNILLO AUTOPERFORANTE 12X2' },
];

export const FEATURED_PRODUCTS = featuredLines.flatMap(({ label, search, example }) => {
  const product = PRODUCTS_CATALOG.find((item) => item.name === example);
  return product ? [{ label, search, product }] : [];
});
