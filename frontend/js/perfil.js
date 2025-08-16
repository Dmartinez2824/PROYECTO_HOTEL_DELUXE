// js/perfil.js
 import "../css/perfil.css"
export default function PerfilPage() {
  console.log("✅ Entró a PerfilPage()");

  // Usuario base (no editable)
  const user = JSON.parse(localStorage.getItem("user")) || {
    nombre: "Usuario Invitado",
    correo: "invitado@example.com",
    avatar: "https://i.pinimg.com/736x/ea/21/05/ea21052f12b135e2f343b0c5ca8aeabc.jpg"
  };

  // Datos personales adicionales
  const datos = JSON.parse(localStorage.getItem("datosPersonales")) || {
    telefono: "",
    direccion: "",
    nacimiento: ""
  };

  // Historial de reservas
  const reservas = JSON.parse(localStorage.getItem("historialReservas")) || [];

  const reservasHTML = reservas.length > 0
    ? reservas.map(r => `
        <div class="reserva-item">
          <h4>📍 ${r.ciudad}</h4>
          <p>Entrada: ${r.entrada}</p>
          <p>Salida: ${r.salida}</p>
        </div>
      `).join("")
    : `<p class="no-reservas">⚠️ No tienes reservas todavía.</p>`;

  return `
    <div class="perfil-wrapper">
      <div class="perfil-card">
        <img src="${user.avatar}" alt="Avatar" class="perfil-avatar" id="avatarPreview">
        
        <label for="avatarUpload" class="btn-upload"> Cambiar foto   📷</label>
        <input type="file" id="avatarUpload" accept="image/*" hidden>

        <div class="perfil-info">
          <p><strong>Nombre:</strong> ${user.nombre}</p>
          <p><strong>Correo:</strong> ${user.correo}</p>
        </div>

        <form id="datosForm" class="perfil-form">
          <h4>Datos Personales</h4>

          <label>Teléfono:</label>
          <input type="text" id="telefono" value="${datos.telefono}">

          <label>Dirección:</label>
          <input type="text" id="direccion" value="${datos.direccion}">

          <label>Fecha de nacimiento:</label>
          <input type="date" id="nacimiento" value="${datos.nacimiento}">

          <button type="submit" class="btn-save">Guardar datos</button>
        </form>

        <button id="logoutBtn" class="btn-logout">Cerrar sesión</button>
      </div>

      <section class="perfil-reservas">
        <h3>Mis Reservas</h3>
        <div class="reservas-list">
          ${reservasHTML}
        </div>
      </section>
    </div>
  `;
}

export function initPerfilEvents() {
  const datosForm = document.getElementById("datosForm");
  const logoutBtn = document.getElementById("logoutBtn");
  const avatarUpload = document.getElementById("avatarUpload");
  const avatarPreview = document.getElementById("avatarPreview");

  // Guardar datos personales
  if (datosForm) {
    datosForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const telefono = document.getElementById("telefono").value;
      const direccion = document.getElementById("direccion").value;
      const nacimiento = document.getElementById("nacimiento").value;

      localStorage.setItem("datosPersonales", JSON.stringify({ telefono, direccion, nacimiento }));

      alert("✅ Datos personales guardados correctamente");
    });
  }

  // Subir foto nueva
  if (avatarUpload) {
    avatarUpload.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          avatarPreview.src = reader.result;
          const user = JSON.parse(localStorage.getItem("user")) || {};
          user.avatar = reader.result;
          localStorage.setItem("user", JSON.stringify(user));
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Cerrar sesión
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");
      localStorage.removeItem("reservaDatos");
      localStorage.removeItem("historialReservas");
      localStorage.removeItem("datosPersonales");
      window.location.hash = "/";
    });
  }
}
