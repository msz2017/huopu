const path = require('path');

const config = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'huoui.min.js',
        library: 'huoui',
        libraryTarget: 'umd',
        libraryExport: 'default'
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
        ]
    },
    resolve: {
        alias: {
            "dist": path.resolve(__dirname, 'dist'),
            "src": path.resolve(__dirname, 'src'),
        }
    },
};

module.exports = config;