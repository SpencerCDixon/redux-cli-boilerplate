const path = require('path');
const webpack = require('webpack');

// Webpack Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// PostCSS Plugins
var postcssImport = require('postcss-import');
var cssnano       = require('cssnano');

// Configuration variables
const PATHS = {
  entry: path.resolve('src', 'index.js'),
  output: path.resolve('dist'),
};

const modulesHash = 'localIdentName=_[local]_[hash:base64:5]'

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
        loader: ExtractTextPlugin.extract('style', `css?modules&importLoaders=1&${modulesHash}!postcss`)
      },
      { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' },
    ],
  },
  postcss: function(webpack) {
    return [
      postcssImport({ addDependencyTo: webpack }),
      cssnano({
        autoprefixer: {
          add: true,
          remove: true,
          browsers: ['last 2 versions']
        },
        discardComments: {
          removeAll: true
        },
        discardUnused: false,
        mergeIdents: false,
        reduceIdents: false,
        safe: true,
        sourcemap: true
      })
    ];
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/static/index.template.html',
      inject: 'body',
      filename: 'index.html',
      favicon: 'src/static/favicon.ico',
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
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
