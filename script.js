// Dichiaro le variabili

let btn = document.getElementById('btn');

let box = document.getElementById('box');

//Definisco la funzione

function moveBox () {
box.style.marginLeft = "50px";
}



//Eseguo la funzione

btn.addEventListener('click', moveBox);
