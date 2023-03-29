import { defineConfig } from 'vite'
import { resolve } from 'path'

const sourceDirectory = resolve(__dirname, 'public')

export default defineConfig({
  root: sourceDirectory,
  plugins: [],
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        
      }
    }
  }
})
