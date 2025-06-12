import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://GuillermoFraija.github.io/tree/main/projects/00-random-quote-machine",
});
