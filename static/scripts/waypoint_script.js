var waypoints = {
    area:[],
    location:[],
    landmark:[],
    vehicle:[],
    arrow:[]
};

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

var rotatedIcon = L.icon({
    iconUrl: 'static/popups/icons/arrow-icon.png', // URL of the icon image
    iconSize: [1.5*1152/32, 1.5*963/32], // Size of the icon
    iconAnchor: [1.5*1152/64, 1.5*963/64], // Anchor point of the icon (tip of the marker)
    popupAnchor: [0, -30], // Popup anchor relative to the icon
});

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

function addMarker({x, y, name, game, course, description, iconpic, imagesrc, tag}) {
    // Define the marker with the given coordinates
    var marker = L.marker([y, x], {icon: iconpic}).addTo(map);
    var courseInfo = course ? `(${course}) <br>` : '';
    // Define the popup content
    var popupContent = `
        <div class="popup-container">
            <div class="image-container">
                <img src=https://mario-map.s3.eu-west-2.amazonaws.com/popups/${imagesrc} alt="Image">
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


function addMarker2({x, y, name, game, course, description, iconpic, images, tag}) {
    // Define the marker with the given coordinates
    var marker = L.marker([y, x], {icon: iconpic}).addTo(map);
    var courseInfo = course ? `(${course}) <br>` : '';

    // Generate image elements for the carousel
    var imageElements = images.map((src, index) => {
        return `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="static/popups/images/${src}" alt="Image ${index + 1}">
            </div>
        `;
    }).join('');

    // Define the popup content with carousel
    var popupContent = `
        <div class="popup-container">
            <div class="carousel-container">
                <div class="carousel">
                    ${imageElements}
                </div>
                <button class="carousel-control-prev">&lt;</button>
                <button class="carousel-control-next">&gt;</button>
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
        'className': 'custom-popup'
    };

    // Bind the popup to the marker with the custom options
    marker.bindPopup(popupContent, customOptions);

    // Add the marker to the appropriate waypoint group
    waypoints[tag].push(marker);
    map.removeLayer(marker);

    // Attach event listeners for carousel controls
    marker.on('popupopen', function() {
        var carouselContainer = marker.getPopup().getElement().querySelector('.carousel');
        var items = carouselContainer.querySelectorAll('.carousel-item');
        var currentIndex = 0;

        // Show the previous image
        carouselContainer.parentElement.querySelector('.carousel-control-prev').onclick = function() {
            items[currentIndex].classList.remove('active');
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
            items[currentIndex].classList.add('active');
        };

        // Show the next image
        carouselContainer.parentElement.querySelector('.carousel-control-next').onclick = function() {
            items[currentIndex].classList.remove('active');
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
            items[currentIndex].classList.add('active');
        };
    });
}



function addArrow({x, y, name, imagesrc, angle}) {
    var marker = L.marker([y, x], {icon: rotatedIcon, rotationAngle: angle}).addTo(map);
    // Define the popup content
    var popupContent = `
        <div class="popup-container">
            <div class="image-container">
                <img src="https://mario-map.s3.eu-west-2.amazonaws.com/popups/${imagesrc}" alt="Image">
                <div class="fade-overlay"></div>
            </div>
            <div class="text-container">
                <div class="info-text">
                    This is the way to:
                </div> 
                <div class="title-text">${name}</div>
            </div>
        </div>
    `;

    // Define custom options for the popup
    var customOptions = {
        'className': 'popupCustom'
    };

    // Bind the popup to the marker with the custom options
    marker.bindPopup(popupContent, customOptions);

    waypoints["arrow"].push(marker);
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



//L.marker([51.5, -0.09], { icon: rotatedIcon }).addTo(map);

