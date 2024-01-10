// Dichiaro le variabili
let timer = document.getElementById('timer');
let btn = document.getElementById('btn');
let isTimerRunning = false;
let intervalId;

// Dichiaro la funzione
function playStop() {
    if (isTimerRunning) {
        // Se il timer è in esecuzione, arresta il timer
        clearInterval(intervalId);
        isTimerRunning = false;
    } else {
        // Se il timer non è in esecuzione, avvia il timer
        updateTimer(); // Chiamare la funzione una volta prima di impostare l'intervallo
        intervalId = setInterval(function () {
            updateTimer();
        }, 1000);
        isTimerRunning = true;
    }
}

function updateTimer() {

    let timerText = timer.innerHTML;

    let timeArray = timerText.split(':');

    let minutes = parseInt(timeArray[0]);

    let seconds = parseInt(timeArray[1]);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    // Formatta i minuti e i secondi in due cifre
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Aggiorna il testo del timer
    timer.innerHTML = formattedMinutes + ':' + formattedSeconds;
}

// Eseguo
btn.addEventListener('click', playStop);
