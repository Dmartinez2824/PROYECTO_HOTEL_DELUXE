import LoginPage from './login.js';
import DashboardPage from './pages/dashboard.js';

export function router() {
  const app = document.getElementById('app');
  const path = window.location.hash.replace('#', '') || '/login';

  if (path === '/login') {
    app.innerHTML = LoginPage();
  } else if (path === '/dashboard') {
    app.innerHTML = DashboardPage();
  }
}
