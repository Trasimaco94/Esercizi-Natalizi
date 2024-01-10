// Dichiaro le variabili
let box = document.getElementById('box');

// Dichiaro la funzione
function transparent () {

    box.style.opacity = 0.3;

}

// La proprietà opacity accetta valori compresi tra 0 e 1, dove 0 è completamente trasparente e 1 è completamente opaco.

// Eseguo
box.addEventListener('click', transparent);

