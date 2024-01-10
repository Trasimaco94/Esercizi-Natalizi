# LE PARTI DEL CODICE JAVASCRIPT

1. **Selezione degli elementi del DOM:**
   
   ```javascript
   const previous = document.getElementById('previous');
   const next = document.getElementById('next');
   const images = document.querySelectorAll('.box img');
   ```

   Qui stiamo selezionando gli elementi del DOM con gli id "previous" e "next" per i pulsanti, e stiamo anche selezionando tutte le immagini all'interno dell'elemento con la classe "box".

2. **Inizializzazione dell'indice corrente:**
   
   ```javascript
   let currentIndex = 0;
   ```

   Stiamo creando una variabile `currentIndex` per tenere traccia dell'indice dell'immagine correntemente visualizzata.

3. **Definizione della funzione `showImage`:**
   
   ```javascript
   function showImage(index) {
       images.forEach(image => image.style.display = 'none');
       images[index].style.display = 'block';
   }
   ```

   Questa funzione accetta un indice e nasconde tutte le immagini impostando il loro stile `display` su 'none', quindi mostra solo l'immagine corrispondente impostando lo stile `display` su 'block'.

4. **Definizione della funzione `enhanceImg`:**
   
   ```javascript
   function enhanceImg(direction) {
       if (direction === 'next') {
           currentIndex = (currentIndex + 1) % images.length;
       } else {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
       }
       showImage(currentIndex);
   }
   ```

   Questa funzione è chiamata quando si fa clic sui pulsanti "Precedente" o "Successivo". Se il parametro `direction` è 'next', incrementa l'indice in modo circolare all'interno della lunghezza delle immagini. Se `direction` è 'previous', decrementa l'indice in modo circolare. Infine, chiama `showImage` per visualizzare l'immagine corrente.

5. **Mostra la prima immagine all'inizio:**
   
   ```javascript
   showImage(currentIndex);
   ```

   Questo assicura che la prima immagine sia visibile all'avvio dell'applicazione.

6. **Aggiunta degli eventi ai pulsanti:**
   
   ```javascript
   previous.addEventListener('click', () => enhanceImg('previous'));
   next.addEventListener('click', () => enhanceImg('next'));
   ```

   Qui stiamo ascoltando gli eventi di clic sui pulsanti "Precedente" e "Successivo". Quando viene cliccato uno dei pulsanti, viene chiamata la funzione `enhanceImg` con la direzione corrispondente.

In sintesi, il codice gestisce la visualizzazione delle immagini in un carosello, consentendo la navigazione tra le immagini precedenti e successive attraverso i pulsanti.

# LE DUE FUNZIONI NEL DETTAGLIO

### Funzione `showImage`:

```javascript
function showImage(index) {
    images.forEach(image => image.style.display = 'none');
    images[index].style.display = 'block';
}
```

- `showImage` è una funzione che accetta un parametro `index`, che rappresenta l'indice dell'immagine che desideriamo visualizzare.

- `images.forEach(image => image.style.display = 'none');`: Qui stiamo usando il metodo `forEach` per iterare su tutte le immagini selezionate. Per ognuna di esse, stiamo impostando lo stile `display` su 'none', nascondendo così tutte le immagini.

- `images[index].style.display = 'block';`: Dopo aver nascosto tutte le immagini, stiamo impostando lo stile `display` dell'immagine corrente (indicata dall'`index`) su 'block', rendendola visibile.

In sostanza, questa funzione si occupa di nascondere tutte le immagini tranne quella specificata dall'indice, che diventa quindi visibile.


