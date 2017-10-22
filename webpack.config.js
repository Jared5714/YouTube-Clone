module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline: true,
    host: process.env.IP,
    port: process.env.PORT,
    public: process.env.C9_HOSTNAME
  }
};
