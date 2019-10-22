const path = require('path'); //module for determining paths

module.exports = {
    entry: './src/index.js', //entry point
    output: {
      path: path.resolve(__dirname, 'dist/assets'), //Output path and name
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'), // webpack dev server, watches for changes
      publicPath: '/assets/'
    },
    module: { // Using babel with webpack
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }]
    }
  };