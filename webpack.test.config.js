var path = require('path');
var webpack = require('webpack');

// PostCSS Plugins
var postcssImport    = require('postcss-import');
var postcssVariables = require('postcss-advanced-variables');
var cssConfig        = path.join(__dirname, 'src', 'styles', 'css-global-vars.js');

module.exports = {
  entry: undefined,
  output: {
    libraryTarget: 'commonjs2'
  },
  resolve: {
    root: [
      path.resolve(__dirname, './src'),
    ],
    extensions: ['', '.js', '.json', '.jsx', '.css'],
  },
  module: {
    loaders: [
      { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: 'babel', },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          __dirname + '/strip-composes',
          'postcss-loader',
        ].join('!')
      },
    ],
  },
  postcss: function(webpack) {
    return [
      postcssImport({ addDependencyTo: webpack }),
      postcssVariables({
        variables: require(cssConfig),
      })
    ];
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__DEV__': false,
      '__PROD__': false,
      '__TEST__': true,
    })
  ]
}
