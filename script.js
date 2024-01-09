//Funzione che include le variabili
function visibility() {

    // Variabili
    const check = document.getElementById('check');

    const text = document.getElementById('text');

    // Imposto l'evento change sul checkbox e uso una funzione anonima
    check.addEventListener('change', function() {
        // Mostra o nascondi il paragrafo in base allo stato del checkbox
        text.style.display = check.checked ? 'block' : 'none';
    });
}

// Chiamata alla funzione al caricamento della pagina
document.addEventListener('DOMContentLoaded', visibility);
