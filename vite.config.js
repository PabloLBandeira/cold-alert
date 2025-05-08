import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/cold-alert/",
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs', 
  },
})

