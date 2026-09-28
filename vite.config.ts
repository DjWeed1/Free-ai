import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative assets keep the production build usable from a repository subpath
  // as well as from a normal root deployment.
  base: './',
  optimizedDeps: {
    exclude: ['lucide-react'],
  },
});
