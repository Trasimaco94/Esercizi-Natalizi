# LE TRE PARTI PRINCIPALI DEL CODICE


1. **Dichiarazione delle Variabili:**
   ```javascript

   let textFilter = document.getElementById('textFilter');

   let text = document.getElementById('text');
   ```
   Qui sI dichiarANO due variabili, `textFilter` e `text`, ottenendo gli elementi corrispondenti dagli ID nell'HTML.

2. **Definizione della Funzione `textRemove`:**
   ```javascript

   function textRemove() {

     let inputText = textFilter.value;

     let paragraphText = text.innerText;

     function isCharNotInInput(char) {

       return inputText.indexOf(char) === -1;
     }

     let paragraphArray = paragraphText.split('');

     let filteredArray = paragraphArray.filter(isCharNotInInput);

     let newParagraphText = filteredArray.join('');

     text.innerText = newParagraphText;
   }
   ```
   - `textRemove` è la funzione che viene chiamata quando l'utente inserisce del testo nell'input.

   - `inputText` contiene il testo inserito nell'input.

   - `paragraphText` contiene il testo del paragrafo.

   - `isCharNotInInput` è una funzione ausiliaria che restituisce `true` se un carattere non è presente nell'input.

   - `paragraphArray` è un array contenente ogni carattere del testo del paragrafo.

   - `filteredArray` è un array filtrato che contiene solo i caratteri non presenti nell'input.

   - `newParagraphText` è una stringa ottenuta unendo gli elementi di `filteredArray`.

   - Infine, il testo del paragrafo viene aggiornato con `newParagraphText`.

3. **Event Listener e Esecuzione della Funzione:**
   ```javascript
   textFilter.addEventListener('input', textRemove);
   ```
   Questo codice ascolta l'evento di input sull'elemento `textFilter`. Quando l'utente inserisce del testo, la funzione `textRemove` viene chiamata per aggiornare il testo del paragrafo di conseguenza.

In sintesi, il codice reagisce dinamicamente all'input dell'utente, filtrando il testo del paragrafo in base al testo inserito nell'input.

# LA FUNZIONE *ISCHARNOTININPUT*


```javascript
function isCharNotInInput(char) {
  return inputText.indexOf(char) === -1;
}
```

Questa funzione accetta un carattere (`char`) come argomento e restituisce `true` se il carattere non è presente nell'`inputText`, altrimenti restituisce `false`.

- `inputText` è la stringa che contiene il testo inserito nell'input dall'utente. Viene definito all'interno della funzione `textRemove` e rappresenta l'attuale stato del testo inserito nell'input.

- `char` è il carattere su cui la funzione sta operando, ovvero il carattere corrente dell'array del paragrafo.

- `indexOf(char)` restituisce l'indice della prima occorrenza di `char` all'interno di `inputText`. Se `char` non è presente, `indexOf` restituirà -1.

- Quindi, `inputText.indexOf(char) === -1` restituirà `true` se `char` non è presente nell'`inputText`, indicando che il carattere del paragrafo non è presente nell'input.

In sostanza, la funzione `isCharNotInInput` viene utilizzata come callback nella funzione `.filter()` per filtrare solo i caratteri che non sono presenti nell'`inputText`. L'utilizzo di questa funzione contribuisce a mantenere il codice pulito e leggibile, separando la logica della condizione di filtro in una funzione separata.