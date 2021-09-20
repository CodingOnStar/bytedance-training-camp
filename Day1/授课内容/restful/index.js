import Koa from "koa";
const app = new Koa();

// 注册路由
const config = require("conf.js");
const { loadModel } = require("./framework/loader.js");
loadModel(config)(app);

app.listen(3000, () => {
  console.log("Server at 3000");
});
