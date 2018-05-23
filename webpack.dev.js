const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config')

const config = {
    mode: 'development',
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