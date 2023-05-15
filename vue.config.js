const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    entry : './examples/main.js'
  }
})

// module.exports = {
//   entry: './examples/main.js'
// }