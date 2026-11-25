---
tipo: plan-de-mejora
estado: en-progreso
creado: 2026-11-06
actualizado: 2026-11-25
tags: [plan, landing, mejoras]
fuentes: ["Plan De Mejora/17-distribuidora-dym/plan-mejoras.md", "Plan De Mejora/17-distribuidora-dym/validacion-con-cliente.md", "trabajo/landing-google-ai-studio/src/"]
---

# Plan de mejora de la landing D&M

Esta hoja adapta el plan recibido al código y a los materiales que sí existen. Los originales de `Plan De Mejora/` y `Docs/` se conservan intactos. Cada paso debe revisarse antes de marcarse como terminado; los datos provisionales no se presentan como hechos.

La numeración de «Ruta de trabajo» resume la secuencia adaptada de la wiki. Cuando el usuario pide un número de paso, se refiere al paso numerado del archivo original `Plan De Mejora/17-distribuidora-dym/plan-mejoras.md`.

## Revisión del estado real

- **Confirmado:** la aplicación está hecha con React, TypeScript y Vite. Tiene inicio, catálogo, nosotros y contacto; las marcas ahora se muestran en una sección de la portada, no en una pantalla independiente.
- **Confirmado:** catálogo React en `src/data/inventoryCatalog.json`, buscador, filtros por las tres categorías y carrito en `App.tsx`; cotizaciones se preparan para WhatsApp en `QuoteModal.tsx`.
- **Confirmado:** el Excel tiene 1.494 filas. El catálogo presenta 1.492 nombres únicos y clasifica por nombre; stock/precio no se muestran. La clasificación aún puede corregirse con la empresa.
- **Confirmado:** el crédito ya no calcula cupos ni publica plazos; ofrece una consulta por WhatsApp, pues el usuario indicó que las condiciones varían.
- **Confirmado:** Contacto sigue disponible con correo, WhatsApp y dirección confirmados por el usuario; no incluye Maps ni PBX.
- **Confirmado:** están mostrados los 11 logos entregados. La landing ya no contiene testimonios ni una pantalla independiente de aliados; los logos están en un carrusel de portada con modales accesibles. No hay fichas detalladas de cada marca en `Docs/`.
- **Confirmado:** compilación de Vite y TypeScript pasan. El catálogo y Nosotros se revisaron en escritorio y móvil en `http://127.0.0.1:3004/`; el carrito de prueba se vació al terminar.
- **Pendiente:** revisar los formularios restantes, accesibilidad y los pasos siguientes del plan. El commit `0a947cc` del paso 9 está sincronizado en GitHub; el sitio aún no se ha desplegado a un dominio o servicio de hosting.

## Cambios aplicados en esta sesión

- **Confirmado por el usuario:** eslogan exacto: «D&M, Soluciones para cada necesidad».
- **Confirmado por el usuario:** teléfono `+57 316 460 2821`, dirección Carrera 4H # 21-48, barrio Villa Clara; conservar Contacto y no incluir Maps.
- **Confirmado por el usuario:** correo `distri.dym13@gmail.com`, PBX retirado y eslogan «D&M, Soluciones para cada necesidad».
- **Confirmado por el usuario:** mostrar los 11 logos recibidos; quitar testimonios; mostrar 10 productos por página sin fotos. Después, pidió redactar y añadir una misión y visión sencillas, registradas como propuestas en [[empresa]].
- **Pendiente confirmado:** las condiciones de crédito cambian y no se cuenta con información completa.

## Ruta de trabajo

