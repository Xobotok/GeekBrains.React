const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[chunkhash].js'
  },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
          modules: path.resolve(__dirname, 'src/modules')
        }
    },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "url-loader?name=app/images/[name].[ext]"
        },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'main.[chunkhash].css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true
  }
}