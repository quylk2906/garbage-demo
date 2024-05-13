import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://quylk2906.github.io/garbage-demo',
  plugins: [react()],
});
