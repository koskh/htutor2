const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const mapToFolder = (dependencies, folder) =>
    dependencies.reduce((acc, dependency) => {
        return {
            [dependency]: path.resolve(`${folder}/${dependency}`),
            ...acc
        };
    }, {});

module.exports = {

    stats: {
        entrypoints: false,
        children: false
    },

    resolve: {
        alias: {
            ...mapToFolder([
                'axios', 'classnames', 'css-loader', 'empty', 'invariant', 'js-cookie', 'lodash',
                'moment', 'postcss', 'react', 'react-dom', 'react-intl', 'react-loadable', 'react-redux',
                'react-router', 'react-router-dom', 'react-router-redux', 'reactstrap', 'redux', 'redux-thunk',
                'style-loader'
            ],
            './node_modules'
            )
        }
    },

    entry: {
        global: './src/styles/global.css',
        index: './src/scripts/index.js'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/'
    },

    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            cacheGroups:
                {
                    // styles: {
                    //     test: /\.(pcss|css)$/,
                    //     name:'styles',
                    //     chunks:'all',
                    //     enforce: true
                    // },

                    react: {
                        test: /[\\/]node_modules[\\/](react|react-.*|redux|redux-.*)[\\/]/,
                        name: 'react',
                        chunks: 'all',
                        enforce: true
                    },

                    lodash: {
                        test: /[\\/]node_modules[\\/](lodash)[\\/]/,
                        name: 'lodash',
                        chunks: 'all',
                        enforce: true
                    },
                    moment: {
                        test: /[\\/]node_modules[\\/](moment)[\\/]/,
                        name: 'moment',
                        chunks: 'all',
                        enforce: true
                    },
                    core: {
                        test: /[\\/]node_modules[\\/](axios|core-js|@babel)[\\/]/,
                        name: 'core',
                        chunks: 'all',
                        enforce: true
                    },
                    reactstrap: {
                        test: /[\\/]node_modules[\\/](reactstrap|popper.js|prop-types)[\\/]/,
                        name: 'reactstrap',
                        chunks: 'all',
                        enforce: true
                    }
                }
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/html', 'index.html'),
            favicon: path.join(__dirname, '../src/html', 'favicon.ico'),
            hash: true
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),

        // Ignore all locale files of moment.js
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|ru/),

        // new CopyWebpackPlugin(
        //     [
        //         {from: './src/media/assets', to: 'assets'},
        //         // {from: './src/scripts/config/service_urls.js'}
        //     ], {
        //         ignore: [],
        //         copyUnmodified: true
        //     }
        // )
    ],
    devServer: {
        contentBase: path.join(__dirname, '../build'),
        compress: true,
        historyApiFallback: true,
        port: 80
    }
};
