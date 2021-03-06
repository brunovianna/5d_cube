const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');


module.exports = merge(common, {

  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {

    port:9000,

    contentBase: './dist',

  },
  module: {
    rules: [
     {

       test: /\.(png|svg|jpg|jpeg|gif)$/i,

       type: 'asset/resource',

     },
    //  {
    //   test: /\.css$/i,
    //   use: ['style-loader', 'css-loader'],
    //   },
      {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      },
    ],
  },
});