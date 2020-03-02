const path = require('path');
const { DllReferencePlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new DllReferencePlugin({
      context: '.',
      manifest: path.resolve(__dirname, 'dist/manifest.json'),
      //sourceType: 'commonjs2'
    })
  ]
};

