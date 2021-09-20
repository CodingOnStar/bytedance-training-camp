const { promisify } = require("util");

module.exports.clone = async (name) => {
  // 从git上下载东西
  const download = promisify(require("download-git-repo"));
  // ora包用于显示加载中的效果
  //   const ora = import("ora");

  // const ora = require("ora");
  //   const process = ora(`🚴🏻下载......${name}`);
  // 开始加载
  //   process.start();
  // 下载资源
  await download(name);
  // 加载成功
  process.succeed();
};
