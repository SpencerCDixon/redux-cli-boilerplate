var path = require('path');
var webpack = require('webpack');

// Webpack Plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');

// PostCSS Plugins
var postcssImport = require('postcss-import');

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
      { test: /\.css$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss' },
      { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' },
    ],
  },
  postcss: function(webpack) {
    return [
      postcssImport({ addDependencyTo: webpack }),
    ];
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/static/index.template.html',
      inject: 'body',
      filename: 'index.html'
    }),
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
