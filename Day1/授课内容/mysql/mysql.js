async () => {
  const mysql = require("mysql2/promise");
  // 设置连接配置
  const cfg = {
    host: "localhost",
    user: "root",
    password: "example",
    database: "kaikeba",
  };
  const connection = await mysql.createConnection(cfg);
  let ret = await connection.execute(`CREATE TABLE IF NOT EXISTS test(
      id INI NOT NULL AUTO_INCREMENT,

  )`);
  console.log("create", ret);
  ret = await connection.execute([
    `INSERT INTO test(message) VALUES(?)`,
    "ABC",
  ]);
  console.log("insert", ret);
  ret = await connection.execute(`SELECT * FROM test`);
  const [rows, fields] = await connection.execute();
  console.log("select", JSON.stringify(rows));
};
