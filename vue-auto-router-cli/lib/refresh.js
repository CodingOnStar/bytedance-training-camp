// 读文件列表
// 拼代码 模板渲染的方式
const fs = require("fs");
const handlebars = require("handlebars");
const chalk = require("chalk");
module.exports = async () => {
  //获取列表
  const list = fs
    .readdirSync(
      "/Users/hanxujiang/Documents/bytedance-training-camp/vue-auto-router-cli/abc/src/views"
    )
    .filter((v) => v !== "Home.vue")
    .map((v) => ({
      name: v.replace(".vue", "").toLowerCase(),
      file: v,
    }));
  // 生成路由定义
  complie(
    { list },
    "/Users/hanxujiang/Documents/bytedance-training-camp/vue-auto-router-cli/abc/src/views/router.js",
    "/Users/hanxujiang/Documents/bytedance-training-camp/vue-auto-router-cli/abc/src/template/router.js.hbs"
  );
  //生成菜单
  complie(
    { list },
    "/Users/hanxujiang/Documents/bytedance-training-camp/vue-auto-router-cli/abc/src/views/App.vue",
    "/Users/hanxujiang/Documents/bytedance-training-camp/vue-auto-router-cli/abc/src/template/App.vue.hbs"
  );
  /**
   *
   * @param {*} meta 数据定义
   * @param {*} filePath 目标文件
   * @param {*} templatePath 模板
   */
  function complie(meta, filePath, templatePath) {
    // 先判断模板路径是否存在
    if (fs.existsSync(templatePath)) {
      // 读取模板路径下的文件，然后toString将二进制流转换为可读文本
      const content = fs.readFileSync(templatePath).toString();
      // 通过handlebars进行编译
      const result = handlebars.compile(content)(meta);
      //const result = handlebars.compile();
      // 利用fs.writeFileSync将结果写入filePath
      fs.writeFileSync(filePath, result);
      console.log(chalk.green(`🔥${filePath}创建成功`));
    }
  }
};
