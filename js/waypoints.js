/*    Leaflet and the map    */

// initialize the map on the "map" div with a given center and zoom
var map = L.map('map').setView([38.905, -77.016], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg'
}).addTo(map);


/*  Routing control with LRM  */

var started = false;
var ended = false;

var control = L.Routing.control({
    routeWhileDragging: true,
	geocoder: L.Control.Geocoder.nominatim(),
	reverseWaypoints: true,
	useZoomParameter: true
}).addTo(map);

/*  Click on map to choose Start or End locations  */

map.on('click', function(e) {
	var startPoint = e.latlng;
	if (started) {
		ended = true;
		control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
	} else {
		started = true;
		control.spliceWaypoints(0, 1, e.latlng);
	}
});



