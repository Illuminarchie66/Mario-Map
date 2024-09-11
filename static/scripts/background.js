const images = [
    'static/images/background1.jpeg',
    'static/images/background2.jpg',
    'static/images/background3.jpg',
    'static/images/background4.jpg',
    'static/images/background5.jpg',
    'static/images/background6.png',
    'static/images/background7.png',
    'static/images/background8.jpeg'
];

const imageElement = document.querySelector('.background-image');
const fadeOverlay = document.querySelector('.background-overlay');
let currentIndex = -1;
let indices = [];

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

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

    currentIndex = index;
}

function startSlideshow() {
    // Initialize indices and shuffle
    indices = shuffle([...Array(images.length).keys()]);

    // Start with a random image
    currentIndex = indices.shift();
    showImage(currentIndex);

    setInterval(() => {
        // Get the next index from the shuffled list
        if (indices.length === 0) {
            // Reinitialize and shuffle if all indices are used
            indices = shuffle([...Array(images.length).keys()]);
        }
        currentIndex = indices.shift();
        showImage(currentIndex);
    }, 8000); // Change image every 8 seconds
}

// Initialize the slideshow
startSlideshow();