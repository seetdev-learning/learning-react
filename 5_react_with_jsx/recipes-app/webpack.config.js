const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Example',
            template: path.join(__dirname, './src/index.template.html')
        })
    ],
    module: {
        rules: [{
            test: /\.js/,
            exclude: /(node_modules|bower_components|data)/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    }
};