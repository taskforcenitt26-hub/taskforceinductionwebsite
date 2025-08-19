import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Set the base URL for the application
  esbuild: {
    drop: ['console', 'debugger']
  },
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true // This helps with client-side routing
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
})