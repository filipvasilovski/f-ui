import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      formats: ["es"],
      name: "FVue"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          Vue: "vue"
        }
      }
    }
  },
  plugins: [
    vue(),
    dts({ tsconfigPath: "./tsconfig.app.json" }),
    cssInjectedByJsPlugin()
  ]
});
