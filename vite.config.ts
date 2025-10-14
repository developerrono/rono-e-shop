import { defineConfig } from "vite";
import type { Plugin } from "vite";
import react from '@vitejs/plugin-react-swc';
import path from "path";

export const componentTagger = (): Plugin => ({
  name: "component-tagger",
  // add hooks as needed, e.g. transform, load, etc.
});
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

