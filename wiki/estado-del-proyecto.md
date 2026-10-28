---
tipo: estado-del-proyecto
estado: vigente
creado: 2026-10-28
actualizado: 2026-10-28
tags: [proyecto, landing, vite]
fuentes: ["trabajo/landing-google-ai-studio/package.json", "trabajo/landing-google-ai-studio/README.md"]
---

# Estado del proyecto

## Código y entorno

- **Confirmado:** ZIP original `distribuidora-d&m.zip` conservado intacto en la raíz. Copia extraída sin sobrescrituras a `trabajo/landing-google-ai-studio/`.
- **Confirmado:** React 19, TypeScript 7 y Vite 8; el proyecto también declara Express y `@google/genai`. No se cambió el framework.
- **Confirmado:** Node.js 24.21.0, npm 11.19.0 y Git 2.56.0.windows.2 están disponibles.
- **Confirmado:** scripts declarados `dev`, `build`, `preview`, `lint`; `dev` usa puerto 3000. `npm install` terminó y generó `package-lock.json`.
- **Confirmado:** npm reportó un hallazgo de baja severidad y scripts de dependencias no ejecutados automáticamente. No se ejecutó `npm audit fix`.
- **Confirmado:** se inicializó un repositorio Git local. Se configuró identidad solo en este repositorio con los datos entregados por el usuario; no se modificó la configuración global. El commit inicial `87d8073` contiene la copia del proyecto, el agente, la wiki y el logo; no se subió a un remoto.
- **Confirmado:** npm detectó incompatibilidad en el paquete original: Vite 8 admite esbuild `^0.27.0 || ^0.28.0`, mientras el proyecto fijaba `^0.25.0`. Se ajustó a `^0.27.0`, y la instalación/build terminaron correctamente.

## Página y publicación

- **Confirmado:** existe una landing con inicio, productos, aliados, nosotros y contacto, además de modales de cotización y crédito y un botón de WhatsApp.
- **Provisional:** la app parece construida para una fase de demostración; `mockData.ts` declara catálogo detallado, testimonios, crédito, cobertura, certificaciones, inventario, dirección y correo que aún no se verificaron con las fuentes de `Docs/`.
- **Confirmado:** el diseño del ZIP usa una foto de stock remota en la sección principal; los activos de Docs son logos, no fotos del negocio.
- **Confirmado:** build con `node .\node_modules\vite\bin\vite.js build` y TypeScript con `node .\node_modules\typescript\bin\tsc --noEmit` terminaron correctamente. Vite muestra una advertencia de compatibilidad futura por `__dirname` en `vite.config.ts`.
- **Confirmado:** el encabezado usa el logo local `public/brand/logo-dym.png`, generado al recortar el PDF original sin modificarlo. Ya no depende del logo remoto del código extraído.
- **Confirmado:** vista previa verificada en navegador a 1280 px y 375 px; logo y controles del encabezado visibles. A 320 px también se ve el logo, cotización y menú; el crédito permanece accesible dentro del menú. En la captura de 320 px se observa una barra horizontal en otra parte de la página, pendiente de localizar.
- **Confirmado:** Vite está activo en `http://127.0.0.1:3000/` y la vista quedó abierta en el navegador de Codex.
- **Pendiente:** localizar la causa de desplazamiento horizontal de la página a 320 px.
- **Confirmado:** remoto `origin` configurado como `https://github.com/santiago2723camilo-droid/Distribuidora-D-M.git`; rama local renombrada a `main`. `git ls-remote` no mostró ramas en el destino.
- **Pendiente:** la subida a GitHub no se completó porque Git necesita autenticación. No se publicaron commits; la rama local sigue limpia y lista para subir tras iniciar sesión.
- **Pendiente:** confirmar vigencia de los datos de contacto y recepción real de solicitudes.

## Comprobaciones

- **Confirmado:** se validó que las rutas del ZIP no salen de la carpeta de trabajo ni contienen enlaces simbólicos antes de extraerlo.
- **Confirmado:** PDF y DOCX leídos; se renderizaron y revisaron visualmente los dos PDF y las 11 imágenes JPEG.
- **Confirmado:** build y TypeScript sin errores mediante binarios locales; logo visible en vista previa de escritorio y móvil.
- **Pendiente:** los scripts `npm run` siguen teniendo el problema conocido con `&` en la ruta de Windows; los binarios directos funcionan. Enlaces y recepción de formularios no se probaron porque el cambio se limitó al encabezado.

## Próximo paso

Continuar con la revisión del desbordamiento de página a 320 px y validar los datos comerciales provisionales antes de cambiar contenido.
