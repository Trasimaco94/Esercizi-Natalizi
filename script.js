    // Dichiaro le variabili

    let textFilter = document.getElementById('textFilter');

    let text = document.getElementById('text');

    // Definisco la funzione

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

    // Eseguo la funzione quando si verifica l'evento di input nell'input
    
    textFilter.addEventListener('input', textRemove);

