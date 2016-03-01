var exec = require('child_process').exec;
var d = new Date,
    year = d.getFullYear();
    month = d.getMonth()+1;
    day = d.getDate();
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
  file = '*' + year + '-' + month + '-' + day +'T*.jpg';
  type_file = year+'_'+month+'_'+day;
} else if (type === 'month'){
  file = '*' + year + '-' + month + '*.jpg';
  type_fileype = year+'_'+month;
}

var cmd = 'convert  -limit memory 1 -limit map 1 -background white -alpha remove -layers optimize-plus -delay 15x60 /usr/share/nginx/html/' + folder + '/'+ file +' -loop 0 /usr/share/nginx/html/' + folder+'/'+type_file+'_'+outputfile;
console.log(cmd);
exec(cmd, function(error2, stdout2, stderr2) {
 console.log(stdout2,error2, stderr2);
});
