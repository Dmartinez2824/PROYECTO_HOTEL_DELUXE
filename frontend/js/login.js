const login = document.getElementById('login');
login.innerHTML = `
    <h2>Iniciar Sesión</h2>
    <input type="email" id="correo" placeholder="Correo">
    <input type="password" id="contrasena" placeholder="Contraseña">
    <button id="btnLogin">Entrar</button>
    <p id="loginMsg" class="msg"></p>
`;

document.getElementById('btnLogin').addEventListener('click', async () => {
    const correo = document.getElementById('correo').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    const msg = document.getElementById('loginMsg');

    if (!correo || !contrasena) {
        msg.textContent = "Por favor ingresa todos los campos.";
        msg.style.color = "red";
        return;
    }

    try {
        const res = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ correo, contrasena })
        });

        const data = await res.json();

        if (!res.ok) {
            msg.textContent = data.message || "Error en inicio de sesión.";
            msg.style.color = "red";
            return;
        }

        // Guardar token y usuario en localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('usuario', JSON.stringify(data.usuario));

        msg.textContent = "Login exitoso, redirigiendo...";
        msg.style.color = "green";

        // Mostrar dashboard
        mostrarSeccion('dashboard');

    } catch (err) {
        console.error(err);
        msg.textContent = "Error de conexión con el servidor.";
        msg.style.color = "red";
    }
});
