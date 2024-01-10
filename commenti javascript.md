# LE PARTI DEL CODICE

```javascript
// Funzione per gestire l'evento mousemove
function handleMouseMove(event) {
    // Ottieni le coordinate della posizione del mouse
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Aggiorna il testo nell'elemento HTML
    document.getElementById('coordinates').textContent = `X: ${mouseX}, Y: ${mouseY}`;
}

// Aggiungi un ascoltatore per l'evento mousemove all'interno del documento
document.addEventListener('mousemove', handleMouseMove);
```

1. **Definizione della funzione `handleMouseMove`**:
   - La funzione `handleMouseMove` è una funzione che gestirà l'evento `mousemove` quando si verifica.
   - L'evento `mousemove` fornisce informazioni sulla posizione del mouse all'interno della finestra del browser.

2. **Parametro `event`**:
   - La funzione accetta un parametro `event`, che rappresenta l'oggetto evento associato all'evento `mousemove`.
   - Questo oggetto contiene molte informazioni, tra cui le coordinate del mouse.

3. **Ottieni le coordinate del mouse**:
   - `event.clientX` restituisce la coordinata X del mouse rispetto al bordo sinistro della finestra del browser.
   - `event.clientY` restituisce la coordinata Y del mouse rispetto al bordo superiore della finestra del browser.
   - Le coordinate vengono quindi memorizzate nelle variabili `mouseX` e `mouseY`.

4. **Aggiornamento dell'elemento HTML**:
   - `document.getElementById('coordinates')` seleziona l'elemento HTML con l'id "coordinates".
   - `textContent` viene utilizzato per impostare il testo all'interno di quell'elemento.
   - Il testo viene impostato con le coordinate del mouse, utilizzando la stringa di template `${mouseX}, ${mouseY}`.

5. **Aggiunta di un ascoltatore per l'evento mousemove**:
   - `document.addEventListener('mousemove', handleMouseMove)` aggiunge un ascoltatore all'intero documento per l'evento `mousemove`.
   - Ogni volta che il mouse si muove, l'evento `mousemove` verrà catturato e la funzione `handleMouseMove` verrà chiamata, aggiornando le coordinate del mouse nell'elemento HTML.

In questo modo, ogni volta che muovi il mouse sulla pagina, le coordinate vengono aggiornate e visualizzate dinamicamente nell'elemento con id "coordinates".

# IL TEMPLATE LITERAL

L'utilizzo del simbolo del dollaro `$` all'interno di una stringa preceduto da una parentesi graffa `{}` è una sintassi chiamata "template literals" o "template strings" in JavaScript. Questa sintassi consente di incorporare espressioni JavaScript direttamente all'interno di una stringa. Quando una variabile o un'espressione è racchiusa tra `${}` all'interno di una stringa delimitata con backticks (`), verrà valutata e il risultato verrà inserito nella stringa.

Nel nostro caso:

```javascript
document.getElementById('coordinates').textContent = `X: ${mouseX}, Y: ${mouseY}`;
```

- Le coordinate del mouse (`mouseX` e `mouseY`) vengono inserite all'interno della stringa.
- `${mouseX}` viene valutato e il suo valore viene inserito nella posizione della stringa in cui appare.
- Lo stesso vale per `${mouseY}`.

L'uso di template literals rende il codice più leggibile e flessibile rispetto alla concatenazione tradizionale delle stringhe, specialmente quando devi incorporare variabili o espressioni complesse all'interno delle stringhe.

Se non volessi utilizzare il template literal, potresti scrivere il codice utilizzando la concatenazione di stringhe. Ecco come potrebbe apparire il codice senza template literal:

```javascript
// Funzione per gestire l'evento mousemove
function handleMouseMove(event) {
    // Ottieni le coordinate della posizione del mouse
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Crea la stringa di coordinate senza template literal
    const coordinatesText = 'X: ' + mouseX + ', Y: ' + mouseY;

    // Aggiorna il testo nell'elemento HTML
    document.getElementById('coordinates').textContent = coordinatesText;
}

// Aggiungi un ascoltatore per l'evento mousemove all'interno del documento
document.addEventListener('mousemove', handleMouseMove);
```

In questo esempio, la stringa `coordinatesText` è costruita concatenando le variabili `mouseX` e `mouseY` con le stringhe statiche. Questo è equivalente all'uso del template literal, ma è più verboso e meno leggibile, specialmente quando hai espressioni più complesse da inserire nelle stringhe. L'uso del template literal con `${}` è generalmente preferito per migliorare la leggibilità del codice.