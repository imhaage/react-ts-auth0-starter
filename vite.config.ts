import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  server: {
    https: true
  },
  plugins: [
    mkcert({ force: true, hosts: ["localhost", "app.dev"] }),
    react(),
    tsconfigPaths()
  ],
  define: {
    "process.env": {}
  }
});
