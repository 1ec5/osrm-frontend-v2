/*    Leaflet and the map    */

// initialize the map on the "map" div with a given center and zoom
var map = L.map('map');

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mslee.iyrjm7vi',
    accessToken: 'pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg'
}).addTo(map);

/*    Geocoder w/ Control.geocoder   */
L.Control.geocoder().addTo(map);

/* Routing control with LRM */
L.Routing.control({
    waypoints: [
        L.latLng(38.928674, -77.004756),
        L.latLng(38.914072, -77.032507)
    ],
    routeWhileDragging: true,
	geocoder: L.Control.Geocoder.nominatim()
}).addTo(map);

