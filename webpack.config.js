const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: './src/huoui',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'huoui.min.js',
        library: 'huoui',
        libraryTarget: 'umd',
        libraryExport: 'default',
        publicPath: '/assets/'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                },]
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
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
    resolve: {
        alias: {
            "src": path.resolve(__dirname, 'src'),
        }
    },
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

module.exports = config;