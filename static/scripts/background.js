const images = [
    'static/images/background1.jpeg',
    'static/images/background2.jpg',
    'static/images/background3.jpg',
    'static/images/background4.jpg',
    'static/images/background5.webp',
    'static/images/background6.webp',
    'static/images/background7.png',
];

const imageElement = document.querySelector('.background-image');
const fadeOverlay = document.querySelector('.background-overlay');
let currentIndex = 0;

function showImage(index) {
    imageElement.style.opacity = 0;
    fadeOverlay.style.opacity = 1;

    setTimeout(() => {
        imageElement.style.backgroundImage = `url(${images[index]})`;
        imageElement.style.opacity = 1;
        fadeOverlay.style.opacity = 0.5;

        // Apply the panning animation
        imageElement.classList.remove('panning');
        void imageElement.offsetWidth; // Trigger reflow to restart animation
        imageElement.classList.add('panning');
    }, 1000); // Match the CSS transition duration

    currentIndex = (index + 1) % images.length;
}

function startSlideshow() {
    showImage(currentIndex);
    setInterval(() => showImage(currentIndex), 8000); // Change image every 5 seconds
}

// Initialize the slideshow
startSlideshow();