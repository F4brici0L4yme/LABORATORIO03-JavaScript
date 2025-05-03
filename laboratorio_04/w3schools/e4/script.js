var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
            this.getResponseHeader("Last-Modified");
    }
};
console.log('Rodrigo Fabricio Layme Salas');
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();