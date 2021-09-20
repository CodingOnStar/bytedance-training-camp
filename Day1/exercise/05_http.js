const http = require("http");
const fs = require("fs");
http
  .createServer((request, response) => {
    // console.log("a requiest", getPrototypeChain(response));
    // response.end("Hi Node");
    const { url, method, headers } = request;
    if (url === "/" && method === "GET") {
      fs.readFile(
        "/Users/hanxujiang/Documents/bytedance-training-camp/Day1/exercise/index.html",
        (err, data) => {
          if (err) {
            response.writeHead(500, {
              "Content-Type": "text/plain;charset=utf-8",
            });
            response.end("500 服务器错误");
            return;
          }
          response.statusCode = 200;
          response.setHeader("Content-Type", "text/html");
          response.end(data);
        }
      );
    } else if (url === "/users" && method === "GET") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ name: "JHX" }));
    } else if (method === "GET" && headers.accept.indexOf("image/*") !== -1) {
      //所有的图片
      // 直接用readFile读取：会占用内用过大，readFile会把全部图片内容加载到服务器
      // stream 流
      console.log(url);
      fs.createReadStream(
        "/Users/hanxujiang/Documents/bytedance-training-camp/Day1/exercise" +
          url
      ).pipe(response);
    } else {
      response.statusCode = 400;
      response.setHeader("Content-Type", "text/plain;charset=utf-8");
      response.end("404 没这东西");
    }
  })
  .listen(3000, () => {
    console.log("Server at 3000");
  });

function getPrototypeChain(obj) {
  const protoChain = [];
  while ((obj = Object.getPrototypeOf(obj))) {
    protoChain.push(obj);
  }
  return protoChain;
}
