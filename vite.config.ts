import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteExternalsPlugin } from "vite-plugin-externals";
import { appendHotReloadEventPlugin } from "@superblocksteam/vite-custom-component-reload-plugin";

const port = 3002;
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/main.tsx",
      preserveEntrySignatures: "strict",
      output: {
        entryFileNames: "[name].js",
      },
    },
    copyPublicDir: true,
    write: true,
  },
  publicDir: "../host",

  base: `http://localhost:${port}/`,
  server: {
    port: port,
  },
  plugins: [
    react(),
    viteExternalsPlugin({
      react: "React",
      "react-dom": "ReactDOM",
    }),
    appendHotReloadEventPlugin(),
  ],
});
