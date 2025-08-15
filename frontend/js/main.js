// Función para mostrar secciones
function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('section');
    secciones.forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Inicialmente mostrar login
mostrarSeccion('login');
