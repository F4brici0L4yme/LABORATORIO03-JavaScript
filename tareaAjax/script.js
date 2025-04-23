let regionesData = [];
let chart = null;

window.onload = function () {
  const container = document.getElementById('checkbox-container');
  const ctx = document.getElementById('grafico').getContext('2d');

  // Crear gráfico vacío
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

  // Cargar data.json
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      regionesData = data;

      // Crear checkboxes por región
      data.forEach(region => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = region.region;

        // Evento: actualizar gráfico al cambiar estado
        checkbox.addEventListener('change', actualizarDesdeCheckboxes);

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(' ' + region.region));
        container.appendChild(label);
      });
    });
};

// Función para actualizar gráfico desde los checkboxes marcados
function actualizarDesdeCheckboxes() {
  const seleccionadas = Array.from(document.querySelectorAll('#checkbox-container input[type="checkbox"]:checked'))
    .map(cb => cb.value);

  const regionesSeleccionadas = regionesData.filter(r => seleccionadas.includes(r.region));
  actualizarGrafico(regionesSeleccionadas);
}

// Función que actualiza el gráfico con nuevas regiones
function actualizarGrafico(regiones) {
  const labels = regiones[0]?.confirmed.map(punto => punto.date) || [];

  const datasets = regiones.map(region => ({
    label: region.region,
    data: region.confirmed.map(p => parseInt(p.value)),
    borderColor: colorAleatorio(),
    fill: false,
    tension: 0.2
  }));

  chart.data.labels = labels;
  chart.data.datasets = datasets;
  chart.update();
}

// Generador de colores aleatorios
function colorAleatorio() {
  const r = Math.floor(Math.random() * 200);
  const g = Math.floor(Math.random() * 200);
  const b = Math.floor(Math.random() * 200);
  return `rgb(${r},${g},${b})`;
}
