var exec = require('child_process').exec,
    child;

function codeSend (code) {
  child = exec('sudo ./helpers/codesend ' + code, function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    console.log('stdout: ' + stdout + " || stderr: " + stderr);
  });
}

var executeCodes = function (codes) {
  var Led = new LedController();

  if (codes) {
    codes.forEach(function(code){
      Led.exec(codeSend(code), function() {
        console.log('Command sent');
      });
    });
  }
};

///////// Singleton
function LedController(timeout) {
  this.timeout = timeout || 100;
  this.queue = [];
  this.ready = true;
}

LedController.prototype.send = function(cmd, callback) {
  sendCmdToLed(cmd);
  if (callback) callback();
  // or simply `sendCmdToLed(cmd, callback)` if sendCmdToLed is async
};

LedController.prototype.exec = function() {
  this.queue.push(arguments);
  this.process();
};

LedController.prototype.process = function() {
  if (this.queue.length === 0) return;
  if (!this.ready) return;
  var self = this;
  this.ready = false;
  this.send.apply(this, this.queue.shift());
  setTimeout(function () {
    self.ready = true;
    self.process();
  }, this.timeout);
};

module.exports.executeCodes = executeCodes;
