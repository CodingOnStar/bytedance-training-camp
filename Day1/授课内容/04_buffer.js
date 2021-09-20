//图片切割 合并
// JS处理不了:视频压缩；调用一个底层硬件POS，动态链接库
const buf1 = Buffer.alloc(10);
console.log(buf1);
const buf2 = Buffer.from("a");
console.log(buf2);
const buf3 = Buffer.from("中");
console.log(buf3); //utf-8
const buf4 = Buffer.concat([buf2, buf3]);
console.log(buf4, buf4.toString());
