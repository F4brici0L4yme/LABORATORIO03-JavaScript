function getMeetCode() {
    const meetUrl = document.getElementById("meetUrl").textContent;

    let lastSlash = -1;
    for (let i = 0; i < meetUrl.length; i++) {
        if (meetUrl[i] === '/') {
            lastSlash = i;
        }
    }

    let meetCode = '';
    for (let j = lastSlash + 1; j < meetUrl.length; j++) {
        meetCode += meetUrl[j];
    }
    
    document.getElementById("meetCode").innerText = meetCode;
    console.log('El código de la reunión es: ' + meetCode);
}
