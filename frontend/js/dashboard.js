// js/dashboard.js
export default function DashboardPage() {
  const usuario = JSON.parse(localStorage.getItem('usuario')) || { nombre: "Invitado" };

  return `
 <!-- Sección de bienvenida -->
    <div class="bienvenida">
        <h2>Bienvenido a Hotel Deluxe</h2>
        <p>
            Vive la experiencia de un hotel de lujo con servicios exclusivos, habitaciones elegantes y atención personalizada.
        </p>
    </div>

    <!-- Beneficios / servicios -->
    <div class="beneficios">
        <h3>¿Qué puedes encontrar en Hotel Deluxe?</h3>
        <div class="beneficios-grid">
            <div class="beneficio">
                <img src="./img/lujo.png" alt="Lujo">
                <h4>Lujo y Confort</h4>
                <p>Habitaciones diseñadas con elegancia y comodidades premium.</p>
            </div>
            <div class="beneficio">
                <img src="./img/piscina.avif" alt="Piscina">
                <h4>Piscina y Spa</h4>
                <p>Relájate en nuestras piscinas, jacuzzis y áreas de bienestar.</p>
            </div>
            <div class="beneficio">
                <img src="./img/gastronomia.avif" alt="Gastronomía">
                <h4>Gastronomía</h4>
                <p>Disfruta de restaurantes de alta cocina y menús exclusivos.</p>
            </div>
            <div class="beneficio">
                <img src="./img/ubicacion.avif" alt="Ubicación">
                <h4>Ubicación Privilegiada</h4>
                <p>Hoteles ubicados en los mejores destinos de Colombia.</p>
            </div>
        </div>
    </div>

    <!-- Tarjetas de habitaciones -->
    <div class="tarjetas-hoteles">
        <h3>Nuestras habitaciones destacadas</h3>
        <div class="grid-tarjetas">
            <div class="tarjeta">
                <img src="./img/habitacion1.avif" alt="Habitación Doble">
                <h4>Habitación Doble</h4>
                <p>Cama doble, baño privado y wifi.</p>
                <span class="precio">$180 / noche</span>
            </div>
            <div class="tarjeta">
                <img src="./img/habitacion2.avif" alt="Suite">
                <h4>Suite con Jacuzzi</h4>
                <p>Suite premium con jacuzzi y minibar.</p>
                <span class="precio">$320 / noche</span>
            </div>
            <div class="tarjeta">
                <img src="./img/habitacion3a.avif" alt="Penthouse">
                <h4>Penthouse</h4>
                <p>Vista al mar, jacuzzi y lujo total.</p>
                <span class="precio">$550 / noche</span>
            </div>
        </div>
    </div>
`;
}

export function initDashboardEvents() {
  const btn = document.getElementById('btnVerReservas');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.location.hash = '/reservas';
  });
}
