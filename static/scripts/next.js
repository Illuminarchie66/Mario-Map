
var map = L.map('map', {
    crs: L.CRS.Simple,
    renderer: L.Canvas,
    zoomDelta: 0.5,
    zoomSnap: 0.5,
    maxBoundsViscosity: 1.0,
    fullscreenControl: true
}).setView([-68.95, 80.35], 6);

L.tileLayer('https://mario-map.s3.eu-west-2.amazonaws.com/Tiles/{z}/{x}/{y}.png', {
  continuousWorld: false,
  noWrap: true,  
  minZoom: 2,
  maxZoom: 9,
  maxBoundsViscosity: 1.0,
}).addTo(map);

map.setMaxBounds([[-292, -150], [100, 330]])

//Uncomment this code to add an additional marker which will tell you the position it is at.
// var marker = L.marker([-69.95, 80.35], {
//     draggable: true,
//   }).addTo(map);
//   marker.bindPopup('LatLng Marker').openPopup();
//   marker.on('dragend', function(e) {
//     var point = marker.getLatLng();
//     marker.getPopup().setContent('(' + point.lng + ', ' + point.lat + ')').openOn(map);
//   });

