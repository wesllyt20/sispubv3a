import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'

dotenv.config()

const publicPath = process.env.VITE_PUBLIC_PATH ? `/${process.env.VITE_PUBLIC_PATH}/` : '/'

export default defineConfig({
  server: { host: true },
  plugins: [vue()],
  base: publicPath,

});