// js/register.js
export default function RegisterPage() {
  return `
    <div id="register-wrapper">
      <div class="register-card">
        <div class="register-form">
          <h2>Registro</h2>
          <input type="text" id="nombre" placeholder="Nombre completo">
          <input type="email" id="correoReg" placeholder="Correo">
          <input type="password" id="contrasenaReg" placeholder="Contraseña">
          <button id="btnRegister">Registrarme</button>
          <p class="login-switch">¿Ya tienes cuenta? <a href="#/login">Inicia sesión aquí</a></p>
          <p id="registerMsg" class="msg"></p>
        </div>
        <div class="register-image"></div>
      </div>
    </div>
  `;
}

export function initRegisterEvents() {
  const btn = document.getElementById('btnRegister');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correoReg').value.trim();
    const contrasena = document.getElementById('contrasenaReg').value.trim();
    const msg = document.getElementById('registerMsg');

    // Validación de campos vacíos
    if (!nombre || !correo || !contrasena) {
      msg.textContent = 'Por favor completa todos los campos.';
      msg.style.color = 'red';
      return;
    }

    // Validación de contraseña segura
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{10,}$/;
    if (!passwordRegex.test(contrasena)) {
      msg.textContent = 'La contraseña debe tener mínimo 10 caracteres, incluir al menos 1 mayúscula y 1 símbolo.';
      msg.style.color = 'red';
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, correo, contrasena }) // 👈 corregido
      });

      const text = await res.text();
      console.log("Respuesta registro:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        msg.textContent = 'El servidor devolvió una respuesta no válida.';
        msg.style.color = 'red';
        return;
      }

      if (!res.ok) {
        msg.textContent = data.message || 'Error en el registro.';
        msg.style.color = 'red';
        return;
      }

      // ✅ Mostrar mensaje y redirigir al login en 2 seg
      msg.textContent = 'Usuario registrado con éxito. Redirigiendo al login...';
      msg.style.color = 'green';
      setTimeout(() => {
        location.hash = '/login';
      }, 2000);

    } catch (e) {
      console.error(e);
      msg.textContent = 'Error de conexión con el servidor.';
      msg.style.color = 'red';
    }
  });
}
