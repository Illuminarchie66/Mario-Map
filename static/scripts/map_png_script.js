
var img = new Image();
img.src = 'static/maps/map6-high.png';

// Wait for the image to load
img.onload = function() {
    // Extract the dimensions of the image
    var imageWidth = img.width;
    var imageHeight = img.height;

    // Initialize the map and set its CRS to Simple
    var map = L.map('map', {
        crs: L.CRS.Simple,
        zoomDelta: 0.2,
        zoomSnap: 0.2,
        maxBoundsViscosity: 1.0,
        doubleClickZoom: false,
        zoomAnimation: false,
        fadeAnimation: false,
        markerZoomAnimation: false
    }).setView([0, 0], 0);

    // Define the bounds for the image overlay using the extracted dimensions
    var imageBounds = [[-imageHeight/2, -imageWidth/2], [imageHeight/2, imageWidth/2]];

    // Add the image overlay to the map
    L.imageOverlay(img.src, imageBounds).addTo(map);

    // Set the initial view of the map to fit the image
    map.fitBounds(imageBounds);
    map.setMaxBounds(imageBounds);

    map.setMaxZoom(5); // Set maximum zoom level to 15
    map.setMinZoom(-4); // Set minimum zoom level to
};

// Handle image loading errors
img.onerror = function() {
    console.error('Failed to load the image.');
};