0. **Preparar las skills del plan.** En `Plan De Mejora/17-distribuidora-dym/` están los ZIP de SEO y tratamiento de datos. Revisarlos e instalar sus carpetas completas en `.agents/skills/` antes de esos pasos; las skills de diseño citadas en `instalar-skills.md` no aparecen en este proyecto y su instalación queda pendiente.
1. **Información empresarial y flujos:** revisión documental y del código completada el 2026-11-06; la portada se revisó visualmente el 2026-11-13 en navegador local. No se cambió el sitio en esos pasos. Se catalogaron activos, formularios, cotizador, crédito, marcas y navegación. Hallazgos y pendientes en [[estado-del-proyecto]] y [[pendientes]].
2. **Contenido y contacto:** aplicado: teléfono, dirección, email, eslogan, pantalla Contacto conservada y sin Maps/PBX.
3. **Lenguaje:** aplicado: productos sin SKU o atributos no incluidos en el inventario; sin testimonios; se quitaron afirmaciones de crédito y stock no respaldadas. Misión y visión se añadieron como propuesta en el paso 4 original.
4. **Catálogo y cotización:** aplicado localmente: 1.492 nombres únicos, tres categorías y 10 por página; sin fotos, stock ni precio. Mantiene filtros y selección; navegación y persistencia en cotización comprobadas el 2026-11-20.
5. **Marcas:** carrusel y modales implementados localmente con los 11 logos autorizados; faltan fichas de aliados en `Docs/` para completar sus detalles.
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
- **Confirmado:** crédito quedó como consulta por WhatsApp, sin captura de datos ni simulador. La pantalla Contacto permanece. Las marcas se presentan en la portada en un carrusel y modales; la ficha detallada de cada marca sigue pendiente de fuente.
- **Confirmado:** la revisión inicial no encontró “SKU(s)”, PBX ni enlaces de Maps en la interfaz. En el paso 2 también se retiró el campo `sku` opcional que quedaba sin uso en el tipo TypeScript. El teléfono, correo y dirección están en `src/data/mockData.ts`.
- **Confirmado:** la primera instancia local en 3002 no aceptaba conexiones del navegador. Vite se inició en `http://127.0.0.1:3003/`; la portada quedó visible en la pestaña local. No se hicieron cambios en los archivos del sitio.


## Paso 6 del plan recibido · Muestra de tarjetas por categoría

- **Omitido por decisión del usuario (2026-11-20):** no se usarán imágenes en el catálogo. Por eso no se preparó la muestra de tarjetas de categoría con fotos que propone este paso. El catálogo permanece en texto y sin imágenes de producto.

## Paso 7 del plan recibido · Marcas y aliados

- **Aplicado localmente:** los 11 logos autorizados aparecen en un carrusel lento que se puede pausar; el movimiento se detiene al enfocar o pasar el puntero y se desactiva cuando el sistema reduce movimiento. Al seleccionar un logo se abre un modal, que se cierra con botón o Escape y mantiene el foco accesible.
- **Aplicado localmente:** se retiró la pantalla aparte de aliados. La opción «Marcas» del menú lleva a la sección de la portada.
- **Parcial por falta de fuente:** los modales muestran el logo y el nombre; aclaran que no hay una ficha adicional en los documentos disponibles. `Docs/` no respalda detalles de actividad, garantía o certificación para cada marca. No se inventaron.
- **Comprobado:** build de Vite y TypeScript pasan. En la vista local se abrió el modal de Cellux, se cerró con Escape y se pausó/reanudó el carrusel. Ver [[documentos-y-activos]] y [[pendientes]].

## Paso 8 del plan recibido · Testimonios y preguntas de crédito

- **Aplicado previamente y revisado ahora:** no hay sección ni texto de testimonios, estrellas o calificaciones en el código de la landing. En `Docs/` no hay testimonios con una calificación que se puedan publicar; no se añadieron.
- **Aplicado y revisado:** la respuesta de crédito en preguntas frecuentes dice que las condiciones pueden cambiar, invita a consultar por WhatsApp la información vigente y aclara que la solicitud está sujeta a revisión. No ofrece días exactos, plazos, cupos ni aprobación. El modal de crédito también indica que esta página no calcula cupos ni confirma plazos o aprobaciones.
- **Otras respuestas revisadas:** catálogo explica búsqueda y categorías; cotización indica que precio y disponibilidad se confirman al atender la solicitud. Coinciden con las funciones observadas en la página.
- **Resultado:** el paso 8 ya estaba aplicado por instrucciones anteriores; se confirma terminado sin cambios de código. La revisión fue por inspección del código y del inventario documental, no una prueba visual nueva.

## Paso 9 del plan recibido · Carrito y cotizador

- **Mejora publicada (2026-11-25):** se puede escribir la cantidad en la tarjeta del catálogo y añadir todas las unidades en una sola acción. En el cotizador, el número entre `−` y `+` se puede editar directamente. Se aceptan enteros positivos. Ver pruebas en [[estado-del-proyecto]].
- **Aplicado localmente:** el pie del cotizador adapta la disposición de sus botones a móvil para que no salgan del recuadro. En anchos pequeños, cada producto muestra su nombre arriba de los controles.
- **Pruebas funcionales:** se agregaron tres artículos de distintas categorías; se cambió la cantidad del panel LED, se eliminó la abrazadera y se vació el carrito. La lista restante mostró el panel con cantidad 2 y el codo con cantidad 1.
- **Mensaje revisado por código:** el texto usa exactamente el nombre y cantidad actuales de cada artículo y el destino `COMPANY_PHONE` confirmado. No se abrió WhatsApp ni se enviaron datos, así que la recepción no se probó.
- **Vista local:** revisión visual a 320, 390 y 703 px; el botón cabe dentro del modal. Al terminar, se vació el carrito y cerró el modal.
- **Validación:** Vite build, TypeScript y `git diff --check` pasaron; sigue el aviso conocido de `__dirname`.

