document.getElementById("energyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página
    calculo();
});

function calculo() {
    const valor = parseFloat(document.getElementById("consumo").value);
    if (isNaN(valor) || valor <= 0) {
        document.getElementById("resultado").innerText = "Por favor, ingrese un consumo válido.";
        return;
    }
    const valor2 = valor / 1000000 * 12;
    const consumo = (valor2 * 100) / 0.06;
    document.getElementById("resultado").innerText = "Su estimación del porcentaje de energía renovable en el consumo eléctrico total es de : " + consumo.toFixed(2) + "%"; // Formato a dos decimales
}