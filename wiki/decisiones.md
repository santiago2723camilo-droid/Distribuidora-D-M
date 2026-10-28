---
tipo: decisiones
estado: vigente
creado: 2026-10-28
actualizado: 2026-10-28
tags: [decisiones, proyecto]
fuentes: ["AGENTS.md", "Docs/DISTRIBUIDORA_DYM worddd (1).docx", "Docs/LOGO DISTRIBUIDORA DYM.pdf"]
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
