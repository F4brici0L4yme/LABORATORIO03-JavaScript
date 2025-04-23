let regionesData = [];
let chart = null;

window.onload = function () {
    const ctx = document.getElementById('grafico').getContext('2d');

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Casos confirmados por región'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Fecha'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Casos confirmados'
                    },
                    beginAtZero: true
                }
            }
        }
    });

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            regionesData = data.filter(t => t.region !== 'Lima' && t.region !== 'Callao');
            const labels = regionesData[0]?.confirmed.map(punto => punto.date) || [];
            const tabla = document.getElementById('tablaData');
            const filaHead = document.createElement('tr');
            const thInicial = document.createElement('th');
            thInicial.textContent = 'Region';
            filaHead.appendChild(thInicial);
            labels.forEach(date => {
                const th = document.createElement('th');
                th.textContent = date;
                filaHead.appendChild(th);
                tabla.appendChild(filaHead);
            });

            regionesData.forEach(region => {
                const fila = document.createElement('tr');
                const th = document.createElement('th');
                th.textContent = region.region;
                fila.appendChild(th);
                region.confirmed.forEach(punto => {
                    const td = document.createElement('td');
                    td.textContent = punto.value;
                    fila.appendChild(td);
                });
                tabla.appendChild(fila);
            });


            const datasets = regionesData.map(region => ({
                label: region.region,
                data: region.confirmed.map(p => parseInt(p.value)),
                borderColor: colorAleatorio(),
                fill: false,
                tension: 0.2
            }));

            chart.data.labels = labels;
            chart.data.datasets = datasets;
            chart.update();

        });
};

function colorAleatorio() {
    const r = Math.floor(Math.random() * 250);
    const g = Math.floor(Math.random() * 250);
    const b = Math.floor(Math.random() * 250);
    return `rgb(${r},${g},${b})`;
}