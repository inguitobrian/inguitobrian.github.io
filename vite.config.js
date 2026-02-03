import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // Faster dev server with caching
  server: {
    hmr: true,
    watch: {
      usePolling: false,
    },
  },
  // Optimize dependencies for faster cold starts
  optimizeDeps: {
    include: ["vue", "vue-router"],
  },
  // Build optimizations
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify for production
    minify: "esbuild",
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          vendor: ["vue", "vue-router"],
        },
      },
    },
  },
  // Asset handling
  assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png", "**/*.gif", "**/*.webp"],
});
