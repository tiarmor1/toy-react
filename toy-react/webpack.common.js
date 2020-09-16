const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './demo/main.js',
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                ['@babel/plugin-transform-react-jsx', {
                  "pragma": "ToyReact.createElement",
                  "pragmaFrag": "ToyReact.Fragment",
                  "throwIfNamespace": true
                }]
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'toy-react-demo',
      template: './demo/index.html'
    })
  ]
}