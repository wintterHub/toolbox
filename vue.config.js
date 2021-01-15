const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  publicPath: './dist',    // 公共路径

  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{
        from: './static',
        to: './static',
      }])
    ]
  }
}
