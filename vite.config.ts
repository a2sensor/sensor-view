import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    'process.env.IS_SERVER': JSON.stringify(process.env.IS_SERVER)
  },
  plugins: [solid()],
});
