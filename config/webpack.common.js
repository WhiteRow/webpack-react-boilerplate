const webpack = require('webpack');
const { merge } = require('webpack-merge');
const paths = require('./modules/paths');
const scripts = require('./modules/scripts');
const htmlExtract = require('./modules/html.extract');

const commonConfig = merge(
  {
    entry: [paths.entryPath],
    output: {
      path: paths.outputPath + '/index.js',
      filename: 'bundle.js',
    },

    target: 'web',

    resolve: {
      extensions: ['*', '.js', '.jsx', 'scss'],
    },

    plugins: [new webpack.ProgressPlugin()],
  },

  htmlExtract(),
  scripts()
);

module.exports = commonConfig;
