//打印欢迎界面
const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const chalk = require("chalk");
const log = (content) => console.log(chalk.green(content));
const { clone } = require("./download");

const spawn = async (...args) => {
  //同步 Promiseapi
  // 输出流 子进程合并到主进程
  const { spawn } = require("child_process");
  return new Promise((resolve) => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on("close", () => {
      resolve();
    });
  });
};

module.exports = async (name) => {
  //欢迎页面
  clear();
  const data = await figlet("JHX welcome");
  log(data);
  //项目;
  log("🚀创建项目" + name);
  //await clone("https://github.com/su37josephxia/vue-template", name);

  // 下载依赖 npm i
  // 子进程
  log("🚴🏻安装依赖...");
  await spawn("npm", ["install"], { cwd: `./${name}` });
  log(chalk.green("👌安装完成"));
  open("localhost:8080");
  await spawn("npm", ["run", "serve"], { cwd: `./${name}` });
};
