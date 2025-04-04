import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~widgets': '/src/widgets',
      '~entities': '/src/entities',
      '~features': '/src/features',
      '~shared': '/src/shared',
    },
  },
});
