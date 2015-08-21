var jsonfile = require('jsonfile');
var fs = require('fs-extra');
var queue = require('queue-async');
var path = require('path');

var configPath = __dirname + '/../data/harness-config.json';
var paellaDest =  __dirname + '/../paella/';
var paellaSrcBase = jsonfile.readFileSync(configPath).paellaLocation +
  '/build/player/';

var paellaPaths = [
  'javascript/swfobject.js',
  'javascript/base.js',
  'javascript/jquery.js',
  'javascript/lunr.min.js',
  'javascript/require.js',
  'javascript/paella_player.js',
  'resources/bootstrap/js/bootstrap.min.js',
  'resources/bootstrap/css/bootstrap.slate.min.css',
  'resources/style/style_dark.css'
];

var q = queue();
paellaPaths.forEach(queueCopy);
q.awaitAll(reportDone);

function queueCopy(subpath) {
  q.defer(
    fs.copy, paellaSrcBase + subpath,
    paellaDest + path.basename(subpath)
  );
}

function reportDone(error) {  
  if (error) {
    console.log(error);
  }
  else {
    console.log('Paella files copied to ' + paellaDest + '.');
  }
}
