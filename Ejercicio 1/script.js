document.getElementById("btnRegistrarse").addEventListener("click", registrarUsuario);

function registrarUsuario() {
    // 1. Obtener valores con .value
    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const divResultado = document.getElementById("resultado");

    // 2. Validar que los campos no estén vacíos usando `if`
    if (nombre === "" || edad === "" || correo === "" || ciudad === "") {
        divResultado.className = "resultado error";
        divResultado.innerHTML = "<strong>Error:</strong> Todos los campos son obligatorios.";
        return;
    }

    // 3. Mostrar resultado usando innerHTML
    divResultado.className = "resultado";
    divResultado.innerHTML = `Hola, <strong>${nombre}</strong>. Tienes ${edad} años y vives en ${ciudad}. Tu correo es ${correo}.`;
}