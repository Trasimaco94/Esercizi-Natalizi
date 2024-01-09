// Definisco le variabili

const input = document.getElementById('input');

const text = document.getElementById('text');

//Definisco la funzione

function changeText () {
    text.style.color = 'red';
}

input.addEventListener('input', changeText);