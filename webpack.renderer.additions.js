module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        oneOf: [{
          resourceQuery: /^\?global$/,
          use: [{
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
          ]
        }, {
          use: [{
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                modules: {
                  localIdentName: "[name]_[local]_[hash:base64:5]",
                },
              }
            }
          ]
        }]
      },
      {
        test: /\.(png|ttf|otf|eot|woff|woff2|svg|mp3)$/,
        loader: 'file-loader'
      },
    ]
  }
}