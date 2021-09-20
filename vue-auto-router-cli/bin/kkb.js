#! /usr/bin/env node
const program = require("commander");
//策略模式
program.version(require("../package").version);
program
  .command("init <name>")
  .description("init project")
  .action(require("../lib/init.js"));
program
  .command("refresh")
  .description("refresh routers...")
  .action(require("../lib/refresh.js"));
program.parse(process.argv);
