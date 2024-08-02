// Initialize the map
window.L_PREFER_CANVAS = true;
var map = L.map('map', {
    renderer: L.canvas(),
    zoomDelta: 0.2,
    maxBoundsViscosity: 1.0,
    doubleClickZoom: false
}).setView([50, 0], 6); // Set initial view (lat, lng), zoom level

// Create an SVG element
//var svgElementBounds = [[-100, -100], [100, 100]]; // Set bounds as [[lat1, lng1], [lat2, lng2]] or [[y1, x1], [y2, x2]]
//var svgObject = document.getElementById('svgObject');
// Add the SVG overlay to the map
//L.svgOverlay(svgObject, svgElementBounds).addTo(map);

const bounds = [
    [-192, -192],
    [192, 192]
];
const image = L.imageOverlay(
    "static/maps/Map-Test.svg",
    bounds
).addTo(map);

map.setMaxBounds([
    [-192, -192],
    [192, 192]
]);

map.setMaxZoom(8); // Set maximum zoom level to 15
map.setMinZoom(-1); // Set minimum zoom level to 5