// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless"; // ✅ Use this instead of @astrojs/node

export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server", // ✅ Needed for SSR
  adapter: vercel({}), // ✅ Adapter for Vercel deployment
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
