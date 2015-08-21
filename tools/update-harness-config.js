var jsonfile = require('jsonfile');
var prompt = require('prompt');
var fs = require('fs');
var _ = require('lodash');

var currentConfig = {};

var configPath = __dirname + '/../data/harness-config.json';
var defaultConfigPath = __dirname +  '/../data/default-harness-config.json';

if (fs.existsSync(configPath)) {
  currentConfig = jsonfile.readFileSync(configPath);
}
else {
  currentConfig = jsonfile.readFileSync(defaultConfigPath);
}

var questionSchema = {
  properties: {
    paellaLocation: {
      message: 'Where is the Paella project located, relative to ' +
        __dirname + '?',
      default: currentConfig.paellaLocation
    },
    rtmpURL: {
      message: 'What rtmp URL should the harness play?',
      default: currentConfig.rtmpURL
    }
  }
};

prompt.message = '';
prompt.delimiter = '\n';
prompt.start();
prompt.get(questionSchema, updateConfigWithAnswers);

function updateConfigWithAnswers(error, result) {
  if (error) {
    console.log(error);
  }
  else if (_.isEqual(result, currentConfig)) {
    console.log('No changes needed. Done!');
  }
  else {
    jsonfile.writeFileSync(configPath, result);
    console.log(configPath + ' updated!');
  }
}
