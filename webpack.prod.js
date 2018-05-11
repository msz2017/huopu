const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config')


const config = {
    entry: './src/huoui',
    // devtool: 'source-map',
    mode: 'production'
};

module.exports = merge(common, config);