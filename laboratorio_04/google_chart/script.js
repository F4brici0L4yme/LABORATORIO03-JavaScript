// Cargar la librería y el paquete 'corechart'
// google.charts.load('current', { packages: ['corechart'] });
// google.charts.setOnLoadCallback(drawChart);

window.onload = function() {
    const regionList = document.querySelector('#region-list');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(region => {
                const item = document.createElement('li');
                item.textContent = region.region;
                regionList.appendChild(item);
            });
        })
        .catch(error => console.error('Error cargando el JSON:', error));
};





// function drawChart() {
//     const googleData = new google.visualization.DataTable();
//     fetch('./data.json')
//         .then(response => response.json())
//         .then(data => {
//             regionesData = data;
//             data.forEach(region => {
//                 googleData.addRow([region.])
//             })
//         })


//     const options = {
//         title: 'Mi distribución diaria de tiempo',
//         pieHole: 0.4,
//     };

//     const chart = new google.visualization.PieChart(document.getElementById('chart_div'));
//     chart.draw(data, options);
// }
