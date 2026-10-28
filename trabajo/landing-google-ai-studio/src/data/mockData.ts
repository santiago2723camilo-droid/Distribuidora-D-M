import { AlliedBrand, ProductItem, Testimonial } from '../types';

export const COMPANY_PHONE = '573164602821';
export const COMPANY_PHONE_DISPLAY = '+57 316 460 2821';
export const COMPANY_LANDLINE = '(605) 574 0000';
export const COMPANY_EMAIL = 'ventas@distribuidoradm.com.co';
export const COMPANY_ADDRESS = 'Zona Industrial Cra. 7A # 38-45, Valledupar, Cesar';

export const ALLIED_BRANDS: AlliedBrand[] = [
  {
    name: 'Fermetal',
    category: 'Accesorios & Cerrajería',
    description: 'Cerraduras, candados, bisagras y herrajes de alta seguridad y resistencia a la corrosión marina.',
    origin: 'Nacional / Importado',
    warranty: '12 meses de garantía directa',
    topProducts: ['Cerraduras de pomo', 'Candados de bronce alta seguridad', 'Bisagras galvanizadas']
  },
  {
    name: 'Rioplast',
    category: 'Sanitarios & PVC',
    description: 'Líder en tubería, accesorios sanitarios de PVC, válvulas y griferías institucionales de alto flujo.',
    origin: 'Colombia',
    warranty: 'Cumplimiento norma NTC 382',
    topProducts: ['Válvulas esféricas PVC', 'Accesorios presión y sanitaria', 'Sifones corrugados']
  },
  {
    name: 'Vatio',
    category: 'Eléctricos & Conducción',
    description: 'Materiales eléctricos certificados RETIE, interruptores, cables de cobre y tableros de distribución.',
    origin: 'Colombia',
    warranty: 'Certificación RETIE vigente',
    topProducts: ['Cables THHN calibres 10, 12, 14', 'Breakers enchufables', 'Cajas de paso galvanizadas']
  },
  {
    name: 'Total',
    category: 'Herramientas Profesionales',
    description: 'Gama completa de herramientas eléctricas, inalámbricas y manuales de grado profesional para obra.',
    origin: 'Global',
    warranty: '12 meses con servicio técnico en Valledupar',
    topProducts: ['Taladros percutores', 'Amoladoras 4-1/2"', 'Juegos de copas y llaves']
  },
  {
    name: 'JC Tools',
    category: 'Herramientas Manuales',
    description: 'Herramientas manuales de forja industrial, cintas métricas reforzadas, alicates y niveles magnéticos.',
    origin: 'Importado',
    warranty: 'Garantía de forja de por vida en manuales',
    topProducts: ['Alicates de electricista 8"', 'Flexómetros reforzados 8m', 'Niveles de aluminio']
  },
  {
    name: 'Unifer',
    category: 'Eléctricos & Conexión',
    description: 'Soluciones de iluminación LED de alto rendimiento, reflectores para intemperie y canaletas.',
    origin: 'Colombia',
    warranty: '2 años en paneles y reflectores LED',
    topProducts: ['Paneles LED 60x60 48W', 'Reflectores IP65 50W/100W', 'Tomas con polo a tierra']
  }
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  // ELÉCTRICOS
  {
    id: 'elec-01',
    name: 'Cable THHN Cobre 100% Calibre 12 AWG',
    category: 'electricos',
    categoryLabel: 'Eléctricos',
    sku: 'EL-THHN-12',
    brand: 'Vatio',
    unit: 'Rollo x 100m',
    minOrder: '2 rollos',
    approxPrice: 'Precio Mayorista',
    description: 'Cable de cobre electrolítico de 99.9% pureza con aislamiento termoplástico retardante de llama. Certificación RETIE obligatoria para obra civil.',
    specs: ['Calibre: 12 AWG', 'Tensión nominal: 600V', 'Temperatura max: 90°C', 'Certificado RETIE vigente'],
    inStock: true,
    featured: true
  },
  {
    id: 'elec-02',
    name: 'Panel LED Incrustar Cuadrado 18W Luz Blanca 6500K',
    category: 'electricos',
    categoryLabel: 'Eléctricos',
    sku: 'EL-LED-18W',
    brand: 'Unifer',
    unit: 'Caja máster x 30 un',
    minOrder: '1 caja',
    approxPrice: 'Precio Mayorista',
    description: 'Luminaria LED ultradelgada con driver externo disipador de aluminio. Rendimiento 90 lm/W ideal para locales comerciales y vivienda.',
    specs: ['Potencia: 18W', 'Flujo luminoso: 1620 lm', 'Voltaje: 85-265V', 'Vida útil: 25.000 horas'],
    inStock: true,
    featured: true
  },
  {
    id: 'elec-03',
    name: 'Breaker Enchufable Monopolar 1x20A / 1x30A',
    category: 'electricos',
    categoryLabel: 'Eléctricos',
    sku: 'EL-BRK-20A',
    brand: 'Vatio',
    unit: 'Caja x 12 un',
    minOrder: '2 cajas',
    approxPrice: 'Precio Mayorista',
    description: 'Interruptor termomagnético enchufable para tablero de distribución tipo americano. Protección confiable contra sobrecarga y cortocircuito.',
    specs: ['Corriente: 20A / 30A', 'Polos: 1 Polo', 'Capacidad interrupción: 10kA', 'Norma RETIE / IEC 60898'],
    inStock: true
  },
  {
    id: 'elec-04',
    name: 'Reflector LED Exterior 50W IP65 Impermeable',
    category: 'electricos',
    categoryLabel: 'Eléctricos',
    sku: 'EL-REF-50W',
    brand: 'Unifer',
    unit: 'Caja x 10 un',
    minOrder: '1 caja',
    approxPrice: 'Precio Mayorista',
    description: 'Proyector LED exterior con carcasa de aluminio inyectado y vidrio templado. Alta disipación térmica apto para el calor del Caribe.',
    specs: ['Potencia: 50W', 'Grado de protección: IP65', 'Lúmenes: 4500 lm', 'Carcasa en aluminio anticorrosivo'],
    inStock: true
  },
  {
    id: 'elec-05',
    name: 'Caja de Paso Galvanizada 4"x4" Doble Fondo',
    category: 'electricos',
    categoryLabel: 'Eléctricos',
    sku: 'EL-CPASO-44',
    brand: 'Vatio',
    unit: 'Bulto x 50 un',
    minOrder: '1 bulto',
    approxPrice: 'Precio Mayorista',
    description: 'Caja octagonal y cuadrada de lámina galvanizada en caliente con knockouts estampados para empalme y distribución eléctrica en muros y cielos.',
    specs: ['Dimensiones: 100 x 100 x 50 mm', 'Calibre: 18 / 20', 'Galvanizado G60', 'Troquelado limpio'],
    inStock: true
  },
  {
    id: 'elec-06',
    name: 'Cinta Aislante Eléctrica Profesional 20m x 19mm',
    category: 'electricos',
    categoryLabel: 'Eléctricos',
    sku: 'EL-CINTA-20M',
    brand: 'JC Tools',
    unit: 'Paquete x 10 rollos',
    minOrder: '5 paquetes',
    approxPrice: 'Precio Mayorista',
    description: 'Cinta vinílica retardante de llama resistente a la humedad y rayos UV con adhesivo de caucho de alta adherencia.',
    specs: ['Longitud: 20 metros', 'Ancho: 19 mm', 'Rigidez dieléctrica: 600V', 'Colores: Negro / Blanco / Rojo'],
    inStock: true
  },

  // CONSTRUCCIÓN Y FERRETERÍA
  {
    id: 'const-01',
    name: 'Disco de Corte Fino para Metal e Inox 4-1/2" x 1mm',
    category: 'construccion',
    categoryLabel: 'Construcción y ferretería',
    sku: 'FE-DISC-45',
    brand: 'Total',
    unit: 'Caja x 50 un',
    minOrder: '2 cajas',
    approxPrice: 'Precio Mayorista',
    description: 'Disco abrasivo con doble malla de fibra de vidrio para cortes rápidos, limpios y con mínima rebaba en aceros al carbono e inoxidables.',
    specs: ['Diámetro: 115 mm (4-1/2")', 'Espesor: 1.0 mm / 1.2 mm', 'Eje: 22.2 mm (7/8")', 'Velocidad max: 13.300 RPM'],
    inStock: true,
    featured: true
  },
  {
    id: 'const-02',
    name: 'Amoladora Angular Profesional 4-1/2" 750W',
    category: 'construccion',
    categoryLabel: 'Construcción y ferretería',
    sku: 'FE-AMOL-750',
    brand: 'Total',
    unit: 'Caja máster x 4 un',
    minOrder: '2 unidades',
    approxPrice: 'Precio Mayorista',
    description: 'Esmeriladora de alto rendimiento con motor blindado contra polvo abrasivo, seguro de bloqueo de eje y empuñadura ergonómica.',
    specs: ['Potencia: 750W', 'Velocidad sin carga: 12.000 RPM', 'Rosca de eje: M14', 'Garantía: 12 meses'],
    inStock: true
  },
  {
    id: 'const-03',
    name: 'Cerradura de Sobreponer Clásica Cilindro Suelto',
    category: 'construccion',
    categoryLabel: 'Construcción y ferretería',
    sku: 'FE-CERR-SOBR',
    brand: 'Fermetal',
    unit: 'Caja x 12 un',
    minOrder: '1 caja',
    approxPrice: 'Precio Mayorista',
    description: 'Cerradura maciza con 3 llaves tipo serreta, pestillo reversible y cerrojo de tres golpes de acero laminado para portones y puertas exteriores.',
    specs: ['Cuerpo: Acero esmaltado anticorrosión', 'Backset: 50 mm / 60 mm', 'Cilindro de latón macizo', 'Incluye 3 llaves'],
    inStock: true
  },
  {
    id: 'const-04',
    name: 'Alicate Universal Profesional Aislado 8" Cromo Vanadio',
    category: 'construccion',
    categoryLabel: 'Construcción y ferretería',
    sku: 'FE-ALIC-8CRV',
    brand: 'JC Tools',
    unit: 'Caja x 6 un',
    minOrder: '2 cajas',
    approxPrice: 'Precio Mayorista',
    description: 'Forjado en acero cromo vanadio tratado térmicamente con filo de corte de precisión endurecido por inducción y mangos bimaterial ergonómicos.',
    specs: ['Largo: 200 mm (8")', 'Material: Cr-V endurecido', 'Mangos TPR antideslizantes', 'Dureza filo: 60-64 HRC'],
    inStock: true
  },
  {
    id: 'const-05',
    name: 'Alambre Negro Recocido Calibre 18 para Amarre',
    category: 'construccion',
    categoryLabel: 'Construcción y ferretería',
    sku: 'FE-ALAM-REC18',
    brand: 'Fermetal',
    unit: 'Rollo x 25kg',
    minOrder: '2 rollos (50kg)',
    approxPrice: 'Precio Mayorista',
    description: 'Alambre trefilado suave recocido al horno para óptima maleabilidad en el amarre de varilla corrugada sin romperse en el entorche.',
    specs: ['Calibre: 18 BWG (1.24 mm)', 'Presentación: Rollo zuncho 25 kg', 'Alta ductilidad para obra', 'Bajo residuo de carbonilla'],
    inStock: true
  },
  {
    id: 'const-06',
    name: 'Tornillo Drywall Punta Broca y Punta Aguda Fosfatado 6x1"',
    category: 'construccion',
    categoryLabel: 'Construcción y ferretería',
    sku: 'FE-TORN-DW61',
    brand: 'Fermetal',
    unit: 'Caja máster x 10.000 un',
    minOrder: '1 caja',
    approxPrice: 'Precio Mayorista',
    description: 'Tornillos para placas de yeso y perfiles metálicos calibre 26 y 20 con acabado fosfatado negro resistente a compuestos y yeso.',
    specs: ['Medida: #6 x 1"', 'Cabeza: Trompeta Philips #2', 'Acabado: Fosfato negro', 'Rosca fina y punta aguda/broca'],
    inStock: true
  },

  // ACCESORIOS SANITARIOS
  {
    id: 'san-01',
    name: 'Válvula de Bola PVC Presión Lisa 1/2" y 3/4"',
    category: 'sanitarios',
    categoryLabel: 'Accesorios sanitarios',
    sku: 'SA-VALV-12',
    brand: 'Rioplast',
    unit: 'Caja x 50 un',
    minOrder: '1 caja',
    approxPrice: 'Precio Mayorista',
    description: 'Llave de paso esférica de PVC virgen con manija mariposa ergonómica y empaque EPDM de cierre hermético para redes de agua potable.',
    specs: ['Diámetros: 1/2", 3/4", 1"', 'Presión de trabajo: 150 PSI', 'Conexión: Soldar (lisa)', 'Cuerpo compacto anticorrosivo'],
    inStock: true,
    featured: true
  },
  {
    id: 'san-02',
    name: 'Soldadura Líquida PVC Presión Extra Fuerte 1/4 Galón',
    category: 'sanitarios',
    categoryLabel: 'Accesorios sanitarios',
    sku: 'SA-SOLD-14GAL',
    brand: 'Rioplast',
    unit: 'Caja x 12 un',
    minOrder: '1 caja',
    approxPrice: 'Precio Mayorista',
    description: 'Cemento solvente transparente de secado rápido y alta resistencia para unión de tuberías y accesorios de PVC hasta 4 pulgadas.',
    specs: ['Presentación: 1/4 galón (946 ml)', 'Viscosidad media', 'Incluye aplicador en tapa', 'Secado rápido en clima cálido'],
    inStock: true
  },
  {
    id: 'san-03',
    name: 'Sifón Extensible Flexible Universal PVC con Adaptador',
    category: 'sanitarios',
    categoryLabel: 'Accesorios sanitarios',
    sku: 'SA-SIF-UNIV',
    brand: 'Rioplast',
    unit: 'Paquete x 24 un',
    minOrder: '1 paquete',
    approxPrice: 'Precio Mayorista',
    description: 'Sifón corrugado extensible con tuerca y empaque de goma adaptable a salidas de 1-1/4" y 1-1/2" para lavamanos y lavaplatos.',
    specs: ['Extensión: 30 cm a 85 cm', 'Salida: 1-1/4" y 1-1/2"', 'Sello antiolores integrado', 'Material polipropileno flexible'],
    inStock: true
  },
  {
    id: 'san-04',
    name: 'Cinta Teflón Grado Industrial 1/2" x 10 metros',
    category: 'sanitarios',
    categoryLabel: 'Accesorios sanitarios',
    sku: 'SA-TEFL-10M',
    brand: 'JC Tools',
    unit: 'Caja máster x 200 rollos',
    minOrder: '1 caja',
    approxPrice: 'Precio Mayorista',
    description: 'Cinta selladora de politetrafluoroetileno (PTFE) 100% puro para sellado hermético de roscas en tuberías de agua, gas y aire.',
    specs: ['Ancho: 1/2" (12 mm)', 'Espesor: 0.075 mm densidad estándar', 'Temperatura: -190°C a +260°C', 'No contamina agua potable'],
    inStock: true
  },
  {
    id: 'san-05',
    name: 'Flotador Válvula de Entrada Tanque Sanitario 1/2"',
    category: 'sanitarios',
    categoryLabel: 'Accesorios sanitarios',
    sku: 'SA-FLOT-12',
    brand: 'Rioplast',
    unit: 'Caja x 20 un',
    minOrder: '1 caja',
    approxPrice: 'Precio Mayorista',
    description: 'Válvula de llenado silenciosa y altura regulable para tanques sanitarios estándar con varilla y boya resistente al agua dura.',
    specs: ['Rosca entrada: 1/2" NPT', 'Altura ajustable 8" a 13"', 'Sistema anticifón', 'Repuesto de alta rotación en mostrador'],
    inStock: true
  },
  {
    id: 'san-06',
    name: 'Grifería Mezclador Monocontrol Cromada Lavamanos',
    category: 'sanitarios',
    categoryLabel: 'Accesorios sanitarios',
    sku: 'SA-GRIF-LAV',
    brand: 'Fermetal',
    unit: 'Caja x 6 un',
    minOrder: '1 caja',
    approxPrice: 'Precio Mayorista',
    description: 'Grifería metálica con cartucho cerámico antigoteo de 35mm, acabado cromo brillante con prueba de cámara salina para el trópico.',
    specs: ['Cuerpo metálico latón/zinc', 'Cartucho cerámico 35mm', 'Incluye acoples flexibles mallas inox', 'Garantía 5 años'],
    inStock: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Llevamos más de 3 años surtiendo nuestra ferretería con D&M en Valledupar. Los precios mayoristas en cable y tubería nos permiten competir y tener buen margen.',
    clientName: 'Alfonso Maestre M.',
    city: 'Valledupar, Cesar',
    businessType: 'Ferretería El Progreso',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'El despacho a los municipios del Cesar es puntual. Pedimos por WhatsApp en la mañana y al día siguiente tenemos el pedido descargado en el local.',
    clientName: 'Yomaira Villazón',
    city: 'Codazzi, Cesar',
    businessType: 'Depósito & Ferretería La Central',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'La línea de crédito comercial para ferreterías nos ha permitido abastecer obras grandes sin asfixiar el flujo de caja diario. Un aliado indispensable.',
    clientName: 'Carlos Mario Cotes',
    city: 'San Juan del Cesar, La Guajira',
    businessType: 'Materiales & Acabados San Juan',
    rating: 5
  }
];