```javascript
function showImage(index) {
    images.forEach(image => image.style.display = 'none');
    images[index].style.display = 'block';
}
```

 **Arrow Function:**
   
   ```javascript
   images.forEach(image => image.style.display = 'none');
   ```

   Qui stiamo utilizzando una arrow function, che è una forma concisa di scrivere una funzione in JavaScript. Nell'arrow function:

   - `images.forEach` è un metodo che itera su ogni elemento nell'array `images`.
   - `image => image.style.display = 'none'` è l'arrow function stessa. Accetta ogni elemento `image` e imposta il suo stile `display` su 'none'. 

   Questo è equivalente a scrivere:

   ```javascript
   images.forEach(function(image) {
       image.style.display = 'none';
   });
   ```

   L'utilizzo di arrow functions è spesso preferito per la loro sintassi più breve e il loro comportamento del contesto di `this` più intuitivo.

 **images[index]:**

   ```javascript
   images[index].style.display = 'block';
   ```

   - `images` è un NodeList restituito dalla querySelectorAll, che rappresenta un insieme di elementi del DOM.
   - `[index]` sta accedendo all'elemento nell'array `images` che ha l'indice specificato da `index`.

   Quindi, `images[index]` restituisce l'elemento dell'array `images` all'indice `index`, che è un elemento DOM di tipo immagine (`<img>`). Successivamente, stiamo impostando il suo stile `display` su 'block', rendendo così quell'immagine visibile.

In sostanza, la funzione `showImage` utilizza forEach per nascondere tutte le immagini e poi utilizza `images[index]` per mostrare l'immagine specifica indicata dall'indice.

### Funzione `enhanceImg`:

```javascript
function enhanceImg(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    showImage(currentIndex);
}
```

- `enhanceImg` è chiamata quando si preme uno dei pulsanti "Precedente" o "Successivo". Accetta un parametro `direction` che indica se l'utente vuole passare all'immagine successiva o precedente.

- `if (direction === 'next') { ... } else { ... }`: Questo blocco condizionale determina se l'utente ha cliccato su "Successivo" o "Precedente".

- Nel blocco `if`, `currentIndex = (currentIndex + 1) % images.length;`: Se l'utente ha cliccato su "Successivo", incrementiamo l'indice `currentIndex`. Utilizzando l'operatore modulo `%`, facciamo in modo che l'indice rimanga nell'intervallo delle immagini disponibili, creando un effetto di ciclo.

- Nel blocco `else`, `currentIndex = (currentIndex - 1 + images.length) % images.length;`: Se l'utente ha cliccato su "Precedente", decrementiamo l'indice `currentIndex`. Anche qui, utilizziamo l'operatore modulo per gestire il caso in cui l'indice diventi negativo.

- `showImage(currentIndex);`: Alla fine, chiamiamo la funzione `showImage` con il nuovo indice corrente per visualizzare l'immagine aggiornata.

In sintesi, la funzione `enhanceImg` si occupa di gestire la navigazione tra le immagini in base al pulsante cliccato e quindi chiama `showImage` per renderle visibili.

```javascript
if (direction === 'next') {
    currentIndex = (currentIndex + 1) % images.length;
} else {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
}
```

 **Condizione if:**

   ```javascript
   if (direction === 'next') {
       // ...
   } else {
       // ...
   }
   ```

   Questa condizione `if` controlla se la direzione della navigazione è "next" (successivo) o "previous" (precedente).

 **Incremento e Decremento con % (modulo):**

   - **Incremento (next):**
   
     ```javascript
     currentIndex = (currentIndex + 1) % images.length;
     ```

     - `currentIndex + 1`: Incrementiamo l'indice corrente di uno per passare all'immagine successiva.
     - `% images.length`: Utilizziamo l'operatore modulo `%` per garantire che l'indice rimanga all'interno del range delle immagini disponibili. Se `currentIndex + 1` supera la lunghezza dell'array `images`, il risultato del modulo farà sì che l'indice torni a 0, creando un effetto di ciclo.

   - **Decremento (previous):**
   
     ```javascript
     currentIndex = (currentIndex - 1 + images.length) % images.length;
     ```

     - `currentIndex - 1`: Decrementiamo l'indice corrente di uno per passare all'immagine precedente.
     - `+ images.length`: Aggiungiamo la lunghezza dell'array `images` prima di applicare il modulo. Questo evita risultati negativi, assicurandoci che l'indice rimanga positivo o zero.
     - `% images.length`: Utilizziamo l'operatore modulo per gestire il caso in cui l'indice diventi negativo o zero, creando ancora una volta un effetto di ciclo all'indietro.

L'utilizzo di `% images.length` è importante per garantire che l'indice rimanga all'interno del range delle immagini disponibili, evitando errori o comportamenti indesiderati quando si raggiungono gli estremi dell'array delle immagini.