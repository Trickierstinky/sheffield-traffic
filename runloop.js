var exec = require('child_process').exec;
var cmd = 'phantomjs mapcapture.js';

var last_success_timestamp;
function loop() {
  exec(cmd, function(error, stdout, stderr) {
   last_success_timestamp = stdout
   console.log(stdout);
    var cmd2 = 'convert \'screengrabs/map-'+ last_success_timestamp + '.png\'\
                -gravity SouthEast -pointsize 22 -fill white -annotate +30+30 \''
                + last_success_timestamp;
    exec(cmd2, function(error2, stdout2, stderr2) {
     console.log(stdout2);
    });
  });

}

console.log("Running on loop");
loop();
var interval = setInterval(loop, 300000);



