const path = require('path');

const paths = {
  root: path.resolve(__dirname, '../../'),
  outputPath: path.resolve(__dirname, '../../', 'build'),
  entryPath: path.resolve(__dirname, '../../', 'src'),
  publicPath: path.resolve(__dirname, '../../', 'public'),
  templatePath: path.resolve(__dirname, '../../', 'src/template.html'),
  assetsPath: path.resolve(__dirname, '../../', 'assets'),
};

module.exports = paths;
