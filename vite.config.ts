import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite'
import tsConfigPath from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  envDir: "./env",
  plugins: [react(), svgr(), tailwindcss(), tsConfigPath()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    watch: {
      usePolling: true,
    },
  },


})
