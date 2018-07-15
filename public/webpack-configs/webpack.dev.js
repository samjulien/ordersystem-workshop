module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    publicPath: '/dist/',
    port: 9000,
    proxy: {
      '/api': 'http://localhost:9001'
    }
  }
};
