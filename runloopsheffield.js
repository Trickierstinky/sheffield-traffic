var exec = require('child_process').exec;
var d = new Date,
    timestamp = [d.getFullYear(), d.getMonth()+1, d.getDate()].join('-') + 'T' +
                [d.getHours(), d.getMinutes(), d.getSeconds()].join('|');
var address = 'https://www.google.com/maps/@53.381261,-1.4422942,12z/data=!5m1!1e1';
var folder = 'sheffield'
var cmd = 'phantomjs /root/traffic/mapcapture.js \'' + address + '\' \''+ folder +'\' \'' + timestamp + '\'';

function loop() {
  exec(cmd, function(error, stdout, stderr) {

    if( stdout.length > 0) {
      var cmd2 = 'convert \'/root/traffic/'+folder+'/map-'+ timestamp + '.jpg\''
                 +' -gravity SouthEast '
                 +' -pointsize 22'
                 +' -undercolor \'#00000080\''
                 +' -fill white'
                 +' -annotate +30+30 \' ' + timestamp.replace(/\|/g,':').replace(/T/g, ' ') + ' \' '
                 +' \'/root/traffic/'+folder+'/map-' + timestamp + '.jpg\'';
      exec(cmd2, function(error2, stdout2, stderr2) {
       console.log(stdout2,error2,stderr2);
      });
    }
  });

}

console.log("Running on loop");
loop();



