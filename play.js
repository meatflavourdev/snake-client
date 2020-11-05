// play.js
const { connect } = require("./client");
const input = require("./input");

console.log("Connecting ...");
input.setupInput();
connect();
