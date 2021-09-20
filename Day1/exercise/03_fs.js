const fs = require("fs");
// 异步IO
fs.readFile(
  "/Users/hanxujiang/Documents/bytedance-training-camp/Day1/conf.js",
  (err, data) => {
    // 错误优先的回调
    if (err) throw err;
    console.log(data);
  }
);

//使用promise api async/await
// 可以通过过require().promises或
async () => {
  const fs = fs.require("fs");
  const { promisify } = require("util");
  const readFile = promisify(fs.readFile);
  const data = await readFile("./conf.js");
  console.log(data.toString);
};

// 同步读取
// const data = fs.readFileSync("./conf.js");
// console.log(data); //二进制文件，内存缓冲区
// console.log(data.toString("utf-8")); //默认是utf-8
