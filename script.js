
// Per dichirare le variabili, mi assicuro questa volta di dichiararle all'interno di una funzione che si assicura di scaricare il javascript soltanto dopo aver caricato tutto il DOM sul browser.
document.addEventListener('DOMContentLoaded', function () {

    // Inglobo tutto il mio codice all'interno di una funzione anonima. 

    let red = document.getElementById('red');
    let black = document.getElementById('black');

    function changeWidthHeight() {
        red.style.width = "100px";
        red.style.height = "100px";
        black.style.width = "100px";
        black.style.height = "100px";
    }

    red.addEventListener('click', changeWidthHeight);
    black.addEventListener('click', changeWidthHeight);
});
