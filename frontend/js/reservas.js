// =============================
// js/reservas.js
// =============================

const destinos = [
  {
    nombre: "Cancún",
    descripcion: "Playas paradisíacas y vida nocturna.",
    imagen: "https://images.unsplash.com/photo-1570737543098-0983d88f796d?q=80&w=986&auto=format&fit=crop"
  },
  {
    nombre: "Cartagena",
    descripcion: "Historia, cultura y atardeceres inolvidables.",
    imagen: "https://plus.unsplash.com/premium_photo-1697730195920-86bc1a6eeab0?q=80&w=1170&auto=format&fit=crop"
  },
  {
    nombre: "Riviera Maya",
    descripcion: "Hoteles de lujo frente al mar Caribe.",
    imagen: "https://images.unsplash.com/photo-1567636788276-40a47795ba4d?q=80&w=1074&auto=format&fit=crop"
  },
  {
    nombre: "Bogotá",
    descripcion: "Capital moderna con cultura y gastronomía.",
    imagen: "https://images.unsplash.com/photo-1568632234166-53e491e85b3d?q=80&w=987&auto=format&fit=crop"
  }
];

// =============================
// Vista principal de Reservas
// =============================
export default function ReservasPage() {
  console.log("✅ Entró a ReservasPage()");

  const opcionesCiudad = destinos
    .map(d => `<option value="${d.nombre}">${d.nombre}</option>`)
    .join("");

  const cardsHTML = destinos
    .map(destino => `
      <div class="card">
        <img src="${destino.imagen}" alt="${destino.nombre}">
        <h4>${destino.nombre}</h4>
        <p>${destino.descripcion}</p>
      </div>
    `)
    .join("");

  return `
    <div id="reservas-wrapper">
      <h2>Reserva tu viaje</h2>

      <form id="reservaForm" class="reserva-form">
        <label for="ciudad">Ciudad:</label>
        <select id="ciudad" required>
          <option value="">-- Selecciona una ciudad --</option>
          ${opcionesCiudad}
        </select>

        <label for="fechaInicio">Fecha de entrada:</label>
        <input type="date" id="fechaInicio" required>

        <label for="fechaFin">Fecha de salida:</label>
        <input type="date" id="fechaFin" required>

        <button type="submit">Buscar</button>
        <p id="reservaMsg" class="msg"></p>
      </form>

      <section class="destinos">
        <h3>Destinos a conocer</h3>
        <div class="destinos-grid">
          ${cardsHTML}
        </div>
      </section>
    </div>
  `;
}

// =============================
// Eventos de formulario
// =============================
export function initReservasEvents() {
  const form = document.getElementById("reservaForm");

  if (!form) {
    console.warn("⚠️ No se encontró el formulario de reservas en el DOM");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ciudad = document.getElementById("ciudad").value;
    const entrada = document.getElementById("fechaInicio").value;
    const salida = document.getElementById("fechaFin").value;
    const msg = document.getElementById("reservaMsg");

    msg.classList.remove("error", "success"); // limpiar clases

    // Validaciones
    if (!ciudad || !entrada || !salida) {
      msg.textContent = "⚠️ Completa todos los campos.";
      msg.classList.add("error");
      return;
    }
    if (new Date(salida) <= new Date(entrada)) {
      msg.textContent = "⚠️ La fecha de salida debe ser posterior a la de entrada.";
      msg.classList.add("error");
      return;
    }

    // Guardar datos en localStorage
    localStorage.setItem("reservaDatos", JSON.stringify({ ciudad, entrada, salida }));

    // Mensaje de éxito con animación
    msg.textContent = "✅ Reserva guardada, redirigiendo...";
    msg.classList.add("success");

    // Redirigir a disponibles con un delay para mostrar el mensaje
    setTimeout(() => {
      window.location.hash = "/disponibles";
    }, 1200);
  });
}
