const webpack = require('webpack')
const path = require('path')

const PATHS = {
  src: path.join(__dirname, 'client/src'),
  dist: path.join(__dirname, 'client/dist/')
}

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', 'babel-polyfill', PATHS.src + '/index.js'],
  output: {
    filename: '[name].bundle.js',
    crossOriginLoading: 'anonymous',
    path: path.resolve(__dirname, 'client/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'graphql-tag/loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: PATHS.dist,
    compress: true,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY'
    },
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8080,
    publicPath: 'http://localhost:8080/',
    hot: true
  }
}
