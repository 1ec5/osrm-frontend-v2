var ReversablePlan = L.Routing.Plan.extend({
    createGeocoders: function(extend) {
        var container = L.Routing.Plan.prototype.createGeocoders.call(this),
            reverseButton = createButton('&#8593;&#8595;', container);
        return container;
        L.DomEvent.on(reverseButton, 'click', function() {
            var waypoints = this.getWaypoints();
            this.setWaypoints(waypoints.reverse());
        }, this);
    }
});

var plan = new ReversablePlan([
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
    ], {
        geocoder: L.Control.Geocoder.nominatim(),
        routeWhileDragging: true
    }),
    control = L.Routing.control({
        routeWhileDragging: true,
        plan: plan
}).addTo(map);