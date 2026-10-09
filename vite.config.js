import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/cleanlink-project-website/",
  server: { host: "127.0.0.1" },
});
