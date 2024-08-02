

const map = L.map("map", {
    crs: L.CRS.Simple,
    maxBoundsViscoscity: 1.0, 
    doubleClickZoom: false
}).setView([0, 0], -2);
  
const bounds = [
    [0, 0],
    [3840, 3840]
];

const image = L.imageOverlay(
    "static/maps/Map-Test.svg",
    bounds
).addTo(map);

map.fitBounds(bounds);
map.setMaxBounds([
    [0, 0],
    [3840, 3840]
]);

map.setMaxZoom(8); // Set maximum zoom level to 15
map.setMinZoom(-2); // Set minimum zoom level to 5