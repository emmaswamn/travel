/* eslint-disable */
const path = require('path');
const { resolve } = path;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: resolve(__dirname, 'dist'), 
    filename: '[name][contenthash].js',
    clean:true
  },
  devtool: 'source-map',
  devServer: {
    static: {
        directory: resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback:true
  },
  module: {
    rules: [
        {
            test: /\.vue$/,
            use: [
                'vue-loader'
            ]
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './index.html'),
      filename: 'index.html', 
      title: 'Webpack App'
    }),
    new VueLoaderPlugin(),
    // Define Bundler Build Feature Flags
    new webpack.DefinePlugin({
        // Drop Options API from bundle
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false
    }),
    new ESLintPlugin({
      extensions: ['js', 'json', 'vue'],
      exclude: 'node_modules',
      quiet: true
    })
  ]
};

module.exports = config;