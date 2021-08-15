const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {



  plugins: [

    new HtmlWebpackPlugin({

      title: 'Penteract',
      template: './src/index.html'

    }),

  ],
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: false,
  },
 

};