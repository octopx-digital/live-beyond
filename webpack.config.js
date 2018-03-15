var webpack = require('webpack');
var path = require('path');
var inProduction = process.env.NODE_ENV === 'production';
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [{
  entry: {
    main: './public/js/main.js'
  },
  output: {
    path: path.resolve(__dirname, './public/js/build'),
    filename: '[name].js'
  },
  module: {
    rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            // loader: 'babel-loader'
            loader: 'script-loader'
          }
    ]
  },
  plugins: [
        new webpack.optimize.UglifyJsPlugin({
          minimize: inProduction
        })
    ]
},
 {
  entry: {
    main: './scss/main.scss',
  },
  output: {
    path: path.resolve(__dirname, './public/css'),
    filename: '[name].css'
  },
  module: {
    rules: [
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                  loader: 'css-loader',
                  options: {
                      url: false,
                      minimize: true
                  }
                  },
                  {
                    loader: 'sass-loader',
                  }
                ]
            })
          }
        ]
      },
      plugins: [
          new ExtractTextPlugin('main.css')
      ]
    }
];
