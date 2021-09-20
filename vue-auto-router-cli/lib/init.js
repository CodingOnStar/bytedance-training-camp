//打印欢迎界面
const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const chalk = require("chalk");
const log = (content) => console.log(chalk.green(content));
const { clone } = require("./download");

module.exports = async (name) => {
  //欢迎页面
  clear();
  const data = await figlet("JHX welcome");
  log(data);
  //项目
  //   log("🚀创建项目" + name);
  //   await clone("https://github.com/su37josephxia/vue-template", name);
};
