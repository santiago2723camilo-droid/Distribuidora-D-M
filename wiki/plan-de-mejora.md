---
tipo: plan-de-mejora
estado: en-progreso
creado: 2026-11-06
actualizado: 2026-11-20
tags: [plan, landing, mejoras]
fuentes: ["Plan De Mejora/17-distribuidora-dym/plan-mejoras.md", "Plan De Mejora/17-distribuidora-dym/validacion-con-cliente.md", "trabajo/landing-google-ai-studio/src/"]
---

# Plan de mejora de la landing D&M

Esta hoja adapta el plan recibido al código y a los materiales que sí existen. Los originales de `Plan De Mejora/` y `Docs/` se conservan intactos. Cada paso debe revisarse antes de marcarse como terminado; los datos provisionales no se presentan como hechos.

La numeración de «Ruta de trabajo» resume la secuencia adaptada de la wiki. Cuando el usuario pide un número de paso, se refiere al paso numerado del archivo original `Plan De Mejora/17-distribuidora-dym/plan-mejoras.md`.

## Revisión del estado real

- **Confirmado:** la aplicación está hecha con React, TypeScript y Vite. Tiene inicio, catálogo, aliados, nosotros y contacto; son pantallas dentro de una sola aplicación.
- **Confirmado:** catálogo React en `src/data/inventoryCatalog.json`, buscador, filtros por las tres categorías y carrito en `App.tsx`; cotizaciones se preparan para WhatsApp en `QuoteModal.tsx`.
- **Confirmado:** el Excel tiene 1.494 filas. El catálogo presenta 1.492 nombres únicos y clasifica por nombre; stock/precio no se muestran. La clasificación aún puede corregirse con la empresa.
- **Confirmado:** el crédito ya no calcula cupos ni publica plazos; ofrece una consulta por WhatsApp, pues el usuario indicó que las condiciones varían.
- **Confirmado:** Contacto sigue disponible con correo, WhatsApp y dirección confirmados por el usuario; no incluye Maps ni PBX.
- **Confirmado:** están mostrados los 11 logos entregados. La landing ya no contiene sección de testimonios; la landing no contiene testimonios; el 2026-11-20 se añadieron a Nosotros misión y visión propuestas por el agente a solicitud del usuario.
- **Confirmado:** compilación de Vite y TypeScript pasan. El catálogo y Nosotros se revisaron en escritorio y móvil en `http://127.0.0.1:3004/`; el carrito de prueba se vació al terminar.
- **Pendiente:** revisar accesibilidad/breakpoints y decidir publicación. GitHub contiene una versión anterior; los cambios de esta sesión son locales hasta que se autorice subirlos.

## Cambios aplicados en esta sesión

- **Confirmado por el usuario:** eslogan exacto: «D&M, Soluciones para cada necesidad».
- **Confirmado por el usuario:** teléfono `+57 316 460 2821`, dirección Carrera 4H # 21-48, barrio Villa Clara; conservar Contacto y no incluir Maps.
- **Confirmado por el usuario:** correo `distri.dym13@gmail.com`, PBX retirado y eslogan «D&M, Soluciones para cada necesidad».
- **Confirmado por el usuario:** mostrar todos los logos recibidos; quitar testimonios; no usar misión/visión por ahora; mostrar 10 productos por página sin fotos.
- **Pendiente confirmado:** las condiciones de crédito cambian y no se cuenta con información completa.

## Ruta de trabajo

