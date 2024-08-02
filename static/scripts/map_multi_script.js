// Define the different resolutions of the image
var imageResolutions = [
    { url: 'static/maps/map6-low.png', zoom: 1 },
    { url: 'static/maps/map6-mid.png', zoom: 3 },
    { url: 'static/maps/map6-high.png', zoom: 5 }
];

// Create a cache for preloaded images
var imageCache = {};

// Preload each image
function preloadImages() {
    var promises = imageResolutions.map(function(res) {
        return new Promise(function(resolve, reject) {
            var img = new Image();
            img.src = res.url;
            img.onload = function() {
                // Store the image's natural width and height
                res.width = img.width;
                res.height = img.height;
                imageCache[res.url] = img;
                resolve();
            };
            img.onerror = function() {
                console.error('Failed to load image:', res.url);
                reject();
            };
        });
    });

    return Promise.all(promises);
}

// Initialize the map and set its CRS to Simple
var map = L.map('map', {
    crs: L.CRS.Simple,
    zoomAnimation: false,
    fadeAnimation: false,
    markerZoomAnimation: false
}).setView([0, 0], 4);

map.setMinZoom(-4); // Set minimum zoom level to
map.setMaxZoom(4); // Set maximum zoom level to 15

// Define a function to get the appropriate image overlay based on the zoom level
function getImageOverlayForZoom(z) {
    for (var i = 0; i < imageResolutions.length; i++) {
        if (z <= imageResolutions[i].zoom) {
            return imageResolutions[i];
        }
    }
    return imageResolutions[imageResolutions.length - 1];
}

// Add the initial image overlay
function addOverlay() {
    var currentOverlay = getImageOverlayForZoom(map.getZoom());
    var imageBounds = [[0, 0], [currentOverlay.height, currentOverlay.width]];
    var img = imageCache[currentOverlay.url];
    var overlay = L.imageOverlay(img.src, imageBounds).addTo(map);
    map.fitBounds(imageBounds);
}

// When images are preloaded, add the initial overlay and set up zoom event
preloadImages().then(function() {
    addOverlay();
    var zoom = 0
    map.setZoom(zoom)

    var imageBounds = [[0, 0], [imageResolutions[0].height, imageResolutions[0].width]]

    // Update the image overlay when the zoom level changes
    map.on('zoomend', function() {
        var newOverlay = getImageOverlayForZoom(zoom);
        if (newOverlay.url !== getImageOverlayForZoom(map.getZoom()).url) {
            map.eachLayer(function(layer) {
                if (layer instanceof L.ImageOverlay) {
                    map.removeLayer(layer);
                }
            });
            var img = imageCache[newOverlay.url];
            var overlay = L.imageOverlay(img.src, imageBounds).addTo(map);
            console.log(map.getZoom())
        }
        zoom = map.getZoom();
    });
}).catch(function() {
    console.error('Failed to preload images.');
});

