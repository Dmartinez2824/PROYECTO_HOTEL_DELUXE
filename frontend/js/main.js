// js/main.js
import { router } from './router.js';
import { renderHeader } from './header.js';

// Cargar la app al iniciar
window.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  router();
});

// Detectar cambios en el hash (navegación SPA)
window.addEventListener('hashchange', () => {
  renderHeader();
  router();
});
