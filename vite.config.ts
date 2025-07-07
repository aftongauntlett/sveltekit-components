// vite.config.ts
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [svelte(), dts()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "sveltekit-components",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["svelte", "svelte/internal"],
    },
    outDir: "dist",
  },
});
