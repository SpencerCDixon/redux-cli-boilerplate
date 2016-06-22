var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Configuration variables
var PATHS = {
  entry: path.resolve('src', 'index.js'),
  output: path.resolve('dist'),
  images: path.resolve('src', 'images'),
};
var PORT = 3000;

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:' + PORT,
    PATHS.entry,
  ],
  output: {
    path: PATHS.output,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    root: [
      path.resolve(__dirname, './src'),
    ],
    extensions: ['', '.js', '.json', '.jsx', '.css'],
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: 'babel', },
      { test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]_[local]_[hash:base64:5]!postcss' },
      { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' },
    ],
  },
  postcss: [
    require('autoprefixer'),
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/static/index.template.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__DEV__': true,
      '__PROD__': false,
    })
  ],
  devServer: {
    port: PORT,
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
  }
}
