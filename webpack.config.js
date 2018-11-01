var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require ('compression-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
      './src',
      './src/components',
      './src/components/**/*'
    ],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url?limit=10000&mimetype=application/font-woff"
        }
        
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url?limit=10000&mimetype=application/font-woff"
        }
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url?limit=10000&mimetype=application/font-woff"
        }
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "file"
        }
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url?limit=10000&mimetype=image/svg+xml"
        }
        
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new CompressionPlugin({
      filename(info) {
        const {path, query} = info;
        const fileName = path.substring(0, path.lastIndexOf('.'));
        const fileExtension = path.substring(path.lastIndexOf('.')+1); 
        return `${fileName}.gz.${fileExtension}${info.query}`;
      },
      algorithm: "gzip"
    })
  ]
};