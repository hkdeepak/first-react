import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/firstreact",
  plugins: [react()],
  base:"/vite-deploy"
})
