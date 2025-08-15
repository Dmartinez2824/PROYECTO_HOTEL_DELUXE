const register = document.getElementById('register');
register.innerHTML = `
    <h2>Registro</h2>
    <input type="text" id="nuevoUsuario" placeholder="Usuario">
    <input type="email" id="email" placeholder="Correo">
    <input type="password" id="nuevaContrasena" placeholder="Contraseña">
    <button onclick="registrarUsuario()">Registrar</button>
`;

function registrarUsuario() {
    const usuario = document.getElementById('nuevoUsuario').value;
    const email = document.getElementById('email').value;
    const contrasena = document.getElementById('nuevaContrasena').value;
    alert(`Registrando:\nUsuario: ${usuario}\nEmail: ${email}`);
    // Aquí se integrará backend
}
