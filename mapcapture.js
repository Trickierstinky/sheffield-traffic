
var system = require('system');
var args = system.args;
var page = require('webpage').create();

if (args.length < 3) {
	console.log('Usage: mapcapture.js URL folder date');
	phantom.exit();
} else {
	address = args[1];
	folder = args[2];
	timestamp = args[3];
}


page.viewportSize = {
  width: 1300,
  height: 1500
};
page.clipRect = { top: 100, left: 50, bottom: 200, right: 50, width: 1200, height: 1200 };

page.open(address, function(success) {


	if(success) {
		map_wait(timestamp);
		console.log(timestamp);
	}
});

function map_wait(timestamp) {
	setTimeout(function() {
		page.render('/root/traffic/'+folder+'/map-' + timestamp + '.jpg', { format: 'jpeg', quality: '92' });
		phantom.exit();
	}, 5000);
}


