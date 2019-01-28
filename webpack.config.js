'use strict'

const path = require( 'path' );

const { VueLoaderPlugin } = require( 'vue-loader' );

module.exports = {
    mode: 'development',
    entry: [
        './src/app.js'
    ] ,
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            }
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     exclude: /node_modules/
            // }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};