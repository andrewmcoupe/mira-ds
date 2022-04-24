import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    dir: "./src",
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    deps: {
      inline: ["framer-motion"],
    },
  },
});
