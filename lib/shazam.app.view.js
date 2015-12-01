/*jslint vars: true, devel:true, nomen: true, node: true, indent: 2, maxerr: 50*/
/*global describe, it*/
'use strict';


var billyAscii = require("./billy.ascii.js"),
  shazamAscii = require("./shazam.ascii.js"),
  colors = require('colors');

function ShazamAppView(appState) {
  this.appState = appState;



}

ShazamAppView.prototype.print = function () {
  var printString = this.appState;
  console.log(printString);
};
