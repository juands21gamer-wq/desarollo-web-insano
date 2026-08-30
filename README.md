# Portafolio Web — Modo Oscuro/Claro

Portafolio personal con soporte de modo oscuro y claro, construido con HTML, CSS y JavaScript puro (sin librerías ni frameworks).

## Estructura del proyecto

```
portafolio-web/
├── index.html        # Estructura de la página
├── css/
│   └── styles.css    # Estilos y variables de tema (claro/oscuro)
├── js/
│   └── script.js      # Lógica de tema, storage y navegación
└── README.md
```

## Características

- **Modo oscuro/claro** con variables CSS (`data-theme` en `<html>`).
- **Persistencia con `localStorage`**: la preferencia de tema y la fecha de última visita se guardan y sobreviven al cerrar el navegador.
- **`sessionStorage`**: cuenta las vistas dentro de la misma pestaña/sesión; se reinicia al cerrar la pestaña.
- **Navegación suave**: el botón "Ver mis proyectos" hace scroll a la sección correspondiente.
- Responsivo y con estados de foco visibles para accesibilidad.

## Cómo verlo localmente

Abre `index.html` directamente en el navegador, o usa un servidor local, por ejemplo:

```bash
python3 -m http.server 8000
```

y visita `http://localhost:8000`.

## Autor

Camilo Rojas — Ingeniería Multimedia
