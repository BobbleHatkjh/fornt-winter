module.exports = {
  outputDir: 'dist',
  publicPath: './',

  //axios域代理，解决axios跨域问题
  devServer: {
    proxy: {
      '': {
        target: 'http://123.57.56.22:8090/',
        changeOrigin: true,
        ws: true,
      }
    }
  }


};
