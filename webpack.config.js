var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        }]
    }
}
