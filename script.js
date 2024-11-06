// Función en JavaScript para mostrar el mensaje
function mostrarMensaje(texto) {
    document.getElementById('mensaje').textContent = texto;
}

// Función para generar el calendario de noviembre de 2024
function generarCalendario() {
    const calendario = document.getElementById('calendario');
    const diasSemana = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    const totalDias = 30; // Noviembre tiene 30 días
    const primerDia = new Date(2024, 10, 1).getDay(); // El 1 de noviembre de 2024 es viernes (índice 5)

    // Crear encabezado con los días de la semana
    let encabezado = '<tr>';
    diasSemana.forEach(dia => encabezado += `<th>${dia}</th>`);
    encabezado += '</tr>';
    calendario.innerHTML = encabezado;

    // Crear las filas del calendario
    let dia = 1;
    let fila = '<tr>';
    
    // Agregar celdas vacías hasta el primer día del mes
    for (let i = 1; i < primerDia; i++) {
        fila += '<td></td>';
    }

    // Llenar el calendario con los días
    for (let i = primerDia; i <= 7; i++) {
        fila += `<td class="${dia === 5 ? 'today' : ''}">${dia}</td>`;
        dia++;
    }
    fila += '</tr>';
    calendario.innerHTML += fila;

    // Continuar llenando el resto del calendario
    while (dia <= totalDias) {
        fila = '<tr>';
        for (let i = 1; i <= 7; i++) {
            if (dia > totalDias) break;
            fila += `<td class="${dia === 5 ? 'today' : ''}">${dia}</td>`;
            dia++;
        }
        fila += '</tr>';
        calendario.innerHTML += fila;
    }
}

// Generar el calendario cuando la página cargue
document.addEventListener('DOMContentLoaded', generarCalendario);
