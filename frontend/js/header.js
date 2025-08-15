const header = document.getElementById('header');

header.innerHTML = `
    <div class="header-content">
        <img src="./img/logo.png" alt="Logo Hotel Deluxe" class="logo">
        <h1>Hotel Deluxe</h1>
    </div>
    <nav>
        <a href="#" onclick="mostrarSeccion('login')">Login</a>
        <a href="#" onclick="mostrarSeccion('register')">Registro</a>
        <a href="#" onclick="mostrarSeccion('dashboard')">Dashboard</a>
    </nav>
`;
