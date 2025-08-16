// js/header.js
export function renderHeader() {
  const headerEl = document.getElementById('header');
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  const logo = `
    <div class="header-content">
      <img src="./img/logo.png" alt="Logo Hotel Deluxe" class="logo">
      <h1>Hotel Deluxe</h1>
    </div>
  `;

  if (usuario) {
    // HEADER PARA USUARIOS LOGUEADOS
    if (usuario.rol === 'admin') {
      headerEl.innerHTML = `
        ${logo}
        <nav>
          <a href="#/reservas">Reservas</a>
          <a href="#/dashboard">Habitaciones</a>
          <a href="#/usuarios">Usuarios</a>
          <a href="#" id="logoutLink">Cerrar sesión</a>
        </nav>
      `;
    } else {
      headerEl.innerHTML = `
        ${logo}
        <nav>
          <a href="#/reservas">Reservas</a>
          <a href="#/dashboard">Servicios</a>
          <a href="#/perfil">Mi perfil</a>
          <a href="#" id="logoutLink">Cerrar sesión</a>
        </nav>
      `;
    }

    // LOGOUT
    const logout = document.getElementById('logoutLink');
    if (logout) {
      logout.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        renderHeader();
        location.hash = '/login';
      });
    }
  } else {
    // HEADER PARA VISITANTES
    headerEl.innerHTML = `
      ${logo}
      <nav>
        <a href="#/login">Login</a>
        <a href="#/register">Registro</a>
        <a href="#/dashboard">Servicios</a>
      </nav>
    `;
  }
}
