// import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';

const isBuild = process.env.NODE_ENV === 'production';
export default {
  input: "main.js",
  output: [{
    file: "dist/index.js",
    format: "esm",
  },
  {
    file: "dist/index.es.js",
    format: "esm",
    // plugins: [terser()]
  },
  {
    file: "dist/index.cjs.js",
    format: "cjs",
    // plugins: [terser()]
  },
  {
    file: "dist/index.umd.js",
    format: "umd",
    name: "vitasUtils",
    // plugins: [terser()]
  }],
  plugins: [
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
      runtimeHelpers: true,      // 使plugin-transform-runtime生效
    }),
    isBuild && terser()
  ]
}