## Paso 10 del plan recibido · Simulación de crédito

- **Fuente:** el usuario dijo que las condiciones no están completas y cambian constantemente; [[empresa]] registra que no hay reglas para simulación. Se conserva el límite de no calcular cupos, términos ni aprobar solicitudes.
- **Aplicado localmente:** se añadió un campo opcional para describir la consulta. El enlace arma un borrador al WhatsApp de `COMPANY_PHONE`; no guarda la respuesta ni transmite datos por sí mismo. El texto aclara que condiciones/plazos/aprobaciones no se calculan ni confirman en la página.
- **Tres casos verificados leyendo el borrador preparado (sin abrir WhatsApp):** campo vacío produce una consulta general; pregunta por cupo se incluye sin monto calculado; pregunta por plazo y revisión se incluye sin plazo prometido ni aprobación.
- **Visual y técnico:** modal revisado a 375 y 320 px; botón dentro del recuadro. Vite build, TypeScript y `git diff --check` pasan.

## Paso 11 del plan recibido · Pulido profesional

- **Aplicado:** portada con espacios más parejos, pie de foto fuera de la imagen y accesos manejables con teclado. Se conservaron los textos, el logo y la paleta. La pestaña reutiliza el logo existente como icono.
- **Aplicado:** campos con etiquetas vinculadas y texto más legible en móvil, controles principales de al menos 44 px, filtros en varias filas cuando hace falta y paginación que devuelve la vista a los resultados. El cotizador tiene una lista con nombres completos, controles de cantidad y una zona de acciones que permanece visible.
- **Guía aplicada:** se consultaron las instrucciones oficiales de [Emil](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md) e [Impeccable](https://github.com/pbakaus/impeccable/blob/main/.agents/skills/impeccable/SKILL.md). Se siguieron directamente porque las skills no están instaladas en el proyecto.
- **Comprobado:** Vite build, TypeScript y `git diff --check`. En Brave se revisaron escritorio y móvil emulado a 320 px. La paginación mantuvo el filtro, la búsqueda y el carrito. Se aumentó y quitó un producto. Escape cerró los modales probados y, en Crédito, devolvió el foco al menú. No se comprobó la recepción por WhatsApp.
- **Siguiente:** paso 12, recorrido en celular y casos raros. Ver [[estado-del-proyecto]] y [[pendientes]].

## Paso 12 del plan recibido · Revisión en celular y casos raros

- **Aplicado:** salto a cualquier página dentro del rango, búsqueda tolerante a tildes y espacios, estado de un solo resultado sin controles innecesarios y retorno a filtros al limpiar el estado sin resultados.
- **Aplicado:** se corrigieron el solapamiento del botón flotante de WhatsApp en pantallas angostas, el espacio del menú con unidades seleccionadas y el recorte de las acciones del cotizador con poca altura. Las marcas se pueden deslizar manualmente en móvil y sus ventanas devuelven el foco al logo al cerrar.
- **Comprobado:** se usaron los 1.492 registros reales, incluidos cero y un resultado, la página 150 de 150, una página fuera del rango y el nombre más largo (51 caracteres). Se agregaron productos de páginas distintas y se probó reducir, quitar el último y vaciar. Se revisaron 320 y 390 px, 265 px de altura, escritorio y zoom al 200 %. Ver [[estado-del-proyecto]].
- **Guía aplicada:** [mobile-native](https://github.com/emilkowalski/skills/blob/main/skills/mobile-native/SKILL.md) y [break-ui](https://github.com/emilkowalski/skills/blob/main/skills/break-ui/SKILL.md), consultadas en sus fuentes oficiales. Los casos se probaron con los datos reales del catálogo.
- **Pendiente:** teléfono físico y recepción de WhatsApp. El siguiente paso numerado es el 13 y es opcional.

## Paso 13 del plan recibido · Transiciones suaves

- **Aplicado:** una entrada breve al abrir el detalle de una marca, mostrar los resultados de otra página y mostrar el aviso de borrador preparado en el cotizador. La preferencia del sistema admite el modo sin animación. No se espera a que termine una animación para mostrar el contenido ni para usar los controles.
- **Comprobado:** Brave en escritorio y a 390 px con movimiento reducido emulado. Cada animación se inició en el modo normal y ninguna se inició con la preferencia reducida. Enter y Escape conservaron el comportamiento. Se probó el borrador por interceptación local, sin abrir WhatsApp. Vite build, TypeScript y `git diff --check` pasaron.
- **Siguiente:** paso 14, política de tratamiento de datos. Ver [[estado-del-proyecto]] y [[pendientes]].

## Paso 14 del plan recibido · Tratamiento de datos

**Estado: borrador y casillas comprobados en vista privada.** D&M confirmó nombre registrado, dirección y atención de derechos. Las solicitudes se atienden y conservan en WhatsApp. D&M no envía promociones. El NIT se incorporará más adelante por indicación del usuario.

| Flujo | Datos que pide la página | Destino observado |
|---|---|---|
| Cotizador | Nombre o contacto, empresa u obra, municipio y notas. Los campos son opcionales y el municipio empieza en Valledupar. Se agregan productos y cantidades si hay selección. | Se incluyen en el borrador que abre WhatsApp. |
| Contacto | Nombre, teléfono, municipio y consulta obligatorios. Ferretería o empresa opcional. | Se incluyen en el borrador que abre WhatsApp. |
| Crédito | Pregunta de texto libre opcional. El formulario no solicita cédula, documentos, ingresos ni montos. | WhatsApp abre una consulta general o incluye el texto escrito. |

- **Confirmado por código:** los campos se mantienen en memoria mientras se usa la página. El texto viaja como parte del enlace al abrir WhatsApp. La persona revisa el borrador y decide si lo envía. No se encontró una base de datos propia para estos formularios, ni política o casilla de autorización. Los enlaces directos sin campos no incorporan los datos de los formularios.
- **Confirmado por código:** la portada carga fuentes e imagen desde servicios externos de Google. No se encontró analítica instalada en la landing. El alojamiento público y sus registros quedan por comprobar cuando se defina el despliegue.
- **Confirmado por el usuario:** marca, correo y teléfono comerciales en [[empresa]]. Para la política, confirmó usar la dirección ya registrada y el correo comercial. El nombre registrado y la persona que atenderá derechos quedaron en `Docs/datos-personales/confirmaciones-locales.md`, excluido de Git. No se recibió el RUT ni una política vigente.
- **Vista local:** página independiente, enlace en el pie, aviso y casilla sin marcar en Cotizador, Contacto y Crédito. Se inicia con `node .\node_modules\vite\bin\vite.js --mode privacy-draft --host 127.0.0.1 --port 3006 --strictPort`. El modo simula el envío. Los documentos privados se encuentran en `Docs/datos-personales/`.
- **Comprobado:** Brave bloqueó las tres acciones con la casilla vacía y mostró confirmación de prueba al marcarla. Se abrieron los enlaces del pie y del cotizador. Se revisaron la política y el cotizador a 390 px. Vite y TypeScript terminaron correctamente. La compilación y la vista normal no sirvieron el borrador.
- **Pendiente de validación:** NIT, plazo o criterio de conservación, mecanismo para guardar la constancia de autorización, vigencia y aprobación antes de publicación. No se confirmó el alojamiento público y sus registros. No se constataron campos específicos de salud o de menores.
- **Fuentes:** guía local `tratamiento-datos-landing.zip`, [Ley 1581 de 2012, arts. 9 y 12](https://jurinfo.jep.gov.co/Normograma/compilacion/docs/ley_1581_2012.htm), [SIC sobre contenido mínimo de la política](https://sedeelectronica.sic.gov.co/publicaciones/boletin-juridico/concepto/politicas-de-tratamiento-de-datos-personales) y [Decreto 1074 de 2015, arts. 2.2.2.25.2.5 y 2.2.2.25.3.1](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76608).

## Paso 15 del plan recibido · SEO para Google

- **Aplicado localmente:** título «Distribuidora D&M | Ferretería mayorista en Valledupar», descripción con ferretería, construcción y accesorios sanitarios y eléctricos, y datos para compartir en redes alineados con la portada. El eslogan se conserva.
- **Aplicado localmente:** marcado `LocalBusiness` con nombre comercial, oferta, dirección y contacto existentes. Se aclaró el texto alternativo del logo y de la foto ilustrativa. La portada incluye una alternativa con oferta y acceso a WhatsApp y correo si JavaScript está desactivado.
- **Comprobado:** Vite build, TypeScript, `git diff --check`, JSON del HTML compilado y correspondencia con los datos públicos del sitio. La portada y el logo respondieron con HTTP 200 en local. Brave mostró la portada en escritorio y a 390 px. El catálogo abrió desde el botón y se revisaron los destinos de Contacto. Se comprobó la alternativa sin JavaScript y se restauró la vista interactiva. El borrador de privacidad no está en la compilación.
- **Pendiente con la URL pública confirmada:** comprobar acceso de Google al sitio, configurar la URL canónica, evaluar un sitemap y revisar Search Console. Inicio, Productos, Nosotros y Contacto son vistas de una sola URL.
- **Confirmaciones útiles:** municipios o zonas reales de entrega, modalidad y horario de atención si se quieren publicar, y existencia de un Perfil de Empresa de Google. Se mantiene la decisión de no incorporar un enlace de Maps a la landing.
- **Fuentes:** guía local `seo-organico-ia.zip`, [Guía inicial de SEO de Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [Datos estructurados de negocios locales](https://developers.google.com/search/docs/appearance/structured-data/local-business) y [Cómo solicitar rastreo](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).

## Paso 16 del plan recibido · Revisión final

**Estado: aplicado y comprobado localmente.** Vista de la compilación en `http://127.0.0.1:3007/`. Versión local identificada con la etiqueta de Git `revision-final-paso-16`.

| Página de catálogo | Nombre exacto en el borrador | Cantidad |
|---:|---|---:|
| 1 | ABRAZADERA CREMALLERA 1 1/2 | 1 |
| 50 | CORREDILLA PLASTICA NEGRA 150X2.5 | 2 |
| 150 | YEE LAVADORA COBRE | 3 |

- **Comprobado:** se agregaron desde las tres páginas y se comparó el texto real preparado por la compilación, interceptando localmente el enlace de WhatsApp. Coincidieron los nombres, cantidades y el número confirmado, tanto en escritorio como en móvil emulado a 390 px.
- **Comprobado y corregido:** el teclado entra al carrusel con el logo enfocado visible, incluso al pasar de Cellux a Zafiro. Enter abre el detalle, Escape devuelve el foco y se puede reanudar la animación.
- **Comprobado:** consulta de crédito por WhatsApp con pregunta de prueba y sin simulación o promesa. Contacto conserva dirección en texto, como pidió D&M. Compilación y TypeScript correctos.
- **Pendiente:** recepción real por WhatsApp, revisión en teléfono físico e indexación. La política se mantiene aplazada por el NIT. Ver [[estado-del-proyecto]] y [[pendientes]].

## Publicación en GitHub Pages

- **Confirmado (2026-11-25):** el commit `d732855` y la etiqueta `revision-final-paso-16` están en el [repositorio autorizado](https://github.com/santiago2723camilo-droid/Distribuidora-D-M). Se comprobó el historial saliente y se excluyeron `Docs/`, la carpeta original del plan y los archivos temporales.
- **Decisión de D&M:** usar GitHub Pages en el repositorio autorizado. La política queda aplazada hasta contar con el NIT.
- **Implementación:** el flujo `.github/workflows/deploy-pages.yml` instala y compila desde la carpeta de la app con base `/Distribuidora-D-M/` y publica solo `dist/`. Los cambios a la app en `main` disparan la publicación. El icono de pestaña, logo principal y logos de marcas usan la base de Vite. [Guía de Vite](https://vite.dev/guide/static-deploy#github-pages) y [fuentes de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
- **Comprobado (2026-11-25):** la [landing pública](https://santiago2723camilo-droid.github.io/Distribuidora-D-M/) y sus 12 PNG principales responden HTTP 200. En Brave se vieron los logos en escritorio y a 390 px, se abrió el detalle de Total y funcionó el acceso al catálogo y al cotizador. El borrador de la política no se sirve por HTTPS. [Ejecución del despliegue](https://github.com/santiago2723camilo-droid/Distribuidora-D-M/actions/runs/45699009870).

## Ideas de diseño para revisar con D&M

- **Propuesta:** despejar la portada, dar prioridad a «Cotizar por WhatsApp» y acercar las tres categorías a la parte superior. Usar el naranja para destacar la acción principal y ajustar el contraste del texto de los botones.
- **Propuesta:** titular la sección «Marcas» y probar una cuadrícula de logos alineados con fondo blanco. Si D&M aporta un original más nítido, probarlo en el encabezado. Una foto real del negocio sería una opción para la portada si D&M tiene una aprobada.
- **Propuesta:** mantener el catálogo sin fotos y aplicar una alineación uniforme al nombre del producto, al campo de cantidad y al botón «Añadir». Las propuestas esperan elección de D&M.
