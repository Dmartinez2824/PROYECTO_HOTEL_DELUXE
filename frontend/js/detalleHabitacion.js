const detalle = document.getElementById('detalleHabitacion');

function renderDetalleHabitacion(id) {
    let habitacion = {};

    // Simulación de datos (luego reemplazamos con fetch backend)
    if (id === 1) {
        habitacion = {
            nombre: "Habitación Doble",
            precio: 180,
            descripcion: "Cama doble, baño privado, wifi y TV.",
            img: "./img/habitacion1.avif"
        };
    } else if (id === 2) {
        habitacion = {
            nombre: "Suite con Jacuzzi",
            precio: 320,
            descripcion: "Suite premium con jacuzzi, minibar y balcón.",
            img: "./img/habitacion2.avif"
        };
    } else if (id === 3) {
        habitacion = {
            nombre: "Penthouse",
            precio: 550,
            descripcion: "Vista al mar, jacuzzi, bar privado y lujo total.",
            img: "./img/habitacion3a.avif"
        };
    }

    detalle.innerHTML = `
        <button onclick="mostrarSeccion('reservas')">⬅ Volver</button>
        <h2>${habitacion.nombre}</h2>
        <img src="${habitacion.img}" alt="${habitacion.nombre}">
        <p>${habitacion.descripcion}</p>
        <span class="precio">$${habitacion.precio} / noche</span>

        <h3>Reservar</h3>
        <label>Fecha entrada: <input type="date" id="entrada"></label>
        <label>Fecha salida: <input type="date" id="salida"></label>
        <button onclick="reservarHabitacion(${id})">Reservar</button>

        <h3>Calificación</h3>
        <select id="calificacion">
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
        </select>
        <textarea id="comentario" placeholder="Escribe tu opinión"></textarea>
        <button onclick="calificarHabitacion(${id})">Enviar reseña</button>
    `;
}

function reservarHabitacion(id) {
    const entrada = document.getElementById('entrada').value;
    const salida = document.getElementById('salida').value;

    if (!entrada || !salida) {
        alert("Debes seleccionar fechas");
        return;
    }

    alert(`Reserva enviada para la habitación ${id}\nEntrada: ${entrada}\nSalida: ${salida}`);
    // Aquí hacemos fetch al backend para guardar la reserva
}

function calificarHabitacion(id) {
    const estrellas = document.getElementById('calificacion').value;
    const comentario = document.getElementById('comentario').value;

    alert(`Calificación enviada: ${estrellas} estrellas\nComentario: ${comentario}`);
    // Aquí hacemos fetch al backend para guardar reseña
}
