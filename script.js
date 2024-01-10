const previous = document.getElementById('previous');
const next = document.getElementById('next');
const images = document.querySelectorAll('.box img');


let currentIndex = 0;

function showImage(index) {
    // Nascondo tutte le immagini
    images.forEach(image => image.style.display = 'none');

    // Mostro solo l'immagine corrente
    images[index].style.display = 'block';
}

function enhanceImg(direction) {
    // Avanti o Indietro
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    showImage(currentIndex);
}

// Mostro la prima immagine all'inizio
showImage(currentIndex);

// Aggiungo gli eventi ai pulsanti
previous.addEventListener('click', () => enhanceImg('previous'));
next.addEventListener('click', () => enhanceImg('next'));
