/*jslint vars: true, devel:true, nomen: true, node: true, indent: 2, maxerr: 50*/
/*global describe, it*/
'use strict';

var colors = require('colors'),
  stdin = process.stdin,
  opt = {
    reconnect: true
  },
  ShazamAppView = require("./lib/shazam.app.view.js"),
  appView = new ShazamAppView(),
  socket = require('socket.io-client').connect('http://localhost:8080', opt),
  // Player = require('player'),
  // player =  new Player("./assets/shazam.transform.mp3"),
  platform = process.platform,
  player = require('play-sound')({}),
  exec = require('child_process').exec,
  altSMac = '\u00DF',
  altSWin = '\u001B\u0073';

(function (view) {
  socket.on('connect', function () {
    console.log('Connected!');

    function emitShazam() {
      var msg = {
        location: "consoleApp"
      };
      socket.emit("Shazam!", msg);
    }

    socket.on("Transform!", function (newAppState) {
        if(platform === 'darwin'){
              exec("afplay ./assets/shazam.transform.mp3");
        }

      view.updateState(newAppState);
      view.printView();
    });

    socket.on("Refresh!", function (newAppState) {
      view.updateState(newAppState);
      view.printView();
    });


    //This controls the keyboard input.
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', function (key) {
    //   console.log(key);
    //   console.log(toUnicode(key));
      if (key === altSMac || key === altSWin) {
        emitShazam();
      }
      if (key === '\u0003') {
        process.exit();
      } // ctrl-c
    });

    socket.emit("Who am I?");

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
}(appView));
