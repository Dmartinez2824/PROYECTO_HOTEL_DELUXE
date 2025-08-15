const login = document.getElementById('login');
login.innerHTML = `
    <h2>Iniciar Sesión</h2>
    <input type="text" id="usuario" placeholder="Usuario">
    <input type="password" id="contrasena" placeholder="Contraseña">
    <button onclick="loginUsuario()">Entrar</button>
`;

function loginUsuario() {
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    alert(`Usuario: ${usuario}\nContraseña: ${contrasena}`);
    // Aquí se integrará backend
}
