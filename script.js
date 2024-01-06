// Dichiaro le variabili

let btn = document.getElementById('btn');

let counter = document.getElementById('counter');

// Definisco la funzione

function onClick() {

    let content = counter.innerHTML;

    let increase = parseInt(content) + 1;

    counter.innerHTML = increase;
    
}

// Eseguo la funzione

btn.addEventListener('click', onClick);