0. **Preparar las skills del plan.** En `Plan De Mejora/17-distribuidora-dym/` están los ZIP de SEO y tratamiento de datos. Revisarlos e instalar sus carpetas completas en `.agents/skills/` antes de esos pasos; las skills de diseño citadas en `instalar-skills.md` no aparecen en este proyecto y su instalación queda pendiente.
1. **Información empresarial y flujos:** revisión documental y del código completada el 2026-11-06; la portada se revisó visualmente el 2026-11-13 en navegador local. No se cambió el sitio en esos pasos. Se catalogaron activos, formularios, cotizador, crédito, marcas y navegación. Hallazgos y pendientes en [[estado-del-proyecto]] y [[pendientes]].
2. **Contenido y contacto:** aplicado: teléfono, dirección, email, eslogan, pantalla Contacto conservada y sin Maps/PBX.
3. **Lenguaje:** aplicado: productos sin SKU o atributos no incluidos en el inventario; sin testimonios; se quitaron afirmaciones de crédito y stock no respaldadas. Misión y visión se añadieron como propuesta en el paso 4 original.
4. **Catálogo y cotización:** aplicado localmente: 1.492 nombres únicos, tres categorías y 10 por página; sin fotos, stock ni precio. Mantiene filtros y selección; navegación y persistencia en cotización comprobadas el 2026-11-20.
5. **Marcas:** aplicado localmente: galería de los 11 logos recibidos, sin detalles de garantía/certificación no respaldados.
6. **Crédito:** aplicado: consulta informativa por WhatsApp sin fórmula, monto, plazo ni promesa de aprobación.
7. **Privacidad y datos.** Inventariar los datos que solicitan el cotizador y el formulario de contacto. Recibir NIT/RUT, dirección legal y correo para asuntos de datos; preparar política y aceptación antes de habilitar una recopilación que dependa de ella.
8. **Pulido, SEO y accesibilidad.** Revisar jerarquía visual, móvil, teclado, etiquetas, título/descripción y textos alternativos sin inventar ubicaciones, horarios o marcas.
9. **Prueba final y entrega.** Compilar; revisar en escritorio y móvil; probar enlaces y flujo de cotización solo contra destino confirmado. Guardar versión local en Git. El despliegue web se hace aparte y requiere autorización para el destino.

## Paso 2 del plan recibido · Logo y palabras claras

- **Confirmado:** el encabezado de la página usa el logo seleccionado de `Docs/LOGO DISTRIBUIDORA DYM.pdf` y la portada muestra la marca en el navegador local.
- **Confirmado:** no hay “SKU(s)” en el texto de la interfaz. Quité el campo `sku` heredado no utilizado y cambié en el texto visible “referencias” e “inventario” por “productos” y “catálogo” cuando hablaban de los artículos.
- **Pendiente:** el logo oficial disponible en los PDF está rasterizado y borroso a tamaño de encabezado. Renderizarlo a más DPI no recupera detalle; no lo redibujé ni alteré. El paso queda parcial hasta recibir una fuente vectorial o de mayor resolución.
- **Comprobado:** `vite build` y `tsc --noEmit` pasan; los textos actualizados aparecen en `http://127.0.0.1:3003/`. La revisión visual fue del encabezado y el catálogo, no de todos los tamaños.

## Paso 3 del plan recibido · Pie de página y contacto

- **Confirmado:** el pie y la vista Contacto ya muestran WhatsApp `+57 316 460 2821`, `distri.dym13@gmail.com` y Carrera 4H # 21-48, barrio Villa Clara; el PBX está retirado.
- **Confirmado por el usuario:** conservar Contacto y no incluir Maps. Esta preferencia prevalece sobre las dos acciones opuestas del plan original.
- **Comprobado en esta sesión:** búsqueda de contacto en el código; no hay referencias a PBX ni Maps. El paso queda aplicado de acuerdo con las instrucciones vigentes, sin cambios nuevos de código.
- **Alcance pendiente de prueba:** no se revalidaron visualmente los enlaces ni se probó recepción de mensajes en WhatsApp.

## Fotografías de productos · preparación solicitada

- **Provisional:** se construyó una guía para los 1.492 productos: 135 grupos compartibles (462 productos) y 1.030 productos que requieren toma individual según el nombre del inventario. Ver [[lista-de-fotos-catalogo]] y la tabla completa [[lista-fotos-catalogo.csv]].
- Los tamaños se agrupan cuando el resto del nombre coincide; “industrial” se mantiene como familia diferente. En aerosoles solo se comparten colores cuando el resto de la descripción coincide. Validar forma, material, empaque y acabado físicamente antes de reutilizar la foto.
- El catálogo del sitio sigue sin fotos de producto, tal como se había solicitado; este listado prepara las tomas y no integra ni publica imágenes.

## Paso 4 del plan recibido · Nosotros: misión y visión

- **Aplicado localmente por solicitud del usuario:** se añadieron una misión y una visión sencillas, redactadas por el agente con la oferta y los valores documentados.
- **Trazabilidad:** el DOCX empresarial original contiene una descripción y los valores «Responsabilidad» y «Compromiso con el cliente», pero no textos de misión ni visión. Las nuevas frases son una propuesta y no se presentan como transcripciones oficiales.
- **Comprobado:** aparecen en Nosotros en escritorio y móvil; los originales de `Docs/` permanecen intactos.

## Paso 5 del plan recibido · Catálogo con paginación

