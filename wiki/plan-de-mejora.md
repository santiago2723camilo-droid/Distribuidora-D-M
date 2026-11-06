---
tipo: plan-de-mejora
estado: en-validacion
creado: 2026-11-06
actualizado: 2026-11-06
tags: [plan, landing, mejoras]
fuentes: ["Plan De Mejora/17-distribuidora-dym/plan-mejoras.md", "Plan De Mejora/17-distribuidora-dym/validacion-con-cliente.md", "trabajo/landing-google-ai-studio/src/"]
---

# Plan de mejora de la landing D&M

Esta hoja adapta el plan recibido al código y a los materiales que sí existen. Los originales de `Plan De Mejora/` y `Docs/` se conservan intactos. Cada paso debe revisarse antes de marcarse como terminado; los datos provisionales no se presentan como hechos.

## Revisión del estado real

- **Confirmado:** la aplicación está hecha con React, TypeScript y Vite. Tiene inicio, catálogo, aliados, nosotros y contacto; son pantallas dentro de una sola aplicación.
- **Confirmado:** el catálogo y sus productos viven en `src/data/mockData.ts`. El carrito se mantiene en `App.tsx` y la cotización se arma en `QuoteModal.tsx` para enviarse a WhatsApp.
- **Provisional / de alto riesgo:** los datos de productos, stock, marcas, testimonios, cobertura, horarios, crédito y varias afirmaciones del código son datos de demostración y requieren validación contra fuentes de la empresa.
- **Confirmado:** la simulación de crédito calcula un cupo con una fórmula fija en `CreditModal.tsx` y comunica un plazo de 30 a 45 días. No se encontró respaldo documental para esa regla; debe desactivarse o convertirse en consulta cuando el cliente confirme que no hay reglas oficiales.
- **Confirmado:** la pantalla de contacto reúne canales, horario y un formulario que prepara un mensaje para WhatsApp. No se ha probado la recepción del mensaje. El usuario solicitó cambiar el eslogan, retirar el PBX y actualizar el correo; estos tres cambios ya se aplicaron localmente.
- **Confirmado:** el logo ya está en el encabezado. Persisten textos como «SKU» visibles en inicio, catálogo y cotizador.
- **Confirmado:** `Docs/` contiene documentos empresariales, un borrador visual y el logo, además de imágenes de marcas. No hay un catálogo real completo, testimonios autorizados, fotos de categorías, misión/visión, dirección de Maps o reglas de crédito confirmadas en el inventario actual.
- **Pendiente:** comprobar compilación y visualización de los cambios actuales; revisar desbordamiento en 320 px; desplegar la página en un servicio público (la sincronización con GitHub no constituye despliegue).

## Cambios aplicados en esta sesión

- **Confirmado por el usuario:** eslogan exacto: «D&M, Soluciones para cada necesidad».
- **Confirmado por el usuario:** quitar PBX de la pantalla de contacto y del pie de página.
- **Confirmado por el usuario:** correo nuevo: `distri.dym13@gmail.com`; se vinculó para abrir el correo desde ambas ubicaciones.
- **Pendiente:** la pantalla Contacto completa continúa disponible. El plan recibido propone eliminarla, pero esta hoja no lo da por aprobado todavía.

## Ruta de trabajo

0. **Preparar las skills del plan.** En `Plan De Mejora/17-distribuidora-dym/` están los ZIP de SEO y tratamiento de datos. Revisarlos e instalar sus carpetas completas en `.agents/skills/` antes de esos pasos; las skills de diseño citadas en `instalar-skills.md` no aparecen en este proyecto y su instalación queda pendiente.
1. **Validar información empresarial y los flujos actuales.** Responder las preguntas de abajo y relacionar cada respuesta con el material de `Docs/`. No cambiar aún testimonios, marcas, condiciones ni teléfonos no confirmados.
2. **Cerrar el contenido y los contactos.** Confirmar canales (correo actualizado; PBX quitado), decidir si se conserva la pantalla Contacto, y reemplazar cualquier dato ficticio o retirarlo. Agregar Maps solo con enlace entregado por la empresa.
3. **Ajustar lenguaje y contenido.** Cambiar «SKU» por «producto» donde sea texto dirigido al cliente. Integrar misión y visión únicamente si se reciben sus versiones oficiales. Quitar testimonios de muestra y afirmaciones de crédito, stock o entrega que no estén respaldadas.
4. **Catálogo y cotización.** Recibir catálogo real categorizado; agregar paginación conservando búsqueda, filtros y selección. Confirmar cantidad por página. Verificar agregar, modificar, quitar y enviar exactamente los productos y cantidades seleccionados al WhatsApp autorizado. Las tarjetas con fotos se prueban como opción reversible usando imágenes aprobadas.
5. **Marcas y aliados.** Confirmar qué marcas se distribuyen y qué logos se pueden publicar; aclarar nombres que difieren entre documentos e imágenes. Después, implementar carrusel pausible y fichas emergentes accesibles, solo para los aliados autorizados.
6. **Crédito sin promesas.** Recibir reglas oficiales. Si no existen, retirar el cálculo fijo actual y dejar una consulta informativa por un canal aprobado, con texto claro de que está sujeto a estudio y negociación. No mostrar montos estimados ni plazos no autorizados.
7. **Privacidad y datos.** Inventariar los datos que solicitan el cotizador y el formulario de contacto. Recibir NIT/RUT, dirección legal y correo para asuntos de datos; preparar política y aceptación antes de habilitar una recopilación que dependa de ella.
8. **Pulido, SEO y accesibilidad.** Revisar jerarquía visual, móvil, teclado, etiquetas, título/descripción y textos alternativos sin inventar ubicaciones, horarios o marcas.
9. **Prueba final y entrega.** Compilar; revisar en escritorio y móvil; probar enlaces y flujo de cotización solo contra destino confirmado. Guardar versión local en Git. El despliegue web se hace aparte y requiere autorización para el destino.

## Preguntas necesarias para continuar

1. **Crédito:** ¿qué datos solicita la simulación y qué reglas oficiales usa? Si no hay fórmula aprobada, ¿autorizas que quite el cálculo y deje solo una consulta por WhatsApp, aclarando que está sujeto a estudio y negociación?
2. **Marcas:** ¿qué marcas son aliadas vigentes y autorizas mostrar sus logos? ¿JC Top corresponde a JC Tools? ¿Qué marcas de las imágenes de `Docs/` se pueden publicar?
3. **Contacto:** ¿siguen vigentes el WhatsApp `+57 316 460 2821` y la dirección actual del código? ¿Cuál es el enlace de Maps? ¿Quieres conservar la pantalla Contacto además del correo en el pie?
4. **Contenido de confianza:** ¿puedes compartir misión y visión oficiales y testimonios reales con autorización y calificación? Si no, ¿prefieres que quite los testimonios de muestra?
5. **Catálogo:** ¿cuántos productos por página prefieres? ¿Puedes agregar a `Docs/` el catálogo vigente y fotos por categoría que autorices para una prueba visual?

## Secuencia para usar el plan recibido

El archivo original `Plan De Mejora/17-distribuidora-dym/plan-mejoras.md` sigue disponible. Su paso de logo quedó atendido; el paso de pie/contacto quedó parcialmente atendido con el cambio de correo y retiro del PBX. Los pasos posteriores esperan las respuestas y fuentes indicadas aquí. Esta hoja evita marcar pasos como terminados antes de verificarlos.
