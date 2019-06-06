const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pkg = require('./../package.json');
const baseConfig = require('./webpack.config');

baseConfig.module.rules.push(
    {
        test: /(bootstrap|global)\.(css|pcss)$/,
        use: [
            MiniCssExtractPlugin.loader,
            // {loader: 'style-loader'},
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                }
            },
            {loader: 'postcss-loader'},
        ]
    },

    {
        test: /\.(css|pcss)$/,
        use: [
            MiniCssExtractPlugin.loader,
            // {loader: 'style-loader'},
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[path]_[name]_[local]_[hash:base64:5]',
                    sourceMap: true,
                    // importLoader: 1
                }
            },
            {loader: 'postcss-loader'},
        ],
        exclude: /(bootstrap|global)\.(css|pcss)$/
    }
);

baseConfig.plugins.push(
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin(`@license ${pkg.name}   ${new Date()}. development.`),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
        'PROJECT_ENV': JSON.stringify('development')
    })
);

baseConfig.output.path = path.resolve(__dirname, '../build');

module.exports = Object.assign({}, baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    plugins: baseConfig.plugins
});
