const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    port:9000,
    contentBase: './dist',

  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: false,
  },
  module: {
    rules: [
     {

       test: /\.(png|svg|jpg|jpeg|gif)$/i,

       type: 'asset/resource',

     },
    ],
  },
};