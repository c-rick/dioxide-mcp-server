import { defineConfig } from "tsup";


export default defineConfig({
  clean: true,
  entry: ["src/index.ts"],
  format: ["esm"],
  // minify: true,
  target: "esnext",
  outDir: "lib",
  outExtension: ({ format }) => ({
    js: ".js",
  }),
  onSuccess: "node lib/index.js",
});