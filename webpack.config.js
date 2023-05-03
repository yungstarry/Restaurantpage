const path = require("path");

module.exports = {
  // mode: "none",
  entry: "./src/index.js",
  watch: true,
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
