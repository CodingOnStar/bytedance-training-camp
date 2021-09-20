const fs = require("fs");
// 1.png->2.png
const rs = fs.createReadStream(
  "/Users/hanxujiang/Documents/bytedance-training-camp/Day1/授课内容/1.png"
);
const ws = fs.createWriteStream("./2.png");
rs.pipe(ws);
