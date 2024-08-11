var waypoints = {
    area:[],
    location:[],
    landmark:[],
    vehicle:[],

};

function addMarker({x, y, name, game, course, description, iconpic, imagesrc, tag}) {
    // Define the marker with the given coordinates
    var marker = L.marker([y, x], {icon: iconpic}).addTo(map);
    var courseInfo = course ? `(${course}) <br>` : '';
    // Define the popup content
    var popupContent = `
        <div class="popup-container">
            <div class="image-container">
                <img src="static/popups/images/${imagesrc}" alt="Image">
                <div class="fade-overlay"></div>
            </div>
            <div class="text-container">
                <div class="title-text">${name} ${courseInfo}</div>
                <div class="info-text">
                    First appeared:
                    ${game} <br> <br>
                    ${description}
                </div> 
            </div>
        </div>
    `;

    // Define custom options for the popup
    var customOptions = {
        'className': 'popupCustom'
    };

    // Bind the popup to the marker with the custom options
    marker.bindPopup(popupContent, customOptions);

    waypoints[tag].push(marker);
    map.removeLayer(marker);
}

function toggleWaypoints(tag) {
    waypoints[tag].forEach(function(marker) {
        if (map.hasLayer(marker)) {
            map.removeLayer(marker);
        } else {
            marker.addTo(map);
        }
    });
}


var redIcon = L.icon({
    iconUrl: "static/popups/icons/red-icon.png", // URL of the icon image
    shadowUrl: "static/popups/icons/marker-shadow.png",
    iconSize: [53.6, 86.4], // Size of the icon
    shadowSize:   [75, 80], // size of the shadow
    iconAnchor: [26.8, 86.4], // Anchor point of the icon (tip of the marker)
    shadowAnchor: [22, 81],
    popupAnchor: [0, -90] // Popup anchor relative to the icon
});

var blueIcon = L.icon({
    iconUrl: 'static/popups/icons/blue-icon.png', // URL of the icon image
    shadowUrl: 'static/popups/icons/marker-shadow.png',
    iconSize: [53.6, 86.4], // Size of the icon
    shadowSize:   [75, 80], // size of the shadow
    iconAnchor: [26.8, 86.4], // Anchor point of the icon (tip of the marker)
    shadowAnchor: [22, 81],
    popupAnchor: [0, -90] // Popup anchor relative to the icon
});

var peachIcon = L.icon({
    iconUrl: 'static/popups/icons/peach-icon.png', // URL of the icon image
    shadowUrl: 'static/popups/icons/marker-shadow.png',
    iconSize: [53.6, 86.4], // Size of the icon
    shadowSize:   [75, 80], // size of the shadow
    iconAnchor: [26.8, 86.4], // Anchor point of the icon (tip of the marker)
    shadowAnchor: [22, 81],
    popupAnchor: [0, -90] // Popup anchor relative to the icon
});

var marioIcon = L.icon({
    iconUrl: 'static/popups/icons/mario-icon.png', // URL of the icon image
    shadowUrl: 'static/popups/icons/marker-shadow.png',
    iconSize: [53.6, 86.4], // Size of the icon
    shadowSize:   [75, 80], // size of the shadow
    iconAnchor: [26.8, 86.4], // Anchor point of the icon (tip of the marker)
    shadowAnchor: [22, 81],
    popupAnchor: [0, -90] // Popup anchor relative to the icon
});

var pipeIcon = L.icon({
    iconUrl: 'static/popups/icons/pipe-icon.png', // URL of the icon image
    shadowUrl: 'static/popups/icons/marker-shadow.png',
    iconSize: [53.6, 86.4], // Size of the icon
    shadowSize:   [75, 80], // size of the shadow
    iconAnchor: [26.8, 86.4], // Anchor point of the icon (tip of the marker)
    shadowAnchor: [22, 81],
    popupAnchor: [0, -90] // Popup anchor relative to the icon
});

var starIcon = L.icon({
    iconUrl: 'static/popups/icons/star-icon.png', // URL of the icon image
    shadowUrl: 'static/popups/icons/marker-shadow.png',
    iconSize: [53.6, 86.4], // Size of the icon
    shadowSize:   [75, 80], // size of the shadow
    iconAnchor: [26.8, 86.4], // Anchor point of the icon (tip of the marker)
    shadowAnchor: [22, 81],
    popupAnchor: [0, -90] // Popup anchor relative to the icon
});

var tennisIcon = L.icon({
    iconUrl: 'static/popups/icons/tennis-icon.png', // URL of the icon image
    shadowUrl: 'static/popups/icons/marker-shadow.png',
    iconSize: [53.6, 86.4], // Size of the icon
    shadowSize:   [75, 80], // size of the shadow
    iconAnchor: [26.8, 86.4], // Anchor point of the icon (tip of the marker)
    shadowAnchor: [22, 81],
    popupAnchor: [0, -90] // Popup anchor relative to the icon
});

var golfIcon = L.icon({
    iconUrl: 'static/popups/icons/golf-icon.png', // URL of the icon image
    shadowUrl: 'static/popups/icons/marker-shadow.png',
    iconSize: [53.6, 86.4], // Size of the icon
    shadowSize:   [75, 80], // size of the shadow
    iconAnchor: [26.8, 86.4], // Anchor point of the icon (tip of the marker)
    shadowAnchor: [22, 81],
    popupAnchor: [0, -90] // Popup anchor relative to the icon
});

var flowerIcon = L.icon({
    iconUrl: 'static/popups/icons/flower-icon.png', // URL of the icon image
    shadowUrl: 'static/popups/icons/marker-shadow.png',
    iconSize: [53.6, 86.4], // Size of the icon
    shadowSize:   [75, 80], // size of the shadow
    iconAnchor: [26.8, 86.4], // Anchor point of the icon (tip of the marker)
    shadowAnchor: [22, 81],
    popupAnchor: [0, -90] // Popup anchor relative to the icon
});

var vehicleIcon = L.icon({
    iconUrl: 'static/popups/icons/vehicle-icon.png', // URL of the icon image
    shadowUrl: 'static/popups/icons/marker-shadow.png',
    iconSize: [53.6, 86.4], // Size of the icon
    shadowSize:   [75, 80], // size of the shadow
    iconAnchor: [26.8, 86.4], // Anchor point of the icon (tip of the marker)
    shadowAnchor: [22, 81],
    popupAnchor: [0, -90] // Popup anchor relative to the icon
});

// var rotatedIcon = L.icon({
//     iconUrl: 'static/popups/icons/arrow-icon.png', // URL of the icon image
//     iconSize: [53.6, 86.4], // Size of the icon
//     iconAnchor: [26.8, 86.4], // Anchor point of the icon (tip of the marker)
//     popupAnchor: [0, -90] // Popup anchor relative to the icon
// });

var iconMapping = {
    "red": redIcon,
    "blue": blueIcon,
    "peach": peachIcon,
    "mario": marioIcon,
    "star": starIcon,
    "pipe": pipeIcon,
    "tennis": tennisIcon,
    "golf": golfIcon,
    "flower": flowerIcon,
    "vehicle": vehicleIcon
};

//L.marker([51.5, -0.09], { icon: rotatedIcon }).addTo(map);
