import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import dotenv from "dotenv";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// Load environment variables from .env file
dotenv.config();

// Astro configuration
export default defineConfig({
  output: "server",
  integrations: [
    react(),
    tailwind({
      // Option to disable base styles
      // applyBaseStyles: false,
    }),
  ],
  adapter: node({ mode: "standalone" }),
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "[name]-[hash].js",
        },
      },
    },
  },
});
