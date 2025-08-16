// js/login.js
export default function LoginPage() {
  return `
    <div id="login-wrapper">
      <div class="login-card">
        <div class="login-form">
          <h2>Iniciar Sesión</h2>
          <input type="email" id="correoLogin" placeholder="Correo">
          <input type="password" id="contrasenaLogin" placeholder="Contraseña">
          <button id="btnLogin">Ingresar</button>
          <p class="register-switch">¿No tienes cuenta? <a href="#/register">Regístrate aquí</a></p>
          <p id="loginMsg" class="msg"></p>
        </div>
        <div class="login-image"></div>
      </div>
    </div>
  `;
}

export function initLoginEvents() {
  const btn = document.getElementById('btnLogin');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    const correo = document.getElementById('correoLogin').value.trim();
    const contrasena = document.getElementById('contrasenaLogin').value.trim();
    const msg = document.getElementById('loginMsg');

    if (!correo || !contrasena) {
      msg.textContent = 'Por favor ingresa correo y contraseña.';
      msg.style.color = 'red';
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, contrasena })
      });

      const text = await res.text();
      console.log("Respuesta login:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        msg.textContent = 'El servidor devolvió una respuesta no válida.';
        msg.style.color = 'red';
        return;
      }

      if (!res.ok) {
        msg.textContent = data.message || 'Credenciales inválidas.';
        msg.style.color = 'red';
        return;
      }

      // ✅ Guardamos token y usuario de forma segura
      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      if (data.usuario) {
        localStorage.setItem('usuario', JSON.stringify(data.usuario));
      } else {
        // fallback: guardar el correo al menos
        localStorage.setItem('usuario', JSON.stringify({ correo }));
      }

      // ✅ Actualizamos el header
      const hdr = await import('./header.js');
      hdr.renderHeader();

      // ✅ Redirigimos siempre a reservas
      location.hash = '/reservas';

    } catch (e) {
      console.error(e);
      msg.textContent = 'Error de conexión con el servidor.';
      msg.style.color = 'red';
    }
  });
}
