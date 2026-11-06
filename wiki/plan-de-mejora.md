---
tipo: plan-de-mejora
estado: en-progreso
creado: 2026-11-06
actualizado: 2026-11-06
tags: [plan, landing, mejoras]
fuentes: ["Plan De Mejora/17-distribuidora-dym/plan-mejoras.md", "Plan De Mejora/17-distribuidora-dym/validacion-con-cliente.md", "trabajo/landing-google-ai-studio/src/"]
---

# Plan de mejora de la landing D&M

Esta hoja adapta el plan recibido al código y a los materiales que sí existen. Los originales de `Plan De Mejora/` y `Docs/` se conservan intactos. Cada paso debe revisarse antes de marcarse como terminado; los datos provisionales no se presentan como hechos.

## Revisión del estado real

- **Confirmado:** la aplicación está hecha con React, TypeScript y Vite. Tiene inicio, catálogo, aliados, nosotros y contacto; son pantallas dentro de una sola aplicación.
- **Confirmado:** catálogo React en `src/data/inventoryCatalog.json`, buscador, filtros por las tres categorías y carrito en `App.tsx`; cotizaciones se preparan para WhatsApp en `QuoteModal.tsx`.
- **Confirmado:** el Excel tiene 1.494 filas. El catálogo presenta 1.492 nombres únicos y clasifica por nombre; stock/precio no se muestran. La clasificación aún puede corregirse con la empresa.
- **Confirmado:** el crédito ya no calcula cupos ni publica plazos; ofrece una consulta por WhatsApp, pues el usuario indicó que las condiciones varían.
- **Confirmado:** Contacto sigue disponible con correo, WhatsApp y dirección confirmados por el usuario; no incluye Maps ni PBX.
- **Confirmado:** están mostrados los 11 logos entregados. La landing ya no contiene sección de testimonios; la pantalla Nosotros usa solo descripción de actividad y líneas de producto, sin misión/visión.
- **Confirmado:** compilación de Vite y TypeScript pasan. **Pendiente:** revisión visual/funcional con el navegador, pues no conectó al servidor local de la versión anterior; esta versión fue iniciada en `http://127.0.0.1:3001/`.
- **Pendiente:** revisar accesibilidad/breakpoints y decidir publicación. GitHub contiene una versión anterior; los cambios de esta sesión son locales hasta que se autorice subirlos.

## Cambios aplicados en esta sesión

- **Confirmado por el usuario:** eslogan exacto: «D&M, Soluciones para cada necesidad».
- **Confirmado por el usuario:** teléfono `+57 316 460 2821`, dirección Carrera 4H # 21-48, barrio Villa Clara; conservar Contacto y no incluir Maps.
- **Confirmado por el usuario:** correo `distri.dym13@gmail.com`, PBX retirado y eslogan «D&M, Soluciones para cada necesidad».
- **Confirmado por el usuario:** mostrar todos los logos recibidos; quitar testimonios; no usar misión/visión por ahora; mostrar 10 productos por página sin fotos.
- **Pendiente confirmado:** las condiciones de crédito cambian y no se cuenta con información completa.

## Ruta de trabajo

0. **Preparar las skills del plan.** En `Plan De Mejora/17-distribuidora-dym/` están los ZIP de SEO y tratamiento de datos. Revisarlos e instalar sus carpetas completas en `.agents/skills/` antes de esos pasos; las skills de diseño citadas en `instalar-skills.md` no aparecen en este proyecto y su instalación queda pendiente.
1. **Información empresarial y flujos:** validación inicial completada según las respuestas de este turno. Los detalles restantes están en [[pendientes]].
2. **Contenido y contacto:** aplicado: teléfono, dirección, email, eslogan, pantalla Contacto conservada y sin Maps/PBX.
3. **Lenguaje:** aplicado: productos sin SKU o atributos no incluidos en el inventario; sin testimonios ni sección de misión/visión; se quitaron afirmaciones de crédito y stock no respaldadas.
4. **Catálogo y cotización:** aplicado localmente: 1.492 nombres únicos, tres categorías y 10 por página; sin fotos, stock ni precio. Mantiene filtros y selección; falta comprobar visualmente la navegación y envío al WhatsApp.
5. **Marcas:** aplicado localmente: galería de los 11 logos recibidos, sin detalles de garantía/certificación no respaldados.
6. **Crédito:** aplicado: consulta informativa por WhatsApp sin fórmula, monto, plazo ni promesa de aprobación.
7. **Privacidad y datos.** Inventariar los datos que solicitan el cotizador y el formulario de contacto. Recibir NIT/RUT, dirección legal y correo para asuntos de datos; preparar política y aceptación antes de habilitar una recopilación que dependa de ella.
8. **Pulido, SEO y accesibilidad.** Revisar jerarquía visual, móvil, teclado, etiquetas, título/descripción y textos alternativos sin inventar ubicaciones, horarios o marcas.
9. **Prueba final y entrega.** Compilar; revisar en escritorio y móvil; probar enlaces y flujo de cotización solo contra destino confirmado. Guardar versión local en Git. El despliegue web se hace aparte y requiere autorización para el destino.

## Respuestas confirmadas y datos aún pendientes

- **Ya confirmado:** no se incluyen reglas de crédito aún; los logos recibidos se pueden mostrar; teléfono/dirección/email son vigentes; no Maps; mantener Contacto; sin testimonios ni misión/visión; 10 por página y sin fotos.
- **Pendiente para futuras mejoras:** NIT/RUT y datos del responsable de privacidad para política; revisión de productos clasificados por nombre; reglas oficiales si en algún momento se desea describir las condiciones de crédito; revisión visual final y autorización de publicación.

## Secuencia para usar el plan recibido

El archivo original `Plan De Mejora/17-distribuidora-dym/plan-mejoras.md` y sus materiales siguen intactos. El sitio conserva el framework actual y la pantalla de contacto. La instalación de skills, política de datos, SEO, revisión visual completa y publicación quedan por hacer cuando corresponda.
