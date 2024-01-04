//Con querySelectorAll posso trattare tutti gli elementi li come Array

let elements = document.querySelectorAll('li');

// Funzione da dichiarare che ha un parametro. Verrà  utilizzato nel forEach
function enhancedElements(element) {
    element.style.height = "100px";
    element.style.width = "100px";
    element.style.color = "red";
}
// Con forEach creiamo una funzione anonima che si porta dietro però il parametro della funzione precedente
elements.forEach(function (element) {

    element.addEventListener('mouseover', function () {
        // La funzione che l'evento deve eseguire è quella anonima, che avrà al suo interno quella precedente
        enhancedElements(element);
    });
});