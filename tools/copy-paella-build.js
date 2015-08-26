var jsonfile = require('jsonfile');
var fs = require('fs-extra');
var queue = require('queue-async');
var rimraf = require('rimraf');


var configPath = __dirname + '/../data/harness-config.json';
var webStagingDest =  __dirname + '/../web-staging/';
var paellaSrcBase = jsonfile.readFileSync(configPath).paellaLocation +
  '/build/player/';

var harnessFilenames = [
  'index.html',
  'index.js',
  'legacy-loader.js'
];

function queueHarnessCopy(q) {
  harnessFilenames.forEach(queueCopy);

  function queueCopy(filename) {
    q.defer(
      fs.copy,
      __dirname + '/../harness/' + filename,
      webStagingDest + filename
    );
  }
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
  queueHarnessCopy(q);
  q.awaitAll(reportDone);
}
)());
