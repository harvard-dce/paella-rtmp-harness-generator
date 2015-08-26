var jsonfile = require('jsonfile');
var fs = require('fs-extra');
// var queue = require('queue-async');
var path = require('path');
// var rimraf = require('rimraf');

var configPath = __dirname + '/../data/harness-config.json';
var templatePath = __dirname + '/../data/data-template.json';
var dataJsonDest =  __dirname + '/../web-staging/data.json';


// Cuts rtmp://cp398121.live.edgefcs.net/live/arbitrary-target_1_200@345252 into 
// rtmp://cp398121.live.edgefcs.net/live and arbitrary-target_1_200@345252.
function breakUpRTMPURL(rtmpURL) {
  var parsed = path.parse(rtmpURL);
  return [parsed.dir, parsed.base];
}

function updateRTMPSrcInData(data, rtmpURL) {
  var urlPieces = breakUpRTMPURL(rtmpURL);
  var rtmpSrc = data.streams[0].sources.rtmp[0].src;
  rtmpSrc.server = urlPieces[0];
  rtmpSrc.stream = urlPieces[1];
}

((function go() {
  fs.removeSync(__dirname + '/../web-staging/data.json');

  var harnessConfig = jsonfile.readFileSync(configPath);
  var data = jsonfile.readFileSync(templatePath);

  if ('rtmpURL' in harnessConfig) {
    updateRTMPSrcInData(data, harnessConfig.rtmpURL);
  }

  jsonfile.writeFileSync(dataJsonDest, data, {spaces: 2});
  console.log('Create Paella data file at:', dataJsonDest);
}
)());
