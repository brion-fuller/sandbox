import typescript from "rollup-plugin-typescript2";
import json from "rollup-plugin-json";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import unpkg from "rollup-plugin-unpkg";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.js",
      format: "esm"
    },
    {
      file: "dist/cjs/bundle.js",
      format: "cjs"
    }
  ],
  plugins: [
    json({ preferConst: true }),
    typescript(),
    unpkg(),
    serve(),
    livereload()
  ]
};
