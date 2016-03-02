var exec = require('child_process').exec;
var d = new Date,
    year = pad2(d.getFullYear());
    month = pad2(d.getMonth()+1);
    day = pad2(d.getDate());
var file = '*.jpg';
var type_file = 'all';
var args = process.argv.splice(process.execArgv.length + 2);

if (args.length > 3) {
  console.log('Usage: creategif.js type folder outputfile');
  exit(1);
} else {
  type = args[0];
  folder = args[1];
  outputfile = args[2];
}
console.log(type,folder,outputfile);
if (type === 'day'){
  file = '/'+ year + '-' + month + '-' + day +'/%*.jpg';
  type_file = type
}

var cmd = 'ffmpeg -framerate 4 -i \'/usr/share/nginx/html/'+ folder +'/' + file +'\' -c:v libx264 -r 24 /usr/share/nginx/html/' + folder+'/' + year + '-' + month + '-' + day +  '/'+type_file+'_'+outputfile + ' -y';

console.log(cmd);
exec(cmd, function(error2, stdout2, stderr2) {
 console.log(stdout2,error2, stderr2);
});

function pad2(number) {

     return (number < 10 ? '0' : '') + number 

}

