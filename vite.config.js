import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',  // This should point to where your index.html is
  build: {
    outDir: 'dist'
  }
})
