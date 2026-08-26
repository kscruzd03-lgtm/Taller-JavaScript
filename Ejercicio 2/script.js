document.getElementById("btnCalcular").addEventListener("click", calcularCompra);

function calcularCompra() {
    const prodNom = document.getElementById("producto").value.trim();
    // Conversión explícita con Number()
    const precio = Number(document.getElementById("precio").value);
    const cantidad = Number(document.getElementById("cantidad").value);
    const pctDescuento = Number(document.getElementById("descuento").value);
    const divResumen = document.getElementById("resumen");

    // Validación
    if (prodNom === "" || precio <= 0 || cantidad <= 0) {
        divResumen.className = "resultado error";
        divResumen.innerHTML = "Por favor ingrese datos válidos. La cantidad y el precio deben ser mayores a 0.";
        return;
    }

    // Cálculos matemáticos
    const subtotal = precio * cantidad;
    const montoDescuento = subtotal * (pctDescuento / 100);
    const subtotalConDesc = subtotal - montoDescuento;
    const iva = subtotalConDesc * 0.19;
    const total = subtotalConDesc + iva;

    // Renderizado con innerHTML y formato de dinero
    divResumen.className = "resultado";
    divResumen.innerHTML = `
        <p><strong>Producto:</strong> ${prodNom}</p>
        <p><strong>Subtotal:</strong> $${subtotal.toLocaleString('es-CO')}</p>
        <p><strong>Descuento (${pctDescuento}%):</strong> -$${montoDescuento.toLocaleString('es-CO')}</p>
        <p><strong>IVA (19%):</strong> $${iva.toLocaleString('es-CO')}</p>
        <hr>
        <p><strong>Total:</strong> $${total.toLocaleString('es-CO')}</p>
    `;
}