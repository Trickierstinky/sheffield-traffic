var exec = require('child_process').exec;
var cmd = 'phantomjs mapcapture.js';

function loop() {
  exec(cmd, function(error, stdout, stderr) {
    console.log(stdout);
  });
}

console.log("Running on loop");
loop();
var interval = setInterval(loop, 300000);



