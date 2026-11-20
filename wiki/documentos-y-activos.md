---
tipo: catálogo-de-fuentes
estado: vigente
creado: 2026-10-28
actualizado: 2026-11-20
tags: [fuentes, activos, docs]
fuentes: ["Docs/"]
---

# Documentos y activos

`Docs/` conserva los originales. No se hicieron copias en `fuentes/`. Los originales revisados son evidencia; sus nombres no bastan para certificar autorización comercial o de marca.

| Ruta original | Categoría y descripción | Información / versión | Uso posible y revisión pendiente |
|---|---|---|---|
| `Docs/DISTRIBUIDORA_DYM worddd (1).docx` | Información empresarial y textos | Texto breve de presentación, valores, categorías y seis aliados. Fecha del archivo: 2026-10-28. | Base de textos; confirmar vigencia y autorización de publicación. |
| `Docs/DISTRIBUIDORA D&M.pdf` | Referencia visual / borrador web | PDF de una página que presenta un diseño de landing: logo, navegación, foto genérica de herramientas, textos de presentación, categorías y seis marcas. Fecha: 2026-10-28. | Referencia de versión/diseño; no tratar como catálogo comercial completo. Confirmar qué elementos visuales se conservan. |
| `Docs/LOGO DISTRIBUIDORA DYM.pdf` | Identidad visual / logo | Una página con logo D&M sobre fondo blanco; se aprecia pequeño/poco definido en la página. Fecha: 2026-10-28. | Elegido por el usuario para el encabezado. Derivado recortado en `trabajo/landing-google-ai-studio/public/brand/logo-dym.png`; original intacto. Puede reemplazarse si aparece un original vectorial de mejor resolución. |
| `Docs/CELLUX.jpeg` | Identidad de marca | Logotipo rojo Cellux con escudo y lema; JPEG revisado visualmente. Fecha: 2026-10-28. | Se muestra por autorización del usuario; la relación comercial actual no se describe. |
| `Docs/DEWALT.jpeg` | Identidad de marca | Logotipo negro/amarillo DeWalt; JPEG revisado visualmente. Fecha: 2026-10-28. | Se muestra por autorización del usuario; la relación comercial actual no se describe. |
| `Docs/FERMETAL.jpeg` | Identidad de marca | Logotipo Fermetal rojo; aparece en lista de aliados del DOCX. Fecha: 2026-10-28. | Se muestra por autorización del usuario; sin afirmaciones de garantía o certificación. |
| `Docs/JCTOP.jpeg` | Identidad de marca | Logotipo JC Top Professional; nombre distinto de “JC Tools” del borrador. Fecha: 2026-10-28. | Se muestra separado; relación con JC Tools pendiente. |
| `Docs/JS TOOLS.jpeg` | Identidad de marca | Logotipo “JS Tools Distribuidores”; JPEG revisado visualmente. Fecha: 2026-10-28. | Se muestra por autorización del usuario; la relación comercial actual no se describe. |
| `Docs/RESTREPO.jpeg` | Identidad de marca | Logotipo negro y amarillo “GR Restrepo”; JPEG revisado visualmente. Fecha: 2026-10-28. | Se muestra por autorización del usuario; la relación comercial actual no se describe. |
| `Docs/RIOPLAST.jpeg` | Identidad de marca | Logotipo Rioplast; listado como aliado de sanitarios en DOCX. Fecha: 2026-10-28. | Se muestra por autorización del usuario; sin afirmaciones de garantía o certificación. |
| `Docs/TOTAL.jpeg` | Identidad de marca | Logotipo Total Tools; listado como aliado de herramientas en DOCX. Fecha: 2026-10-28. | Se muestra por autorización del usuario; sin afirmaciones de garantía o certificación. |
| `Docs/UNIFER.jpeg` | Identidad de marca | Logotipo UF Unifer; listado como aliado eléctrico en DOCX. Fecha: 2026-10-28. | Se muestra por autorización del usuario; sin afirmaciones de garantía o certificación. |
| `Docs/VATIO.jpeg` | Identidad de marca | Logotipo Vatio; listado como aliado eléctrico en DOCX. Fecha: 2026-10-28. | Se muestra por autorización del usuario; sin afirmaciones de garantía o certificación. |
| `Docs/ZAFIRO.jpeg` | Identidad de marca | Logotipo Zafiro Luxmetric; JPEG revisado visualmente. Fecha: 2026-10-28. | Se muestra por autorización del usuario; la relación comercial actual no se describe. |
| `../../inventario 04-11.xlsx` | Inventario de productos | Hoja `catalogo_productos_1 (53)`, 1.494 filas y columnas de descripción, stock y precio; archivo recibido el 2026-11-06. | Fuente externa original, no modificada ni copiada al repositorio. Se integraron 1.492 nombres únicos (2 descripciones repetidas) en `trabajo/landing-google-ai-studio/src/data/inventoryCatalog.json`; stock y precios quedaron fuera del sitio. Clasificación provisional inferida por nombre. |
| `Docs/{CELLUX,DEWALT,FERMETAL,JCTOP,JS TOOLS,RESTREPO,RIOPLAST,TOTAL,UNIFER,VATIO,ZAFIRO}.jpeg` → `trabajo/landing-google-ai-studio/public/brand/partners/` | Identidad visual / logos de marca | 11 JPEG revisados visualmente con anterioridad; originales conservados en `Docs/`. | El usuario autorizó mostrar todos los logos enviados. Copias técnicas locales; en la página se muestran logo y nombre, sin fichas de garantía o certificación. |
| `Docs/{CELLUX,DEWALT,FERMETAL,JCTOP,JS TOOLS,RESTREPO,RIOPLAST,TOTAL,UNIFER,VATIO,ZAFIRO}.jpeg` → `trabajo/landing-google-ai-studio/public/brand/partners-white/*.png` (derivados de `public/brand/partners/*.jpeg`) | Identidad visual / versiones con fondo blanco | 11 PNG preparados el 2026-11-20 a petición del usuario. Se normalizó el fondo exterior; los originales de `Docs/` y las copias JPEG previas se conservaron intactos. | Uso actual en carrusel y modales. Los campos de color que forman parte del diseño del logo se conservaron. Revisados visualmente; ver [[decisiones]]. |

## Diferencias y límites de revisión

- El DOCX y el borrador visual listan Fermetal, Rioplast, Vatio, Total, JC Tools y Unifer. En Docs también hay Cellux, DeWalt, JC Top, JS Tools, Restrepo y Zafiro. El usuario autorizó mostrar todos los logos; JC Top se presenta separado de JC Tools hasta aclararlo.
- Los dos PDF y las 11 imágenes se abrieron/renderizaron y revisaron visualmente. El logo indicado fue copiado a la app como derivado autorizado por la solicitud del usuario; su original no se modificó.
- Los 11 JPEG de marca se copiaron individualmente a la aplicación tras la autorización del usuario; no se copiaron stock/precios del inventario ni el libro de Excel.
- No se detectaron versiones duplicadas con los nombres revisados; sin hash no se afirma que no haya duplicados visuales.
- Las fechas mostradas son fechas de modificación del sistema de archivos, no fechas impresas de aprobación.
- Fuentes anteriores existentes fuera de Docs: no se encontró carpeta `fuentes/` ni otras fuentes en la raíz durante el inventario inicial.
