// ===================================================
  // 1) MODO OSCURO/CLARO — persistido con localStorage
  // ===================================================
  // localStorage guarda datos SIN fecha de expiración: siguen ahí
  // aunque el usuario cierre el navegador o apague el computador.
  // Por eso es ideal para una preferencia como el tema.

  const root = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label');

  function applyTheme(theme){
    root.setAttribute('data-theme', theme);
    themeLabel.textContent = theme === 'dark' ? 'modo: oscuro' : 'modo: claro';
  }

  // Al cargar la página: leemos localStorage. Si no hay nada guardado
  // (primera visita), respetamos la preferencia del sistema operativo.
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    // Escribimos en localStorage: clave "theme", valor "dark" o "light".
    // localStorage sólo guarda strings, por eso no hace falta JSON.stringify aquí.
    localStorage.setItem('theme', next);
  });

  // ===================================================
  // 2) BOTÓN "VER PROYECTOS" — navegación suave
  // ===================================================
  document.getElementById('go-projects').addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  });

  // ===================================================
  // 3) DEMO DE localStorage vs sessionStorage EN EL FOOTER
  // ===================================================

  // --- localStorage: persiste entre sesiones (cerrar/abrir el navegador) ---
  const lastVisit = localStorage.getItem('lastVisit');
  document.getElementById('last-visit-label').textContent =
    'última visita: ' + (lastVisit ? new Date(lastVisit).toLocaleString('es-CO') : 'primera vez');
  localStorage.setItem('lastVisit', new Date().toISOString());

  // --- sessionStorage: sólo vive mientras la pestaña sigue abierta.
  // Si cierras la pestaña y la vuelves a abrir, el contador vuelve a 0.
  // Si sólo recargas (F5) la misma pestaña, el contador sigue sumando.
  let sessionViews = Number(sessionStorage.getItem('sessionViews')) || 0;
  sessionViews += 1;
  sessionStorage.setItem('sessionViews', sessionViews);
  document.getElementById('session-count-label').textContent =
    'vistas en esta sesión: ' + sessionViews;