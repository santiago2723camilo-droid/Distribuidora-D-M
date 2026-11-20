---
tipo: decisiones
estado: vigente
creado: 2026-10-28
actualizado: 2026-11-20
tags: [decisiones, proyecto]
fuentes: ["AGENTS.md", "Docs/DISTRIBUIDORA_DYM worddd (1).docx", "Docs/LOGO DISTRIBUIDORA DYM.pdf", "../../inventario 04-11.xlsx"]
---

# Decisiones

## 2026-10-28 — Mantener la app existente y separar los originales

- **Decisión confirmada por las instrucciones del usuario:** conservar framework y organización de React/Vite y trabajar sobre la copia extraída en `trabajo/landing-google-ai-studio/`.
- **Motivo:** el ZIP aporta código funcional de una landing; no hace falta reconstruir el sitio.
- **Fuente:** `distribuidora-d&m.zip` (original, raíz) y `AGENTS.md`.

## 2026-10-28 — Docs es fuente privada no versionada

- **Decisión confirmada por las instrucciones del usuario:** `Docs/` contiene originales y queda excluida del repositorio local junto al ZIP.
- **Motivo:** proteger archivos empresariales originales y respetar su inmutabilidad.
- **Fuente:** instrucciones de este chat; reglas en `AGENTS.md` y `.gitignore`.

## 2026-10-28 — No elegir aún activos o marcas para publicación

- **Decisión provisional del agente:** catalogar las marcas sin copiarlas a la web hasta aclarar cuáles son aliados vigentes y autorizados.
- **Motivo:** hay marcas en imágenes que no figuran como aliados en el borrador.
- **Fuente:** `Docs/DISTRIBUIDORA_DYM worddd (1).docx` y las imágenes referidas en [[documentos-y-activos]].

## 2026-10-28 — Integrar el logo D&M en el encabezado

- **Decisión confirmada por el usuario:** usar el logo que ya estaba en Docs.
- **Implementación:** crear un derivado PNG recortado desde el PDF original y servirlo localmente; se quitó el logo remoto y el rótulo duplicado. En móvil, el acceso rápido al crédito se trasladó al menú, donde ya existía, para que el logo y los controles quepan.
- **Fuente:** `Docs/LOGO DISTRIBUIDORA DYM.pdf` y solicitud del usuario.

## 2026-10-28 — Destino GitHub solicitado

- **Decisión confirmada por el usuario:** usar `https://github.com/santiago2723camilo-droid/Distribuidora-D-M.git` y publicar la rama `main`.
- **Estado:** autenticación completada en Git Credential Manager y rama `main` publicada en el remoto. El despliegue web sigue siendo una acción separada.

## 2026-11-06 — Eslogan y contacto

- **Decisión confirmada por el usuario:** reemplazar el título principal por «D&M, Soluciones para cada necesidad», retirar el PBX de la landing y usar `distri.dym13@gmail.com` como correo.
- **Implementación:** se actualizó el título del inicio; se quitaron los bloques de PBX del pie y de la pantalla Contacto; el correo nuevo aparece en ambas ubicaciones como enlace `mailto:`.
- **Fuente:** solicitud del usuario del 2026-11-06.

## 2026-11-06 — Inventario, marcas y contenido

- **Confirmado por el usuario:** el inventario recibido es la lista de productos para el catálogo; usar las tres categorías existentes, 10 por página y sin fotos de producto. Mostrar todos los logos compartidos. Quitar testimonios; no añadir misión ni visión. Conservar Contacto, el teléfono y la dirección confirmados; no agregar Maps.
- **Implementación:** se integraron 1.492 nombres únicos del inventario, clasificados por reglas basadas en el nombre: 156 eléctricos, 285 sanitarios y 1.051 construcción/ferretería. Dos renglones repetidos del archivo se registraron una sola vez en la vista. La clasificación queda provisional para correcciones de la empresa.
- **Implementación:** se copiaron 11 logos elegidos desde `Docs/` a `public/brand/partners/`; los originales permanecen intactos. Se retiraron stock y precios del sitio y el cálculo de crédito; las consultas se hacen por WhatsApp.
- **Fuente:** respuestas del usuario del 2026-11-06, `../../inventario 04-11.xlsx` y los 11 originales de marca listados en [[documentos-y-activos]].

## 2026-11-13 — Paso 3: pie y contacto

- **Decisión confirmada por el usuario:** conservar la pantalla Contacto y no añadir el enlace de Maps.
- **Motivo:** estas preferencias actuales difieren de las acciones propuestas en el Paso 3 del plan original. Se mantienen vigentes y no se revierte el trabajo anterior.
- **Resultado de revisión:** correo, WhatsApp y dirección ya están en el pie y en Contacto; PBX y Maps no aparecen en el código de la landing. No hizo falta modificar esos componentes.
- **Fuente:** indicaciones del usuario del 2026-11-06 y verificación de `trabajo/landing-google-ai-studio/src/` el 2026-11-13.

## 2026-11-13 — Guía para fotografiar productos

- **Decisión provisional del agente:** reutilizar una imagen en variantes cuyo nombre conserva la familia y solo cambia la medida, y en aerosoles de igual tipo que cambian de color; separar calificadores como “industrial” y distintos acabados/tipos.
- **Motivo:** reducir tomas repetidas siguiendo los ejemplos del usuario, manteniendo grupos conservadores por nombre.
- **Límite:** la comparación de forma, material, marca, empaque y acabado requiere revisar físicamente los productos; la lista no significa que las imágenes ya existan ni que se hayan integrado en la web.
- **Fuente:** solicitud del usuario del 2026-11-13 y `trabajo/landing-google-ai-studio/src/data/inventoryCatalog.json`.

## 2026-11-20 — Misión, visión y catálogo

- **Instrucción del usuario:** redactar una misión y una visión sencillas y continuar con el siguiente paso del plan.
- **Implementación local:** se añadieron textos de misión/visión a Nosotros. Son una propuesta redactada por el agente a solicitud del usuario; no aparecen en las fuentes empresariales originales.
- **Paso 5 comprobado:** primera y última páginas, filtro/búsqueda, conservación de categoría y producto seleccionado al cambiar de página. Se mantuvieron las 10 tarjetas por página y el catálogo sin fotos.
- **Fuente:** solicitud del usuario del 2026-11-20; para el contexto empresarial, `Docs/DISTRIBUIDORA_DYM worddd (1).docx`.
