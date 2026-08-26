// Arreglo para almacenar la lista de objetos
let inventario = [];

document.getElementById("btnAgregar").addEventListener("click", agregarProducto);

function agregarProducto() {
    const nombre = document.getElementById("nombreP").value.trim();
    const precio = Number(document.getElementById("precioP").value);
    const cantidad = Number(document.getElementById("cantP").value);
    const categoria = document.getElementById("catP").value.trim();

    // Validación
    if (nombre === "" || categoria === "" || precio <= 0 || cantidad <= 0) {
        alert("Ingrese todos los datos válidos antes de continuar.");
        return;
    }

    // Creación del objeto producto
    const nuevoProducto = {
        id: Date.now(), // Identificador único
        nombre,
        categoria,
        precio,
        cantidad,
        valorTotal: precio * cantidad
    };

    inventario.push(nuevoProducto);
    limpiarFormulario();
    renderizarTabla();
}

function renderizarTabla() {
    const cuerpo = document.getElementById("cuerpoTabla");
    cuerpo.innerHTML = ""; // Limpiar tabla previa

    let totalProductos = 0;
    let valorGranTotal = 0;

    inventario.forEach((prod) => {
        totalProductos += prod.cantidad;
        valorGranTotal += prod.valorTotal;

        // Uso de createElement y appendChild
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${prod.nombre}</td>
            <td>${prod.categoria}</td>
            <td>$${prod.precio.toLocaleString('es-CO')}</td>
            <td>${prod.cantidad}</td>
            <td>$${prod.valorTotal.toLocaleString('es-CO')}</td>
            <td><button class="btn-eliminar" onclick="eliminarProducto(${prod.id})">Eliminar</button></td>
        `;

        cuerpo.appendChild(fila);
    });

    // Actualizar totales generales
    document.getElementById("totalCant").textContent = totalProductos;
    document.getElementById("totalValor").textContent = valorGranTotal.toLocaleString('es-CO');
}

function eliminarProducto(id) {
    // Filtrar el elemento a eliminar
    inventario = inventario.filter(prod => prod.id !== id);
    renderizarTabla();
}

function limpiarFormulario() {
    document.getElementById("nombreP").value = "";
    document.getElementById("precioP").value = "";
    document.getElementById("cantP").value = "";
    document.getElementById("catP").value = "";
}