const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssextractCssPlugin = require('mini-css-extract-plugin')
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          MiniCssextractCssPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\/html$/,
        loader: 'html-loader'
      }
    ]
  },
  devServer: {
    contentBase:outputPath
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: "./src/index.html",
        filename: './index.html'
      }
    ),
    new MiniCssextractCssPlugin({
      filename: '[name].[hash].css'
    })
  ]
}
