import {readFile} from 'node:fs/promises';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

const policyDraft: Plugin = {
  name: 'dym-local-privacy-draft',
  configureServer(server) {
    const source = path.resolve(server.config.root, '../../Docs/datos-personales/politica-tratamiento-datos.html');
    server.middlewares.use(async (request, response, next) => {
      if (request.url !== '/politica-de-datos.html') return next();
      if (request.method !== 'GET' && request.method !== 'HEAD') return next();
      if (!['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(request.socket.remoteAddress ?? '')) {
        response.writeHead(404).end();
        return;
      }

      const draft = await readFile(source, 'utf8').catch(() => null);
      if (draft === null) {
        response.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'}).end('Borrador local no disponible.');
        return;
      }

      response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Robots-Tag': 'noindex, nofollow',
      }).end(request.method === 'HEAD' ? undefined : draft);
    });
  },
};

export default defineConfig(({command, mode}) => {
  const reviewPrivacy = command === 'serve' && mode === 'privacy-draft';
  return {
    plugins: [react(), tailwindcss(), reviewPrivacy && policyDraft],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      ...(reviewPrivacy && {host: '127.0.0.1'}),
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
