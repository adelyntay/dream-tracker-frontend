import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
       "/api": process.env.SERVER,
      //  "/api": "http://127.0.0.1:5000",
      },
    },
});
