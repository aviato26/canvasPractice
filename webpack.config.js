const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: "./src/script.js"
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist")
  },
  watch: true,
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
}
