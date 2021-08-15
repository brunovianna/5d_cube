const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');


module.exports = merge(common, {

  mode: 'production',
  devtool: 'source-map',

 module: {
    rules: [
     {

       test: /\.(png|svg|jpg|jpeg|gif)$/i,

       type: 'asset/resource',

     },
     {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        },
    ],
  }});

  