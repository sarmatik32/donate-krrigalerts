import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Якщо вихідний код у папці src:
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
  host: '0.0.0.0',
  port: 3000,
  allowedHosts: true,
  hmr: {
    clientPort: 443, // Допомагає Vite HMR працювати через хмарний проксі
  },
},
});