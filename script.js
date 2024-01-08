// Dichiaro le variabili

let box = document.getElementById('box');

//Definisco la funzione

function changeColor () {
box.style.backgroundColor = "blue"
}

//Eseguo la funzione

box.addEventListener('mouseout', changeColor);
