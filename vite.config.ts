import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Beachte das '@' vor vitejs/plugin-react

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Füge diese Zeile hinzu:
  base: '/', // Default to root (overridden by CLI flag for GitHub Pages)

  optimizedDeps: {
    exclude: ['lucide-react'],
  },
});
