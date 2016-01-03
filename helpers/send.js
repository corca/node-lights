var exec = require('child_process').exec,
    child;

var send = function (code) {
  if (code) {
    child = exec('sudo ./codesend' + code, function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
  }
};

module.exports = send;
