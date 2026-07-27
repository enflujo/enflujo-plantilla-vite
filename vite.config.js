import { defineConfig } from 'vite';
import sitemap from 'vite-plugin-sitemap';

// Configuración centralizada
const hostname = 'https://ejemplo.com'; // Cambiar por tu dominio

export default defineConfig({
  // base: '/', // Usar '/nombre-repo/' si se publica en GitHub Pages u otra subruta
  server: {
    port: 3000,
  },
  publicDir: 'estaticos',
  build: {
    outDir: 'publico',
    assetsDir: 'estaticos',
    sourcemap: false,
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
      outDir: 'publico',
      robots: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      dynamicRoutes: [
        '/', // Agregar aquí rutas adicionales si las hay
      ],
    }),
  ],
});
