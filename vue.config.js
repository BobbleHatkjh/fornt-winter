module.exports = {
  outputDir: 'dist',
  publicPath: './',
  // publicPath: process.env.NODE_ENV === 'production' ? './vant-demo/' : './'

//   <script src="//cdn.jsdelivr.net/npm/eruda"></script>
//   <script>
//    eruda.init();
//    console.log('控制台打印信息');
//    </script>

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
