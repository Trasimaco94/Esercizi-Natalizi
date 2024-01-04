let text = document.getElementById("text");

function changeColor() {
    text.style.color = "blue";
}

text.addEventListener("click", changeColor);