const path = require('path');
const { environment } = require('@rails/webpacker');

environment.config.merge({
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
});

module.exports = environment;
