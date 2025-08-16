// =============================
// js/disponibles.js
// =============================

// Datos de ejemplo por ciudad
const opcionesPorCiudad = {
  "Cancún": [
    {
      nombre: "habitacion pareja",
      descripcion: "Frente al mar con piscina y bar incluido.",
      precio: 250,
      imagen: "https://images.unsplash.com/photo-1729606188713-814d1b7bf893?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      nombre: "habitacion doble",
      descripcion: "Spa, todo incluido y actividades acuáticas.",
      precio: 300,
      imagen: "https://images.unsplash.com/photo-1729956113530-2e342c304595?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      nombre: "habitacion triple",
      descripcion: "Lujo privado con vista al Caribe.",
      precio: 400,
      imagen: "https://images.unsplash.com/photo-1723810742992-0e84241abcf5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  "Cartagena": [
    {
      nombre: "Habitacion pareja con jacuzzi",
      descripcion: "En la ciudad amurallada con vista al mar.",
      precio: 180,
      imagen: "https://images.unsplash.com/photo-1654482278660-14a8cfd5589d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      nombre: "Habitacion pareja",
      descripcion: "Arquitectura colonial y terraza panorámica.",
      precio: 220,
      imagen: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      nombre: "Habitacion doble",
      descripcion: "Cabañas privadas en las islas cercanas.",
      precio: 350,
      imagen: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  "Riviera Maya": [
    {
      nombre: "Penthouse",
      descripcion: "Piscina infinita y acceso directo a la playa.",
      precio: 270,
      imagen: "https://images.unsplash.com/photo-1559414059-34fe0a59e57a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      nombre: "Jungle Experience",
      descripcion: "En medio de la selva con tours guiados.",
      precio: 310,
      imagen: "https://i.pinimg.com/736x/29/85/00/29850024a72f9a74c8a969ee0676abe9.jpg"
    },
    {
      nombre: "cama para 2 personas",
      descripcion: "Suites modernas con balcón al mar.",
      precio: 420,
      imagen: "https://images.unsplash.com/photo-1547561993-9fe9f2af3fd4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ],
  "Bogotá": [
    {
      nombre: "habitacion pareja",
      descripcion: "Ubicado en zona T con restaurantes cercanos.",
      precio: 120,
      imagen: "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      nombre: "habitacion con jacuzzi",
      descripcion: "Vistas a Monserrate y spa urbano.",
      precio: 160,
      imagen: "https://i.pinimg.com/1200x/5f/76/67/5f76678bb71ea8e786b2d918e06a478b.jpg"
    },
    {
      nombre: "penthouse",
      descripcion: "Hospedaje boutique en el centro histórico.",
      precio: 100,
      imagen: "https://i.pinimg.com/736x/20/f1/79/20f179b5736fdee05bb4fb8a3122052c.jpg"
    }
  ]
};

// =============================
// Vista Disponibles
// =============================
export default function DisponiblesPage() {
  console.log("✅ Entró a DisponiblesPage()");

  // Obtener datos de la reserva
  const reserva = JSON.parse(localStorage.getItem("reservaDatos"));

  if (!reserva || !reserva.ciudad) {
    return `
      <div class="disponibles-wrapper">
        <h2>No se encontraron reservas</h2>
        <p>Por favor realiza una búsqueda en <b>Reservas</b>.</p>
      </div>
    `;
  }

  const opciones = opcionesPorCiudad[reserva.ciudad] || [];

  const cardsHTML = opciones
    .map(
      (opcion, i) => `
      <div class="card hotel">
        <img src="${opcion.imagen}" alt="${opcion.nombre}">
        <h4>${opcion.nombre}</h4>
        <p>${opcion.descripcion}</p>
        <p class="precio">$${opcion.precio} USD / noche</p>
        <div class="actions">
          <button class="btn-visualizar" data-index="${i}">👁 Visualizar</button>
          <button class="btn-reservar" data-index="${i}">✅ Reservar</button>
        </div>
      </div>
    `
    )
    .join("");

  return `
    <div class="disponibles-wrapper">
      <h2>Opciones disponibles en ${reserva.ciudad}</h2>
      <p>Del <b>${reserva.entrada}</b> al <b>${reserva.salida}</b></p>

      <div class="hoteles-grid">
        ${cardsHTML}
      </div>

      <!-- Modal para visualizar -->
      <div id="visualizarModal" class="modal hidden">
        <div class="modal-content">
          <span id="closeModal" class="close">&times;</span>
          <div id="modalBody"></div>
        </div>
      </div>
    </div>
  `;
}

// =============================
// Eventos Disponibles
// =============================
export function initDisponiblesEvents() {
  const modal = document.getElementById("visualizarModal");
  const closeModal = document.getElementById("closeModal");
  const modalBody = document.getElementById("modalBody");

  // Botón cerrar modal
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }

  // Botones visualizar
  document.querySelectorAll(".btn-visualizar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      const reserva = JSON.parse(localStorage.getItem("reservaDatos"));
      const hotel = opcionesPorCiudad[reserva.ciudad][index];

      modalBody.innerHTML = `
        <h3>${hotel.nombre}</h3>
        <img src="${hotel.imagen}" alt="${hotel.nombre}">
        <p>${hotel.descripcion}</p>
        <p><b>Precio:</b> $${hotel.precio} USD / noche</p>
      `;
      modal.classList.remove("hidden");
    });
  });

  // Botones reservar
  document.querySelectorAll(".btn-reservar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      const reserva = JSON.parse(localStorage.getItem("reservaDatos"));
      const hotel = opcionesPorCiudad[reserva.ciudad][index];

      // Guardar hotel elegido
      localStorage.setItem("hotelSeleccionado", JSON.stringify(hotel));

      // Confirmación animada
      btn.textContent = "✅ Reservado";
      btn.disabled = true;
      btn.classList.add("reservado");
    });
  });
}
