const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    open: true,
    inline: true,
    openPage: '',
    headers: { "Access-Control-Allow-Origin": "*" },
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-2', 'react']
          }
        }
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.html$/, use: ['html-loader'] },
      {
        test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg|otf)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}