- **Aplicado y comprobado:** 1.492 productos, tres categorías, 10 por página, sin imágenes de producto, precios ni existencias.
- La primera página muestra 1–10 de 1.492; la última, 1.491–1.492. La búsqueda «TORNILLO» muestra 30; con la categoría Construcción y ferretería quedan 28. Al cambiar a la segunda página, se conservaron búsqueda, filtro y el producto añadido a cotización. «ABRAZADERA CREMALLERA INDUSTRIAL» devuelve dos productos y queda en la página 1 de 1.
- **Verificación visual:** catálogo y Nosotros revisados localmente a 1.280 px y 375 px; no se detectó desbordamiento horizontal al medir 320 px. El carrito se limpió después de la prueba.
- **Compilación y tipos:** Vite build y TypeScript pasaron; se conserva la advertencia conocida de `__dirname` en `vite.config.ts`.

## Respuestas confirmadas y datos aún pendientes

- **Ya confirmado:** no se incluyen reglas de crédito aún; los logos recibidos se pueden mostrar; teléfono/dirección/email son vigentes; no Maps; mantener Contacto; sin testimonios; 10 productos por página y sin fotos. Misión y visión actuales son propuestas provisionales solicitadas por el usuario.
- **Pendiente para futuras mejoras:** NIT/RUT y datos del responsable de privacidad para política; revisión de productos clasificados por nombre; reglas oficiales si en algún momento se desea describir las condiciones de crédito; revisión visual final y autorización de publicación.

## Secuencia para usar el plan recibido

El archivo original `Plan De Mejora/17-distribuidora-dym/plan-mejoras.md` y sus materiales siguen intactos. El sitio conserva el framework actual y la pantalla de contacto. La instalación de skills, política de datos, SEO, revisión visual completa y publicación quedan por hacer cuando corresponda.

## Paso 1 · Revisión realizada

- **Confirmado:** `Docs/` contiene 11 logos JPEG, dos PDF (borrador de landing y logo) y un DOCX empresarial. El Excel del inventario se recibió fuera de `Docs/` y ya alimenta el catálogo. El borrador PDF usa una foto genérica; no hay fotos propias de productos, categorías, instalaciones o equipo.
- **Confirmado:** el DOCX y el borrador nombran aliados, pero no hay fichas detalladas por marca. El usuario autorizó mostrar los 11 logos; eso no confirma por sí solo la relación comercial actual de cada marca. JC Top y JC Tools son nombres distintos en las fuentes.
- **Confirmado:** el catálogo actual busca por nombre, filtra las tres categorías y pagina 10 productos; conserva selección en el estado de la aplicación mientras se navega entre pantallas. Los grupos del inventario son inferidos por nombre y no incluyen precio ni existencia.
- **Confirmado:** el cotizador permite agregar, incrementar, reducir y quitar productos, editar cantidades, vaciar la lista y prepara un mensaje a WhatsApp con el número confirmado. Abrir WhatsApp no envía automáticamente el mensaje. Nombre, empresa, ciudad y notas son campos opcionales; la ciudad empieza en Valledupar. La lista de municipios y la frase de flete del ejemplo aún no tienen respaldo confirmado.
- **Confirmado:** el formulario de Contacto exige nombre, teléfono, ciudad y consulta; empresa es opcional. Prepara un segundo mensaje a WhatsApp. No se observó política de privacidad ni casilla de aceptación.
- **Confirmado:** crédito quedó como consulta por WhatsApp, sin captura de datos ni simulador. La pantalla Contacto permanece. Marcas tiene pantalla separada en una cuadrícula estática, no carrusel ni fichas emergentes.
- **Confirmado:** la revisión inicial no encontró “SKU(s)”, PBX ni enlaces de Maps en la interfaz. En el paso 2 también se retiró el campo `sku` opcional que quedaba sin uso en el tipo TypeScript. El teléfono, correo y dirección están en `src/data/mockData.ts`.
- **Confirmado:** la primera instancia local en 3002 no aceptaba conexiones del navegador. Vite se inició en `http://127.0.0.1:3003/`; la portada quedó visible en la pestaña local. No se hicieron cambios en los archivos del sitio.


## Paso 6 del plan recibido · Fotografías

- **Pendiente:** en Docs/ no se encontraron fotos propias de categorías o productos; hay logos. El usuario puede depositar allí las fotos que quiera usar. Se elegirán y copiarán solo los activos autorizados para una ubicación técnica del sitio; los originales se conservan intactos.
