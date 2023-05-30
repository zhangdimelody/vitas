// import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';

export default {
  input: "main.js",
  output: [{
    file: "dist/index.js",
    format: "esm",
  },
  {
    file: "dist/index.min.js",
    format: "esm",
    plugins: [terser()]
  }],
  plugins: [
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码)
    }),
  ]
}