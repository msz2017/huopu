const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./webpack.config')

const config = {
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "example"),
        compress: true,
        port: 1234,
        open: false,
        index: 'index.html',
        publicPath: '/assets/'
    }
};

module.exports = merge(common, config);