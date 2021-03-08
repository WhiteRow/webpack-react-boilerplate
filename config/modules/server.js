const paths = require('./paths');

const server = () => {
  return {
    devServer: {
      contentBase: paths.outputPath,
      overlay: true,
      port: 3030,
      progress: true,
      historyApiFallback: true,
      compress: true,
      hot: true,
    },
  };
};

module.exports = server;
