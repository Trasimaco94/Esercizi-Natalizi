// Funzione per gestire l'evento mousemove
function handleMouseMove(event) {

    // Ottieni le coordinate della posizione del mouse

    const mouseX = event.clientX;

    const mouseY = event.clientY;

    // Aggiorna il testo nell'elemento HTML

    document.getElementById('coordinates').textContent =
     `X: ${mouseX}, Y: ${mouseY}`;
}

// Aggiungi un ascoltatore per l'evento mousemove all'interno del documento

document.addEventListener('mousemove', handleMouseMove);
