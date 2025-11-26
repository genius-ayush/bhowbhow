import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['app.bhaobhao.in'],
    port: 4173, // or whatever you use
  }
})