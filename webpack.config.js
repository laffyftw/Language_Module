const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.mjs',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};