const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "app.bundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      //   exclude: /node_modules/,
      // },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              // "@babel/preset-react",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: path.resolve(__dirname, "public", "favicon.ico"),
    }),
    // new webpack.ProvidePlugin({
    //   React: "react",
    // }),
  ],
  /* 개발 서버 설정 */
  // devServer: {
  //   host: "localhost",
  //   port: port,
  //   open: true /* open page when start */,
  // },
};
