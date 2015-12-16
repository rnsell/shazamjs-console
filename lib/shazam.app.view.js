/*jslint vars: true, devel:true, nomen: true, node: true, indent: 2, maxerr: 50*/
/*global describe, it*/
'use strict';


var billyAscii = require("./billy.ascii.js"),
  shazamAscii = require("./shazam.ascii.js"),
  clear = require('clear'),
  colors = require('colors');

function ShazamAppView(appState) {
  this.appState = appState;
}

ShazamAppView.prototype.updateState = function (newAppState) {
  this.appState = newAppState;
};

ShazamAppView.prototype.printView = function () {
  var appState = this.appState,
    webAppStr,
    desktopAppStr,
    hardwareAppStr,
    consoleAppStr,
    mobileAppStr;

  clear();
  //Print the header
  if (appState.isBilly) {
    console.log(billyAscii.white);
  } else {
    console.log(shazamAscii.rainbow);
  }

  if (appState.websiteApp.visible) {
    webAppStr = appState.websiteApp.shazamHeader + "\n" + appState.websiteApp.appDesc + "\n" + "Count: " + appState.websiteApp.count + "\n";
    console.log(webAppStr.green);
  }
  if (appState.desktopApp.visible) {
    desktopAppStr = appState.desktopApp.shazamHeader + "\n" + appState.desktopApp.appDesc + "\n" + "Count: " + appState.desktopApp.count + "\n";
    console.log(desktopAppStr.cyan);
  }
  if (appState.hardwareApp.visible) {
    hardwareAppStr = appState.hardwareApp.shazamHeader + "\n" + appState.hardwareApp.appDesc + "\n" + "Count: " + appState.hardwareApp.count + "\n";
    console.log(hardwareAppStr.red);
  }
  if (appState.consoleApp.visible) {
    consoleAppStr = appState.consoleApp.shazamHeader + "\n" + appState.consoleApp.appDesc + "\n" + "Count: " + appState.consoleApp.count + "\n";
    console.log(consoleAppStr.yellow);
  }
  if (appState.mobileApp.visible) {
    mobileAppStr = appState.mobileApp.shazamHeader + "\n" + appState.mobileApp.appDesc + "\n" + "Count: " + appState.mobileApp.count + "\n";
    console.log(mobileAppStr.magenta);
  }
};

module.exports = ShazamAppView;
