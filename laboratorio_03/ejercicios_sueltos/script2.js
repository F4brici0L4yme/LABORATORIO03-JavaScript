function invertText(){
    const text = document.getElementById("normalText").value;
    let invertedText = "";
    for(let i = text.length - 1; i >= 0; i--){
        invertedText += text[i];
    }
    document.getElementById("invertedText").innerHTML = invertedText;
    console.log('Texto invertido: '+ invertedText);
}