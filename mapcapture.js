
var system = require('system');
var args = system.args;
var page = require('webpage').create();
var fs = require('fs');

if (args.length < 4) {
	console.log('Usage: mapcapture.js URL folder date time');
	phantom.exit(1);
} else {
	address = args[1];
	folder = args[2];
	date = args[3];
	time = args[4];
}

console.log('here');
page.viewportSize = {
  width: 1380,
  height: 970
};
page.clipRect = { top: 100, left: 50, bottom: 150, right: 50, width: 1280, height: 720 };

page.open(address, function(success) {
	console.log('here 2');
	if(success) {
		console.log('here 3');
		map_wait(time);
		console.log(time);
	}
});

function map_wait(timestamp) {
	setTimeout(function() {
		console.log(folder+'/' + date + '/map-'+time+'.jpg');
		page.render(folder+'/' + date + '/map-'+time+'.jpg', { format: 'jpeg', quality: '92' });
		phantom.exit();

	}, 5000);
}


