const paths = require('./paths');

const assetsExtract = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpg)$/,
          type: 'assets/resource',
          generator: {
            filename: paths.assetsPath + '/images/[name][ext]',
          },
        },
        {
          test: /\.(woff,woff2,ttf,otf)/,
          type: 'assets/resource',
          generator: {
            filename: paths.assetsPath + '/fonts/[name][ext]',
          },
        },
      ],
    },
  };
};

module.exports = assetsExtract();
