const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {



  plugins: [

    new HtmlWebpackPlugin({

      title: 'Penteract',
      template: './src/index.html'

    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  output: {
    filename: 'main.[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  entry: {
    data: './src/data.js',
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    penteract: {
      import: './src/penteract.js',
      dependOn: 'shared',
    },
    navigation: {
        import: './src/navigation.js',
        dependOn: 'shared',
      },
      shared: 'three',
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  
  },
};