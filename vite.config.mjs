import { defineConfig } from 'vite'
import { resolve, parse } from 'path'
import fs from 'fs'

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
        ...(() => {
          const scanFolder = (folder, accu) => {
              const files = fs.readdirSync(folder).map(f => resolve(folder, f))

              files.filter(f => fs.lstatSync(f).isFile()).forEach(f => accu.push(f))
              files.filter(f => fs.lstatSync(f).isDirectory()).forEach(f => scanFolder(f, accu))
          }

          const files = []
          scanFolder('./public', files)
          const output = {}

          for(const i of files.filter((it) => it.endsWith(".html"))) {
            output[parse(i).name] = i 
          }

          return output
        })()
      }
    }
  }
})

console.log((() => {
  const scanFolder = (folder, accu) => {
      const files = fs.readdirSync(folder).map(f => resolve(folder, f))

      files.filter(f => fs.lstatSync(f).isFile()).forEach(f => accu.push(f))
      files.filter(f => fs.lstatSync(f).isDirectory()).forEach(f => scanFolder(f, accu))
  }

  const files = []
  scanFolder('./public', files)
  const output = {}

  for(const i of files.filter((it) => it.endsWith(".html"))) {
    output[parse(i).name] = i 
  }

  return output
})())