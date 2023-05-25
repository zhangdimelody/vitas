// import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
export default {
  input: "main.js",
  output: [{
    file: "dist/index.js",
    format: "cjs",
  },
  {
    file: "dist/index.min.js",
    format: "iife",
    name: "vitasUtils",
    plugins: [terser()]
  }]
}