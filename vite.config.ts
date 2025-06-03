import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/elj4so/proyecto-react.git', // Reemplaza con el nombre real del repo
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
