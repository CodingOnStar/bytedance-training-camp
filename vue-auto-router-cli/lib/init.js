//打印欢迎界面
const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const chalk = require("chalk");
const log = (content) => console.log(chalk.green(content));
const { clone } = require("./download");
const open = require("open");
const spawn = async (...args) => {
  // determine wether you are using win32 or not
  if (process.platform === "win32") {
    const opt = args[args.length - 1];
    opt.shell = true;
  }
  //同步 Promiseapi
  const { spawn } = require("child_process");
  return new Promise((resolve) => {
    const proc = spawn(...args);
    // 输出流 子进程合并到主进程
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
  // await clone("github:su37josephxia/vue-template", name);

  // 下载依赖 npm i
  // 子进程
  log("🚛 Installing dependencies...");
  // 不是同步方法
  await spawn("npm", ["install"], { cwd: `./${name}` });
  log(
    chalk.green(`
    ------------------
    🎉 Done
    ------------------
    ✨ Usage
        cd ${name}
        npm run serve
    ------------------
    `)
  );
  open("http://localhost:8080");
  await spawn("npm", ["run", "serve"], { cwd: `./${name}` });
};
