# Trabajo Práctico Grupo 11 — ConvidAR

- Materia: **Taller de Lenguajes de Marcado y Tecnologías Web**
- Universidad: **Universidad Nacional de Hurlingham (UNAHur)**
- Año: **2026**

---

## 👥 Integrantes del Grupo
- Mauro Daniel Viveros
- Uriel Peralta
- Ricardo Ruiz
- Tomás Dalke

---

## 📖 Descripción del Proyecto

ConvidAR es el sitio web de una ONG comunitaria que conecta ciudadanos con programas
barriales gratuitos. La plataforma centraliza información sobre actividades artísticas,
educativas y familiares, facilitando el acceso a la participación comunitaria.

**Diseño neo-brutalista**: bordes gruesos, sombras sólidas sin blur, paleta de alto
contraste con 4 colores de acento, tipografía expresiva y modo oscuro completo.

---

## 📜 Páginas

| Página | Archivo | Contenido |
|---|---|---|
| Inicio | `src/index.html` | Hero, vista previa de programas, frase motivacional, CTA de contacto |
| Programas | `src/programas.html` | Arte que convida, Aprender juntos, Familias en red (con anclas) |
| Nosotros | `src/nosotros.html` | Historia, valores, cronología, equipo, ficha técnica |
| Contacto | `src/contacto.html` | Tarjetas de info, formulario con pre-selección por URL |

---

## 🧱 Estructura del Proyecto

```
src/
├── assets/
│   └── images/              # hero.jpg, nosotros-equipo.jpg, spot-*.jpg
├── scripts/
│   ├── index.js             # Toggle dark/light mode + reloj en vivo
│   ├── animations.js        # IntersectionObserver + Animate.css on scroll
│   └── form.js              # Pre-selección de dropdown vía ?programa= URL param
├── styles/
│   ├── variables.css        # Design tokens (colores, tipografía, sombras, bordes)
│   ├── bootstrap-overrides.css  # Pisa variables de Bootstrap con diseño de la pagina
│   ├── estructura.css       # Layout base, sidebar, header bar, breakpoints
│   ├── index.css            # Estilos de Inicio
│   ├── programas.css        # Estilos de Programas
│   ├── nosotros.css         # Estilos de Nosotros
│   └── contacto.css         # Estilos de Contacto
├── index.html
├── programas.html
├── nosotros.html
└── contacto.html
```

---

## 📝 Funcionalidades JavaScript

| Script | Funcionalidad |
|---|---|
| `index.js` | Modo oscuro/claro (`data-theme` + `data-bs-theme`) persistido en `localStorage`. Reloj en vivo con `setInterval`. |
| `animations.js` | `IntersectionObserver` que detecta elementos con `data-animate` en el viewport y les inyecta clases de Animate.css. |
| `form.js` | Lee `?programa=arte` (o `aprender`/`familias`) de la URL y pre-selecciona el dropdown del formulario de contacto. |

---

## 🚀 Deploy

Cada push a `main` dispara un workflow de GitHub Actions (`.github/workflows/deploy.yml`)
que publica la carpeta `src/` en GitHub Pages automáticamente.

---

## 📚 Documentación

Consulta los archivos en la carpeta `docs/`:
- [Guía de GitHub](docs/guia-github.md) - Introducción a Git y GitHub
- [Cómo Subir Cambios](docs/como-subir-cambios.md) - Instrucciones para contribuir
- [Trabajo práctico - Parte 1.pdf](docs/Trabajo%20práctico%20-%20Parte%201.pdf) - Trabajo Práctico
- [Trabajo práctico - Parte 2.pdf](docs/Trabajo%20práctico%20-%20Parte%202.pdf) - Trabajo Práctico
- [Trabajo práctico - Parte 3.pdf](docs/Trabajo%20práctico%20-%20Parte%203.pdf) - Trabajo Práctico
- [Trabajo práctico - Parte 4.pdf](docs/Trabajo%20práctico%20-%20Parte%204.pdf) - Trabajo Práctico