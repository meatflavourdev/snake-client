// client.js
const { IP, PORT } = require('./constants');
const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.write("Name: JER");

/*   setInterval(() => {
    conn.write("Move: up");
  }, 50); */

  conn.on('data', (data) =>{
    console.log(data);
  });
  return conn;
};

module.exports = { connect };