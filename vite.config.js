import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "named",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],

  resolve: {
    alias: {
      "@": "/src",
      "@structure": "/src/layout",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@assets": "/src/assets",
      "@icons": "/src/assets/svg",
    },
  },
});
