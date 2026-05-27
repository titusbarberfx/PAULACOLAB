import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    // Skip type checking — esbuild handles transpilation, no tsc needed
    sourcemap: false,
    // Videos are large — serve from CDN as separate files, never inline
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Split vendor chunk so React is cached independently
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
