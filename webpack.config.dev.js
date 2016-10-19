const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: "./src/main-dev.js",
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "react-widget-bundle.js"
  },

  devServer: {
    contentBase: "dist",
    devtool: 'source-map',
    hot: true,        //Live-reload
    inline: true,
    port: 3000,        //Port Number
    host: '0.0.0.0',  //Change to '0.0.0.0' for external facing server
    historyApiFallback: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: ['babel'],
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-runtime', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(scss|sass)$/,
        loader: 'style!css!postcss?parser=postcss-scss',
        include: [
          path.resolve(__dirname, 'node_modules'),
        ],
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        loader: 'url-loader?limit=8192&name=/[hash].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html',
      }
    ]
  },

  postcss: [
    require('autoprefixer-core'),
    require('postcss-color-rebeccapurple')
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'components'],
    // require时省略的扩展名，如：require('module') 不需要module.js
    extensions: ['', '.js', '.scss', '.css', '.json', '.html']
  },

  plugins: [
    //Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    //Allows error warnings but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"dev"' }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index-template.html',
      inject: 'body'
    }),
    
  ],

  //antd
  babel: {
    "plugins": [["import", { libraryName: "antd", style: "css" }]]
  }
};
