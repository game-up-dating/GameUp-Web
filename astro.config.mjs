import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import dotenv from "dotenv";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// Load environment variables from .env file
import netlify from "@astrojs/netlify";
dotenv.config();

// Astro configuration

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    react(),
    tailwind({
      // Option to disable base styles
      // applyBaseStyles: false,
    }),
  ],
  adapter: netlify({
    edgeMiddleware: true,
  }),
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
