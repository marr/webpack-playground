const path = require('path');
const { DllReferencePlugin, DllPlugin } = require('webpack');

module.exports = {
  entry: ['lodash'],
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, 'dist'),
    library: '[name]'
  },
  plugins: [
    new DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'dist/manifest.json'),
    })
  ]
};
