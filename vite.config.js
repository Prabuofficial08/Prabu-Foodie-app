import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Prabu-Foodie-app/', // Ensure this matches your repository name
  plugins: [react()],
});
