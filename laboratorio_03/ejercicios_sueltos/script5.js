function crearTabla() {
    const cantidad = document.getElementById('cantidad').value;
    const container = document.getElementById('tablaContainer');
    container.innerHTML = '';
    const tabla = document.createElement('table');
    tabla.setAttribute('border', '1');
    const fila = document.createElement('tr');

    for (let i = 0; i < cantidad; i++) {
        const celda = document.createElement('td');
        const valor = Math.floor(Math.random() * 100);
        celda.textContent = valor;
        fila.appendChild(celda);
    }

    tabla.appendChild(fila);
    container.appendChild(tabla);
    console.log('Tabla creada con', cantidad, 'celdas');
    const botonSuma = document.createElement('button');
    botonSuma.textContent = 'Calcular Suma';
    botonSuma.onclick = calcularSuma;
    container.appendChild(botonSuma);
}

function calcularSuma() {
    const celdas = document.querySelectorAll('td');
    let suma = 0;
    for (let i = 0; i < celdas.length; i++) {
        suma += parseInt(celdas[i].textContent);
    }
    document.getElementById('resultadoSuma').textContent = suma;
    console.log('Suma:', suma);
}
