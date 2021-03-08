const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./webpack.common');
const stylesExtract = require('./modules/styles.extract');

const devConfig = merge(
    common,
    {
        mode: 'production',

        plugins: [
            new CleanWebpackPlugin()
        ],
    },

    stylesExtract(),
);

module.exports = devConfig;
