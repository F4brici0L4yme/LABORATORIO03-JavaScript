function changeTextFontSize() {
    const text = document.getElementById("text");
    const size = document.getElementById("size").value;
    const sizePx = text.style.fontSize = size + "px";
    text.style.fontSize = sizePx;
    console.log("Tamaño de fuente cambiado a:", sizePx);
}
function changeColor() {
    const text = document.getElementById("text");
    const colorInput = document.getElementById("colorInput");
    text.style.color = colorInput.value;
    console.log("Color cambiado a:", colorInput.value);
}