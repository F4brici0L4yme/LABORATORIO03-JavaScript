function calcular() {
    const op = document.getElementById("operator").value;
    const a = document.getElementById("argument1").value;
    const b = document.getElementById("argument2").value;
    let result = "—";

    // Aritmética
    if (["+", "-", "*", "/", "%"].includes(op)) {
        const x = parseFloat(a), y = parseFloat(b);
        if (isNaN(x) || isNaN(y)) return mostrar("Valores inválidos");
        if ((op === "/" || op === "%") && y === 0) return mostrar("División por cero");
        result = { "+": x + y, "-": x - y, "*": x * y, "/": x / y, "%": x % y }[op];
    }

    // Lógica
    else if (["&&", "||"].includes(op)) {
        const x = a === "1", y = b === "1";
        result = { "&&": x && y, "||": x || y }[op];
    }
    else if (op === "!") {
        const x = a === "1";
        result = !x;
    }

    // Bitwise binarios
    else if (["&", "|", "^", "<<", ">>", ">>>"].includes(op)) {
        const x = parseInt(a), y = parseInt(b);
        if (isNaN(x) || isNaN(y)) return mostrar("Valores inválidos");
        result = { 
            "&": x & y, 
            "|": x | y, 
            "^": x ^ y, 
            "<<": x << y, 
            ">>": x >> y, 
            ">>>": x >>> y 
        }[op].toString(2); // resultado en binario
    }

    // Bitwise unario
    else if (op === "~") {
        const x = parseInt(a);
        if (isNaN(x)) return mostrar("Valor inválido");
        result = (~x).toString(2);
    }

    else {
        return mostrar("Operador no soportado");
    }

    mostrar(result);
}

function mostrar(result) {
    document.getElementById("result").textContent = result;
    console.log('Resultado:', result);
}
