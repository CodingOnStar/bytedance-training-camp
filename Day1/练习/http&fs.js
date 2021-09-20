const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    // console.log("a requiest", getPrototypeChain(response));
    // response.end("Hi Node");
    const { url, method } = request;
    if (url === "/" && method === "GET") {
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          response.writeHead(500, {
            "Content-Type": "text/plain;charset=utf-8",
          });
          response.end("500 服务器错误");
          return;
        }
        response.statusCode = 200;
        response.setHeader("Content-Type", "index/html");
        response.end(data);
      });
    } else {
      response.statusCode = 400;
      response.setHeader("Content-Type", "text/plain;charset=utf-8");
      response.end("404 没这东西");
    }
  })
  .listen(3000, () => {
    console.log("Server at 3000");
  });
