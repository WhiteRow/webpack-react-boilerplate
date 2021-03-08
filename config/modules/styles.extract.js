const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const stylesExtract = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(sc|sa)ss$/,
          use: [
            {
              loader: 'style-loader',
            },
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer, cssnano],
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },

    plugins: [new MiniCssExtractPlugin()],
  };
};

module.exports = stylesExtract;
