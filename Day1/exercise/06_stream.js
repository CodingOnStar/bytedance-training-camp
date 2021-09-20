const fs = require("fs");
// 1.png->2.png
const rs = fs.createReadStream(
  "/Users/hanxujiang/Documents/bytedance-training-camp/Day1/exercise/1.png"
);
const ws = fs.createWriteStream(
  "/Users/hanxujiang/Documents/bytedance-training-camp/Day1/exercise/2.png"
);
rs.pipe(ws);
