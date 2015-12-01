/*jslint vars: true, devel:true, nomen: true, node: true, indent: 2, maxerr: 50*/
/*global describe, it*/
'use strict';

var colors = require('colors'),
  stdin = process.stdin,
  opt = {
    reconnect: true
  },
  io = require('socket.io-client').connect('http://localhost:8080', opt);


io.on('connect', function (socket) {
  console.log('Connected!');

  function emitShazam() {
    var msg = {
      location: "consoleApp"
    };
    socket.emit("Shazam!", msg);
  }

  function ()




  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');

  stdin.on('data', function (key) {
    // console.log(key);
    // console.log(toUnicode(key));
    if (key === '\u00DF') {
      console.log("Shazam!".red);
      emitShazam();
    }
    if (key === '\u0003') {
      process.exit();
    } // ctrl-c
  });



});



function toUnicode(theString) {
  var unicodeString = '',
    i,
    theUnicode;
  for (i = 0; i < theString.length; i += 1) {
    theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
    while (theUnicode.length < 4) {
      theUnicode = '0' + theUnicode;
    }
    theUnicode = '\\u' + theUnicode;
    unicodeString += theUnicode;
  }
  return unicodeString;
}


stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (key) {
  // console.log(key);
  // console.log(toUnicode(key));
  if (key === '\u00DF') {
    console.log("Shazam!".red);
  }
  if (key === '\u0003') {
    process.exit();
  } // ctrl-c
});
