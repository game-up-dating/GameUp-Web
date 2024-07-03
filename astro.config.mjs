import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import dotenv from "dotenv";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
dotenv.config();

export default defineConfig({
  output: "server",
  integrations: [
    react(),
    tailwind({
      // applyBaseStyles: false,
    }),
  ],
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
