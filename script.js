// Dichiaro la variabile

let box = document.getElementById("box");

// Dichiaro la funzione

function colorChange () {
    box.style.backgroundColor = "red";
}

//Eseguiamo la funzione 

box.addEventListener("mouseover", colorChange);

