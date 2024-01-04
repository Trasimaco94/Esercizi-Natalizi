## Perché c'è stato il bisogno di usare il parametro *element* e la *funzione anonima* dopo *forEach*?

La ragione per cui utilizzo una funzione anonima all'interno del forEach è legata al contesto di esecuzione delle funzioni e alla gestione dei parametri. Vediamo i motivi:

- **Scope della variabile *element*:** La funzione passata a *forEach* viene eseguita per ogni elemento nell'**array**. Se definisco la funzione *enhancedElements* direttamente all'interno di *forEach*, non avrei accesso alla variabile *element* all'interno della funzione principale (che è l'elemento corrente dell'iterazione). Dichiarando una funzione anonima all'interno di forEach, posso passare la variabile *element* come parametro e fare in modo che la funzione abbia accesso a questa variabile nel suo *scope*.

- **Gestione degli eventi:** Quando assegno un gestore di eventi (in questo caso, **'*mouseover*'**) a un elemento, la funzione dell'evento viene chiamata con un oggetto evento. L'uso di una funzione anonima mi consente di **"catturare"** l'elemento corrente come parametro e passarlo alla mia funzione ***enhancedElements***. In questo modo, posso accedere all'elemento specifico che ha scatenato l'evento all'interno della funzione.



