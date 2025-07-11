// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel"; // ✅ Updated import
// import node from "@astrojs/node"; // ✅ For preview support

export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server", // ✅ Needed for SSR
  adapter: vercel({}), // ✅ Use Node for both dev and preview
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
