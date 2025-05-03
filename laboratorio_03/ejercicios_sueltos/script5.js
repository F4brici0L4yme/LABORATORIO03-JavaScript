function crearTabla() {
    const filas = parseInt(document.querySelector('#filas').value);
    const columnas = parseInt(document.querySelector('#columnas').value);
    const container = document.querySelector('#tablaContainer');
    container.innerHTML = '';

    if (isNaN(filas) || isNaN(columnas) || filas < 1 || columnas < 1) {
        alert("Ingrese valores válidos para filas y columnas.");
        return;
    }

    const tabla = document.createElement('table');
    tabla.setAttribute('border', '1');

    for (let i = 0; i < filas; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement('td');
            const valor = Math.floor(Math.random() * 100);
            celda.textContent = valor;
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    container.appendChild(tabla);

    const botonSuma = document.createElement('button');
    botonSuma.textContent = 'Calcular Suma';
    botonSuma.onclick = calcularSuma;
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
    container.appendChild(botonSuma);

    console.log(`Tabla de ${filas}x${columnas} creada.`);
}

function calcularSuma() {
    const celdas = document.querySelectorAll('td');
    let suma = 0;
    celdas.forEach(celda => {
        suma += parseInt(celda.textContent);
    });
    document.getElementById('resultadoSuma').textContent = suma;
    console.log('Suma:', suma);
}
