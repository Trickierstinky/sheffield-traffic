
var page = require('webpage').create();

page.viewportSize = {
  width: 1300,
  height: 1500
};
page.clipRect = { top: 100, left: 50, bottom: 200, right: 50, width: 1200, height: 1200 };

page.open('https://www.google.com/maps/@53.381261,-1.4422942,12z/data=!5m1!1e1', function(success) {
	var timestamp = (new Date()).toLocaleString();

	if(success) {
		map_wait(timestamp);
		console.log(success, timestamp);
	}
});

function map_wait(timestamp) {
	setTimeout(function() {
		page.render('screengrabs/map-' + timestamp + '.png');
		phantom.exit();
	}, 5000);
}


