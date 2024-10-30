import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  build: {
    rollupOptions: {
      input: '/path/to/your/entry/index.html'
    }
  }
}
