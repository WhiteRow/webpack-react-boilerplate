const styles = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(sc|sa)ss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
  };
};

module.exports = styles;
