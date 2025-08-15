const register = document.getElementById('register');
register.innerHTML = `
    <h2>Registro</h2>
    <input type="text" id="nombre" placeholder="Nombre completo">
    <input type="email" id="correoRegistro" placeholder="Correo">
    <input type="password" id="contrasenaRegistro" placeholder="Contraseña">
    <button id="btnRegistro">Registrar</button>
    <p id="registerMsg" class="msg"></p>
`;

document.getElementById('btnRegistro').addEventListener('click', async () => {
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correoRegistro').value.trim();
    const contrasena = document.getElementById('contrasenaRegistro').value.trim();
    const msg = document.getElementById('registerMsg');

    if (!nombre || !correo || !contrasena) {
        msg.textContent = "Por favor completa todos los campos.";
        msg.style.color = "red";
        return;
    }

    try {
        const res = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, correo, contrasena })
        });

        const data = await res.json();

        if (!res.ok) {
            msg.textContent = data.message || data.mensaje || "Error al registrar.";
            msg.style.color = "red";
            return;
        }

        msg.textContent = "Registro exitoso. Ahora inicia sesión.";
        msg.style.color = "green";

        // Cambiar a login
        setTimeout(() => mostrarSeccion('login'), 1500);

    } catch (err) {
        console.error(err);
        msg.textContent = "Error de conexión con el servidor.";
        msg.style.color = "red";
    }
});
