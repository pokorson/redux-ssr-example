const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/app.js",
  output: {
    path: path.resolve(__dirname, "static"),
    filename: "bundle.js"
  },
  devServer: { inline: true },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }]
  }
};
