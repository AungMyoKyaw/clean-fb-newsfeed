const path = require("path");
const WebpackUserscript = require("webpack-userscript");

module.exports = {
  entry: path.resolve(__dirname, "src", "clean-fb-newsfeed.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "clean-fb-newsfeed.user.js",
  },
  plugins: [
    new WebpackUserscript({
      headers: {
        name: "clean-fb-newsfeed",
        description: "clean-fb-newsfeed",
        version: `[version]-build.[buildTime]`,
        author: "Aung Myo Kyaw",
        match: "*://*.facebook.com/",
        homepage: "https://github.com/AungMyoKyaw/clean-fb-newsfeed",
        bugs: "https://github.com/AungMyoKyaw/clean-fb-newsfeed/issues",
        icon: "https://raw.githubusercontent.com/AungMyoKyaw/clean-fb-newsfeed/master/release/clean-fb-newsfeed.icon.png",
      },
      pretty: true,
      downloadBaseUrl:
        "https://raw.githubusercontent.com/AungMyoKyaw/clean-fb-newsfeed/master/release/clean-fb-newsfeed.user.js",
      updateBaseUrl:
        "https://raw.githubusercontent.com/AungMyoKyaw/clean-fb-newsfeed/master/release/clean-fb-newsfeed.meta.js",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
