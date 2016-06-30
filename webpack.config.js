var path = require('path');
var webpack = require('webpack');

// Webpack Plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

// PostCSS Plugins
var postcssImport    = require('postcss-import');
var postcssReporter  = require('postcss-reporter');
var postcssFocus     = require('postcss-focus');
var postcssVariables = require('postcss-advanced-variables');

// Configuration variables
var PATHS = {
  source: path.resolve('src'),
  entry: path.resolve('src', 'index.js'),
  output: path.resolve('dist'),
  images: path.resolve('src', 'images'),
  cssConfig: path.resolve('src', 'styles', 'css-global-vars.js'),
};
var PORT = 3000;

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: [
    'webpack-dev-server/client?http://localhost:' + PORT,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    PATHS.entry,
  ],
  output: {
    path: PATHS.output,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    root: [ PATHS.source ],
    extensions: ['', '.js', '.json', '.jsx', '.css'],
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: 'babel', },
      { test: /global.styles$/, loader: 'style!css!postcss' },
      { test: /\.css$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss' },
      { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' },
    ],
  },
  postcss: function(webpack) {
    return [
      postcssFocus(),
      postcssImport({ addDependencyTo: webpack }),
      postcssReporter({ clearMessages: true }),
      postcssVariables({
        variables: require(PATHS.cssConfig),
      }),
    ];
  },
  plugins: [
    new WebpackNotifierPlugin(),
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
