// play.js
const { connect } = require("./client");
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");

  // on any input from stdin (standard input)
  stdin.on("data", handleUserInput);

  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }
};

console.log("Connecting ...");
setupInput();
connect();
