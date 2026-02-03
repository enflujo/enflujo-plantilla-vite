import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';

/**
 * CONFIGURACIÓN DE VITE
 *
 * Para GitHub Pages, cambia 'base' según dónde publiques:
 * - Si es un sitio personal (usuario.github.io): base: '/'
 * - Si es en un repositorio: base: '/nombre-repositorio/'
 */

// Detectar el entorno
const isProd = process.env.NODE_ENV === 'production';

// URL del sitio (cambiar en config.js)
const hostname = 'https://ejemplo.com';

export default defineConfig({
  // IMPORTANTE: Descomenta y ajusta según donde publiques en GitHub Pages
  // base: '/', // Para sitio personal usuario.github.io
  // base: '/mi-proyecto/', // Para proyecto en repositorio

  server: {
    port: 3000,
  },
  publicDir: 'estaticos',
  build: {
    outDir: 'dist', // GitHub Pages busca aquí por defecto
    assetsDir: 'assets',
    sourcemap: false,
    // Optimizaciones para producción
    minify: 'terser',
    cssCodeSplit: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    sitemap({
      hostname,
      outDir: 'dist',
      robots: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      dynamicRoutes: ['/'],
    }),
  ],
});
