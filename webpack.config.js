var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: path.join(__dirname, '/src/app.jsx'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}