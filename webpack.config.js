const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
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
    )
  ]
}
