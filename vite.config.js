import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.Vite_Base_Path || '/FellowShip-Projects/blob/main/src/App.jsx',
})
