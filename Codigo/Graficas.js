const ctx = document.getElementById('barras');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Energías Renovables en Colombia'],
        datasets: [
            {
                label: 'Hidroeléctrica',
                data: [58.19],
                backgroundColor: 'rgba(0, 17, 255, 0.6)',
                borderColor: 'blue',
                borderWidth: 2
            },
            {
                label: 'Eólica',
                data: [0.06],
                backgroundColor: 'rgba(0, 238, 255, 0.6)',
                borderColor: 'lightblue',
                borderWidth: 2
            },
            {
                label: 'Solar',
                data: [0.32],
                backgroundColor: 'rgba(255, 208, 0, 0.6)',
                borderColor: 'gold',
                borderWidth: 2
            },
            {
                label: 'Biocombustible',
                data: [8.00661],
                backgroundColor: 'rgba(0, 255, 21, 0.6)',
                borderColor: 'lightgreen',
                borderWidth: 2
            },
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: ['Electricidad (TWh) en Colombia']
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('torta');

new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['renovable', 'Hidroeléctrica', 'Eólica', 'Solar'],
        datasets: [{
            label: 'porcentaje',
            data: [73.649734, 71.91941, 0.07415646, 0.39550117],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: [' Energia Renovables (% electricidad) en Colombia']
            }
        }
    }
});

const ctx3 = document.getElementById('lineas');

new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Eólica en Africa',
            data: [4.579263, 5.471553, 5.528753, 6.484653000000001, 7.334153000000001],
            borderWidth: 3
        }, {
            label: 'Solar en Africa',
            data: [4.711063, 7.210268, 8.415319, 9.703859000000001, 10.30226],
            borderWidth: 3
        }, {
            label: 'Geotérmica en Africa',
            data: [655.3, 671.3, 831.3, 831, 0],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: ['Capacidad de energia renovable en Africa']
            }
        }
    }
});

// Gráfico de área
const ctx4 = document.getElementById('area');

new Chart(ctx4, {
    type: 'line', // Usamos 'line' pero configuramos el área
    data: { 
        labels: ['2012', '2013', '2014', '2015', '2016','2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Hidroeléctrica',
            data: [47.58171, 44.36279, 44.741962, 44.681904, 46.787926, 57.32773, 56.65124, 54.437, 49.83735, 59.858196], // Datos de ejemplo
            fill: true, // Rellena el área bajo la línea
            backgroundColor: 'rgba(0, 17, 255, 0.4)',
            borderColor: 'blue',
            borderWidth: 2
        }, {
            label: 'Eólica',
            data: [0.05485471, 0.057624802, 0.0702303, 0.06837745, 0.050887343, 0.003071419, 0.04344, 0.06332, 0.01012, 0.059852246], // Datos de ejemplo
            fill: true,
            backgroundColor: 'rgba(0, 238, 255, 0.4)',
            borderColor: 'lightblue',
            borderWidth: 2
        }, {
            label: 'Geobiomasa',
            data: [1.4760586, 1.3464338, 1.728923, 1.8229002, 1.9938043, 1.9912593, 2.1187904, 2.4441278, 2.820657, 2.8208168], // Datos de ejemplo
            fill: true,
            backgroundColor: 'rgba(0, 238, 255, 0.4)',
            borderColor: 'lightblue',
            borderWidth: 2
        }, {
            label: 'Solar',
            data: [0, 0, 0, 0, 0, 0.005, 0.012, 0.13206, 0.1908, 0.31732163], // Datos de ejemplo
            fill: true,
            backgroundColor: 'rgba(255, 208, 0, 0.4)',
            borderColor: 'gold',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: ['Generacion de energías renovables en Colombia']
            }
        }
    }
});