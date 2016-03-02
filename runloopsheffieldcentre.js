var exec = require('child_process').exec;
var d = new Date,
    time = 'T' + [pad2(d.getHours()), pad2(d.getMinutes()), pad2(d.getSeconds())].join('-'),
    date = [pad2(d.getFullYear()), pad2(d.getMonth()+1), pad2(d.getDate())].join('-'),
    timestamp = date + time;
var address = 'https://www.google.com/maps/@53.3794008,-1.4717297,14.75z/data=!5m1!1e1';
var folder = 'sheffield-centre'
var cmd = 'phantomjs /root/traffic/mapcapture.js \'' + address + '\' \'/root/traffic/'+ folder +'\' \'' + date + '\' \'' + time + '\' ';

function loop() {
  exec(cmd, function(error, stdout, stderr) {
    console.log(stdout,error,stderr);
    if( stdout.length > 0) {
      var cmd2 = 'convert \'/root/traffic/'+folder+'/'+ date +'/map-'+ time + '.jpg\''
                 +' -gravity SouthEast '
                 +' -pointsize 22'
                 +' -undercolor \'#00000080\''
                 +' -fill white'
                 +' -annotate +30+30 \' ' + timestamp.replace(/\|/g,':').replace(/T/g, ' ')+ ' \' '
                 +' \'/root/traffic/'+folder+'/' + date+ '/map-' + time + '.jpg\'';
      exec(cmd2, function(error2, stdout2, stderr2) {
       console.log(stdout2,error2,stderr2);
      });
    }
  });

}

console.log("Running on loop");
loop();



function pad2(number) {

     return (number < 10 ? '0' : '') + number

}
