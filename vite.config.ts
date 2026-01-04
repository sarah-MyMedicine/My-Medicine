
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  define: {
    // Explicitly define process.env.API_KEY to ensure it's available in the client bundle
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  }
});
