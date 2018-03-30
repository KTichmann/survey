const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, ''),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '')
  }
};
