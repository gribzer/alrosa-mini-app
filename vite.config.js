import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    cors: true,
    allowedHosts: ['alrosa-mini-app.ru'], // Разрешаем открывать с этого домена
    hmr: process.env.NODE_ENV === "development" ? true : false, // Отключаем HMR в продакшене
  }
});
