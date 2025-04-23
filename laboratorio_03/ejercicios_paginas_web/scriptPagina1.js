let currentFontSize = 16;

function updateFontSize() {
    const text = document.getElementById("text");
    text.style.fontSize = currentFontSize + "px";
    console.log("Tamaño de fuente cambiado a:", currentFontSize + "px");
}

function increaseFontSize() {
    currentFontSize += 2;
    updateFontSize();
}

function decreaseFontSize() {
    if (currentFontSize > 2) {
        currentFontSize -= 2;
        updateFontSize();
    }
}

function changeColor() {
    const text = document.getElementById("text");
    const colorInput = document.getElementById("colorInput");
    text.style.color = colorInput.value;
    console.log("Color cambiado a:", colorInput.value);
}
