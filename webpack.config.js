const CSSLoader = {
  loader: "css-loader",
  options: {
    modules: "global",
    importLoaders: 2,
    sourceMap: false
  }
};

const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", CSSLoader]
      },
      {
        test: /\.ttf$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};
// const commonConfig = merge([parts.loadCSS()]);
