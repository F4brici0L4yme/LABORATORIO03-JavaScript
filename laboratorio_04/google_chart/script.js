google.charts.load('current', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(iniciar);

function iniciar() {
    const list_container = document.querySelector('#list-container');
    list_container.innerHTML = '';
    fetch('data.json')
        .then(response => response.json())
        .then(datos => {
            let regiones = datos.map(region => region.region);
            regiones.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('list-item');
                div.textContent = item;
                list_container.appendChild(div);
            })
    });
}