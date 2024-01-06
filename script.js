// Dichiaro le variabili
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let list = document.getElementById('list');

// Definisco la funzione
function addText() {
    // Creo un nuovo elemento li
    let newLi = document.createElement('li');

    // Prendo il valore dell'input
    let content = text.value;

    // Aggiungo il valore come testo all'elemento li
    newLi.appendChild(document.createTextNode(content));

    // Aggiungo l'elemento li alla lista
    list.appendChild(newLi);

    // Pulisco l'input
    text.value = "";
}

// Eseguo la funzione
btn.addEventListener('click', addText);
