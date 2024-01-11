// Funzione per impostare l'immagine di sfondo in base all'opzione selezionata

function setBackground() {

    const imageSelector = document.getElementById('backImg').value;
    
    const backgroundElement = document.getElementById('backDiv');
    
backgroundElement.style.backgroundImage = 'url(' + imageSelector + ')';
    
                
    };

    // Chiamare la funzione una volta per impostare l'immagine di sfondo iniziale
    setBackground();

