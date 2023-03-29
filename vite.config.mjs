import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, parse } from 'path'
import fs from 'fs'

const sourceDirectory = resolve(__dirname, 'public')

export default defineConfig({
  root: sourceDirectory,
  plugins: [react()],
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
