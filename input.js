/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const setupInput = function (conn) {
  connection = conn;

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

  if (key === "w") {
    console.log('up');
    connection.write('Move: up');
  }

  if (key === "s") {
    console.log('down');
    connection.write('Move: down');
  }

  if (key === "a") {
    console.log('left');
    connection.write('Move: left');
  }

  if (key === "d") {
    console.log('right');
    connection.write('Move: right');
  }

  if (key === "1") {
    console.log('Hi!');
    connection.write('Say: Hi!');
  }

  if (key === "2") {
    console.log('I pwn u!');
    connection.write('Say: I pwn u!');
  }

  if (key === "3") {
    console.log('All your basssse');
    connection.write('Say: All your basssse');
  }
};

module.exports = { setupInput };