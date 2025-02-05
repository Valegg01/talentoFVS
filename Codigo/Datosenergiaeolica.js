let allData = [];

// Función para cargar el archivo CSV
function loadCSV() {
    const filePath = "../Repositorios/10 wind-share-energy.csv";

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo CSV.");
            }
            return response.text();
        })
        .then(csvText => {
            Papa.parse(csvText, {
                complete: function (results) {
                    allData = results.data;
                    displayData(allData);
                    document.getElementById('filterContainer').style.display = 'block'; // Mostrar el input de filtro
                },
                header: true
            });
        })
        .catch(error => {
            console.error("Error al cargar el archivo CSV:", error);
            document.getElementById('errorContainer').innerText = "Error al cargar el archivo CSV. Por favor, inténtelo de nuevo más tarde.";
        });
}

// Función para mostrar los datos en la tabla
function displayData(data) {
    const table = document.getElementById('dataTable');
    const tbody = table.querySelector('tbody');

    tbody.innerHTML = ""; // Limpiar el cuerpo de la tabla

    if (data.length === 0) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.colSpan = table.querySelector('thead tr').children.length; // Colspan para que ocupe toda la fila
        td.textContent = "No se encontraron resultados.";
        tr.appendChild(td);
        tbody.appendChild(tr);
    } else {
        data.forEach(row => {
            const tr = document.createElement('tr');
            Object.values(row).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    }
}

// Función para filtrar la tabla
function filterTable() {
    const filterValue = document.getElementById('filterInput').value.toLowerCase();

    const filteredData = allData.filter(row => {
        // Solo filtrar por país
        return row['Entidad'] ? row['Entidad'].toLowerCase().includes(filterValue) : false;
    });

    console.log("Datos filtrados:", filteredData); // Para depuración
    displayData(filteredData);
}

// Llama a loadCSV para cargar los datos al inicio
// Puedes comentar esta línea si no deseas que se cargue automáticamente al inicio
// loadCSV();