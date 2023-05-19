const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9800',
        // pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    },
  },

  publicPath: './',    // 公共路径

  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{
        from: './static',
        to: './static',
      }])
    ]
  }
}
