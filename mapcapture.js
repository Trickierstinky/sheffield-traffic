var intervalLength = 300000;

function screenCap() {
	loadMap();
	// loadRadar();
}

function loadMap() {
	var page = require('webpage').create();

	page.viewportSize = {
	  width: 1200,
	  height: 1200
	};

	page.open('https://www.google.com/maps/@53.381261,-1.4422942,12z/data=!5m1!1e1', function(success) {
		var timestamp = (new Date()).toLocaleString();

		console.log(success, timestamp);
		if(success) {
			map_wait(timestamp);
		}
	});

	function map_wait(timestamp) {
		setTimeout(function() {
			page.render('screengrabs/map-' + timestamp + '.png');
		}, 5000);
	}
}

screenCap();
var interval = setInterval(screenCap, intervalLength);
