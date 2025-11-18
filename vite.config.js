import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.ogg'],
  preview: {
    port: 4000,
    host: true,
  },
  server: {
    port: 5173,
    host: true,
  },
})
