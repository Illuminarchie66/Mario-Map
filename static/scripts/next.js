
var map = L.map('map', {
    crs: L.CRS.Simple,
    renderer: L.Canvas,
    zoomDelta: 0.5,
    zoomSnap: 0.5,
    maxBoundsViscosity: 1.0,
}).setView([-70,100], 3);

L.tileLayer('static/maps/Tiles/{z}/{x}/{y}.png', {
  continuousWorld: false,
  noWrap: true,  
  minZoom: 0,
  maxZoom: 9,
  maxBoundsViscosity: 1.0,
}).addTo(map);


// map.setMaxBounds([[0, 0], [157.5, 146]])

// var imageUrl = 'static/maps/duck.webp';
// var imageBounds =  [[0,0], [1000,1000]];

// // Add the image overlay to the map
// L.imageOverlay(imageUrl, imageBounds).addTo(map);

var marker = L.marker([-69.95, 80.35], {
    draggable: true,
  }).addTo(map);
  marker.bindPopup('LatLng Marker').openPopup();
  marker.on('dragend', function(e) {
    var point = marker.getLatLng();
    marker.getPopup().setContent('(' + point.lng + ', ' + point.lat + ')').openOn(map);
  });

