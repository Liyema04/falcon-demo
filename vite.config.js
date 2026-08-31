import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts : ['felisha-nonpartible-joe.ngrok-free.dev']
  },

  plugins: [
    react(),
  ],
})
