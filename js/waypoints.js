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

/* Make popup buttons */
function createButton(label, container) {
    var btn = L.DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
}

map.on('click', function(e) {
    var container = L.DomUtil.create('div'),
        startBtn = createButton('Start from this location', container),
        destBtn = createButton('Go to this location', container);

    L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(map);
});

/* Make popup buttons */
map.on(startBtn, 'click', function() {
    control.spliceWaypoints(0, 1, e.latlng);
    map1.closePopup();
});

map.on(destBtn, 'click', function() {
    control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
    map1.closePopup();
});



