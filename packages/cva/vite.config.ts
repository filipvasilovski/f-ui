import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { relative, extname } from "node:path";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      formats: ["es"],
      name: "FVue"
    },
    rollupOptions: {
      external: ["class-variance-authority"],
      input: Object.fromEntries(
        glob
          .sync("src/**/*.{ts,tsx}", {
            ignore: ["src/**/*.d.ts"]
          })
          .map((file) => [
            // The name of the entry point
            // src/nested/foo.ts becomes nested/foo
            relative("src", file.slice(0, file.length - extname(file).length)),

            // The absolute path to the entry file
            // src/nested/foo.ts becomes /project/src/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url))
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  },
  plugins: [dts({ tsconfigPath: "./tsconfig.app.json" }), libInjectCss()]
});
