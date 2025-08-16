// js/router.js
import LoginPage, { initLoginEvents } from './login.js';
import RegisterPage, { initRegisterEvents } from './register.js';
import DashboardPage, { initDashboardEvents } from './dashboard.js';
import ReservasPage, { initReservasEvents } from './reservas.js';
import DisponiblesPage, { initDisponiblesEvents } from './disponibles.js';
import PerfilPage from './perfil.js';
import { renderHeader } from './header.js';

export function router() {
  const path = window.location.hash.replace('#', '') || '/login';
  console.log("🔎 Navegando a:", path);

  switch (path) {
    case '/login': {
      const html = LoginPage();
      console.log("📄 LoginPage devuelve:", html);
      document.getElementById('app').innerHTML = html;
      initLoginEvents();
      break;
    }
    case '/register': {
      const html = RegisterPage();
      console.log("📄 RegisterPage devuelve:", html);
      document.getElementById('app').innerHTML = html;
      initRegisterEvents();
      break;
    }
    case '/dashboard': {
      const html = DashboardPage();
      console.log("📄 DashboardPage devuelve:", html);
      document.getElementById('app').innerHTML = html;
      initDashboardEvents();
      break;
    }
    case '/reservas': {
      const html = ReservasPage();
      console.log("📄 ReservasPage devuelve:", html);
      document.getElementById('app').innerHTML = html;
      initReservasEvents();
      break;
    }
    case '/disponibles': {
      const html = DisponiblesPage();
      console.log("📄 DisponiblesPage devuelve:", html);
      document.getElementById('app').innerHTML = html;
      initDisponiblesEvents();
      break;
    }
    case '/perfil': {
      const html = PerfilPage();
      console.log("📄 PerfilPage devuelve:", html);
      document.getElementById('app').innerHTML = html;
      break;
    }
    default: {
      console.warn("⚠️ Ruta no encontrada:", path, "→ redirigiendo a /login");
      const html = LoginPage();
      document.getElementById('app').innerHTML = html;
      initLoginEvents();
      break;
    }
  }
}
