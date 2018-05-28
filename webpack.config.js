/* eslint-env node */

const webpack = require("webpack");
const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: {
    app: path.resolve(__dirname, "src/index.ts")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        loaders: [
          {
            loader: path.resolve(__dirname, "logger-loader.js")
          },
          "awesome-typescript-loader"
        ],
        exclude: path.resolve(__dirname, "node_modules"),
        include: path.resolve(__dirname, "src")
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin()
  ]
};
