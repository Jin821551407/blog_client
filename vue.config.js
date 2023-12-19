module.exports = {
  //服务器代理
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3001",
      },
      "/static": {
        target: "http://127.0.0.1:3001",
      },
    },
  },
  configureWebpack: require("./webpack.config"),
};
