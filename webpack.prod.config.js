const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  entry: path.resolve('src', 'index.js'),
  output: path.resolve('dist'),
};

const modulesHash = 'localIdentName=[name]_[local]_[hash:base64:5]'

module.exports = {
  entry: {
    app: PATHS.entry,
    vendor: [
      'react',
      'react-dom',
      'axios',
      'react-router',
      'redux',
      'react-redux',
      'auth0-lock',
      'auth0-js',
      'redux-thunk',
    ]
  },
  output: {
    path: PATHS.output,
    filename: '[name]-[hash].js',
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
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', `css?modules&${modulesHash}!postcss`)
      },
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
      filename: 'index.html',
      favicon: 'src/static/favicon.ico',
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      '__DEV__': false,
      '__PROD__': true,
    }),
    new ExtractTextPlugin("[name]-[hash].css")
  ],
}
