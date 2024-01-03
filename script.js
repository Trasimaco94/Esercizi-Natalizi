// Creo un nuovo elemento p

let addP = document.createElement('p');

// Creo un contenuto testuale (nodo di testo/nodo testuale)

let text = document.createTextNode('Nuovo paragrafo');


// Associo/appendo il nuovo nodo testuale all'elemento p

addP.appendChild(text);

// Associo/appendo il paragrafo con il suo relativo contenuto al body

document.body.appendChild(addP);