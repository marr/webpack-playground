const path = require('path');
const { DllPlugin } = require('webpack');

module.exports = {
  entry: ['lodash'],
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, 'dist'),
    //library: '[name]_[fullhash]'
  },
  plugins: [
    new DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, 'dist/manifest.json'),
    })
  ]
};
