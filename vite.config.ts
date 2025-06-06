import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/proyecto-react/', // Reemplaza con el nombre real del repo
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
