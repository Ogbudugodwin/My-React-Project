import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/My-React-Project/", // Replace with your repo name
});

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
