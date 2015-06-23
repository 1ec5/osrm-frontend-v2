/*    Leaflet and the map    */

// initialize the map on the "map" div with a given center and zoom
var map = L.map('map').setView([38.8439, -77.0185], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> © <a href="http://mapbox.com">Mapbox</a>',
    detectRetina: true,
	id: 'mslee.iyrjm7vi',
    accessToken: 'pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg'
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(38.928674, -77.004756),
        L.latLng(38.914072, -77.032507)
    ],
    routeWhileDragging: true
}).addTo(map);