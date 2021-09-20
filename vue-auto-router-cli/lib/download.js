const { promisify } = require("util");

module.exports.clone = async function (repo, desc) {
  // 从git上下载东西
  const download = promisify(require("download-git-repo"));
  // ora包用于显示加载中的效果
  const ora = (await import("ora")).default;
  //const ora = require("ora");
  const process = ora(`🚴🏻下载......${repo}`);
  // 开始加载
  process.start();
  // 下载资源
  await download(repo, desc);
  // 加载成功
  process.succeed();
};