export const FAQS = [
  {
    id: 'faq-1',
    icon: 'local_shipping',
    question: '¿A dónde entregan?',
    answer: 'Entregamos con rutas logísticas directas en todo el departamento del Cesar (Valledupar, Codazzi, La Paz, San Diego, Bosconia, Aguachica), La Guajira (San Juan, Fonseca, Riohacha), Magdalena y Bolívar.'
  },
  {
    id: 'faq-2',
    icon: 'account_balance_wallet',
    question: '¿Ofrecen crédito?',
    answer: 'Sí, ofrecemos líneas de crédito comercial a 30 y 45 días para ferreterías legalmente constituidas y contratistas calificados. Contáctanos por WhatsApp para enviarte los requisitos simplificados (RUT, Cámara de Comercio y referencias).'
  },
  {
    id: 'faq-3',
    icon: 'shopping_cart_checkout',
    question: '¿Cómo hago un pedido?',
    answer: 'Escríbenos directamente por WhatsApp al +57 316 460 2821 con tu listado de materiales o selecciona las referencias en nuestro catálogo web. Nuestro asesor te envía la cotización consolidada con precios por escala en minutos.'
  },
  {
    id: 'faq-4',
    icon: 'inventory',
    question: '¿Tienen compra mínima para acceder a precios de distribuidor?',
    answer: 'Manejamos despachos por bulto, cajas completas y volumen mayorista. Si eres ferretería de barrio o maestro de obra, consolidamos compras mixtas con precios preferenciales desde el primer pedido.'
  },
  {
    id: 'faq-5',
    icon: 'verified',
    question: '¿Los materiales cuentan con certificados de calidad?',
    answer: 'Sí. Todos nuestros conductores eléctricos cuentan con certificación RETIE vigente, y las tuberías y accesorios cumplen con las normas técnicas colombianas NTC / ICONTEC.'
  }
];
