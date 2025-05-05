google.charts.load('current', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(initDashboard);

function initDashboard() {
    fetch('data.json')
        .then(res => res.json())
        .then(datos => {
            const totalPorRegion = datos.map(r => {
                const total = r.confirmed.reduce((sum, d) => sum + +d.value, 0);
                return { region: r.region, total };
            });
            renderAllRegions(totalPorRegion);

            const top10 = [...totalPorRegion]
                .sort((a, b) => b.total - a.total)
                .slice(0, 10);
            renderTop10(top10);

            const areq = datos.find(r => r.region === 'Arequipa');
            if (areq) {
                const arr = [['Fecha', 'Confirmados']];
                areq.confirmed.forEach(d => arr.push([d.date, +d.value]));
                drawLineChart(arr, 'linechart_arequipa_div', 'Arequipa');
            }

            drawByRegions(datos, 'linechart_all_div', () => true, 'Todas las regiones');

        })
        .catch(e => console.error(e));
}

function renderAllRegions(arr) {
    const c = document.getElementById('all-regions');
    arr.forEach(o => {
        const span = document.createElement('span');
        span.textContent = `${o.region}: ${o.total}`;
        c.appendChild(span);
    });
}

function renderTop10(arr) {
    const ul = document.getElementById('top10-list');
    arr.forEach(o => {
        const li = document.createElement('li');
        li.textContent = `${o.region}: ${o.total}`;
        ul.appendChild(li);
    });
}

function drawByRegions(datos, divId, filterFn, title) {
    const fechas = datos[0].confirmed.map(d => d.date);
    const header = ['Fecha'];
    const valores = fechas.map((_, idx) => [fechas[idx]]);

    datos.filter(filterFn).forEach(r => {
        header.push(r.region);
        r.confirmed.forEach((d, i) => {
            valores[i].push(+d.value);
        });
    });

    const dataArray = [header, ...valores];
    drawLineChart(dataArray, divId, title);
}

function drawLineChart(dataArray, divId, title = '') {
    const data = google.visualization.arrayToDataTable(dataArray);
    const options = {
        title, curveType: 'function',
        legend: { position: 'bottom' },
        hAxis: { title: 'Fecha' }, vAxis: { title: 'Confirmados' }
    };
    const chart = new google.visualization.LineChart(document.getElementById(divId));
    chart.draw(data, options);
}

function redrawDynamic(datos) {
    const selected = Array.from(
        document.querySelectorAll('#checkbox-container input:checked')
    ).map(i => i.value);

    drawByRegions(datos, 'linechart_dynamic_div',
        r => selected.includes(r.region),
        'Selección dinámica'
    );
}
