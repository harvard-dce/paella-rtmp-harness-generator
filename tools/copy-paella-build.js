var jsonfile = require('jsonfile');
var fs = require('fs-extra');
var queue = require('queue-async');
var path = require('path');
var rimraf = require('rimraf');


var configPath = __dirname + '/../data/harness-config.json';
var webStagingDest =  __dirname + '/../web-staging/';
var paellaSrcBase = jsonfile.readFileSync(configPath).paellaLocation +
  '/build/player/';

function queueIndexCopy(q) {
  q.defer(
    fs.copy,
    __dirname + '/../index.html',
    webStagingDest + '/index.html'
  );
  q.defer(
    fs.copy,
    __dirname + '/../index.js',
    webStagingDest + '/index.js'
  );
}

function reportDone(error) {  
  if (error) {
    console.log(error);
  }
  else {
    console.log('Paella files copied to ' + webStagingDest + '.');
  }
}

((function go() {
  rimraf.sync(__dirname + '/../web-staging/*');

  var q = queue(1);
  q.defer(fs.copy, paellaSrcBase, webStagingDest);
  queueIndexCopy(q);
  q.awaitAll(reportDone);
}
)());
