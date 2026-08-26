document.getElementById("btnNotas").addEventListener("click", calcularDefinitiva);

function calcularDefinitiva() {
    const nombre = document.getElementById("estudiante").value.trim();
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);
    const n3 = Number(document.getElementById("n3").value);
    const div = document.getElementById("resultadoNota");

    // Limpiar clases previas
    div.className = "resultado";

    // Validaciones de rango
    if (nombre === "" || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        div.classList.add("error");
        div.innerHTML = "Por favor completa todos los campos correctamente.";
        return;
    }

    if (n1 < 0 || n1 > 5 || n2 < 0 || n2 > 5 || n3 < 0 || n3 > 5) {
        div.classList.add("error");
        div.innerHTML = "Las notas deben estar strictly entre 0.0 y 5.0.";
        return;
    }

    // Cálculo del promedio
    const promedio = (n1 + n2 + n3) / 3;
    const promedioFormateado = promedio.toFixed(2);

    // Condicional if/else y asignación de clase CSS dinámica
    if (promedio >= 3.5) {
        div.classList.add("aprobado");
        div.innerHTML = `<strong>Estudiante:</strong> ${nombre}<br>
                         <strong>Definitiva:</strong> ${promedioFormateado}<br>
                         <strong>Estado:</strong> APROBADO`;
    } else {
        div.classList.add("reprobado");
        div.innerHTML = `<strong>Estudiante:</strong> ${nombre}<br>
                         <strong>Definitiva:</strong> ${promedioFormateado}<br>
                         <strong>Estado:</strong> REPROBADO`;
    }
}