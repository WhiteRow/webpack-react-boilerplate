const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlExtract = () => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack 5 react boilerplate',
        filename: 'index.html',
        template: paths.entryPath + '/template.html',
        favicon: paths.publicPath + '/favicon.ico',
      }),
    ],
  };
};

module.exports = htmlExtract;
