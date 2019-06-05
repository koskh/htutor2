const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
                    sourceMap: false,
                    // importLoader: 1
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
                    localIdentName: '[local]_[hash:base64:5]',
                    sourceMap: false,
                    importLoader: 1
                }
            },
            {loader: 'postcss-loader'},
        ],
        exclude: /(bootstrap|global)\.(css|pcss)$/
    }
);

baseConfig.plugins.push(
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin(`@license ${pkg.name}   ${new Date()}. Production.`),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'PROJECT_ENV': JSON.stringify('production')
    })
);

baseConfig.optimization.minimizer = [
    new TerserPlugin({
        parallel: true,
        terserOptions: {
            ecma: 6,
        },
    }),
    new OptimizeCSSAssetsPlugin({})
];

baseConfig.output.path = path.resolve(__dirname, '../build');

module.exports = Object.assign({}, baseConfig, {
    mode: 'production',
    plugins: baseConfig.plugins,
});
