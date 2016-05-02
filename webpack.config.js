// webpack.config.js
var webpack = require('webpack');
var path = require('path');

var config = {
  entry: __dirname + '/src/main.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: 'sortian.js',
    library: 'sortian',
    libraryTarget: 'umd',
    umdNameDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  }
};

module.exports = config;
