const path = require('path');

const config = {
    entry: './src/huoui',
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
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            }
        ]
    },
    resolve: {
        alias: {
            "dist": path.resolve(__dirname, 'dist'),
            "src": path.resolve(__dirname, 'src'),
        }
    },
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

module.exports = config;