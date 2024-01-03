// Dichiaro le variabili

let btn = document.getElementById('btn');

let paragraph = document.createElement('p');

let text = document.createTextNode('Hello World!');

function onClick() {

    // Verifico se il paragrafo è già presente

    if (btn.contains(paragraph)) {

        // Se presente, lo rimuovo

        btn.removeChild(paragraph);

    } else {

        // Altrimenti, lo aggiungo

        paragraph.appendChild(text);

        btn.appendChild(paragraph);
    }
}

// Eseguo l'evento click

btn.addEventListener('click', onClick);