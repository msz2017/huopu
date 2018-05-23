const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const config = {
    mode: 'development',
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
    devServer: {
        contentBase: path.join(__dirname, "example"),
        compress: true,
        port: 1234,
        open: true,
        index: 'index.html',
        publicPath: '/assets/'
    }
};

module.exports = merge(common, config);