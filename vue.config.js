const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@imgs', path.resolve(__dirname, 'src/assets/images'))
    config.module.rule('markdown')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        sassOptions: {
          includePaths: ['src/assets/styles']
        }
      }
    }
  },
  devServer: {
    open: true
  }
}
