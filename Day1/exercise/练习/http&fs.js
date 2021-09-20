const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    // console.log("a requiest", getPrototypeChain(response));
    // response.end("Hi Node");
    const { url, method, headers } = request;
    if (url === "/" && method === "GET") {
      fs.readFile("index.html", (err, data) => {
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
      });
    } else if (url === "/users" && method === "GET") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ name: "JHX" }));
    } else if (method === "GET" && headers.accept.indexOf("image/*") !== -1) {
      //所有的图片
    } else {
      response.statusCode = 404;
      response.setHeader("Content-Type", "text/plain;charset=utf-8");
      response.end("404 没这东西");
    }
  })
  .listen(3000, () => {
    console.log("Server at 3000");
  });
