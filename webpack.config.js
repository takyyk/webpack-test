const path = require('path')

const outputPath = path.resolve(__dirname, 'dist')
console.log({outputPath})

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './src/index.js',
    path: outputPath
  }
}
