import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Beachte das '@' vor vitejs/plugin-react

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Füge diese Zeile hinzu:
  base: '/Free-ai/', // WICHTIG: '/Free-ai/' muss exakt dem Namen deines GitHub-Repositorys entsprechen und mit einem Schrägstrich enden!

  optimizedDeps: {
    exclude: ['lucide-react'],
  },
});
