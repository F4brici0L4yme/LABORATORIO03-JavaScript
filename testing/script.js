window.onload = function () {
    const ctx = document.getElementById('miGrafico').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    label: 'Serie 1',
                    data: [5, 10, 8],
                    backgroundColor: 'rgba(0,123,255,0.5)',
                    borderColor: 'rgba(0,123,255,1)',
                    borderWidth: 1
                }
            ],
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Mi gráfico de prueba'
                    },
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Cantidad'
                        }
                    }
                }
            }

        }

    });
}
