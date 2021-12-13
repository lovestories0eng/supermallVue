const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("common", resolve("src/common"))
      .set("scss", resolve("src/assets/scss"))
      .set("components", resolve("src/components"))
      .set("network", resolve("src/network"))
      .set("plugins", resolve("src/plugins"))
      .set("views", resolve("src/views"))
      .set("router", resolve("src/router"))
      .set("store", resolve("src/store"))
      .set("layouts", resolve("src/layouts"))
      .set("static", resolve("src/static"));
  }
};
