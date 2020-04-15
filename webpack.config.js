const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!react-intl|intl-messageformat|intl-messageformat-parser)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
