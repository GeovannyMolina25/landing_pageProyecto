# Landing Page — Prueba Técnica Frontend

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abrir **http://localhost:5173**

---

## Estructura

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.module.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.module.css
│   ├── MasonryGrid/
│   │   ├── MasonryGrid.jsx
│   │   ├── MasonryGrid.module.css
│   │   ├── Card.jsx
│   │   └── Card.module.css
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.module.css
├── App.jsx
├── main.jsx
└── index.css
```

---

## Enfoque técnico

Cada componente vive en su propia carpeta con su `.jsx` y su `.module.css`. Los CSS Modules evitan conflictos de nombres de clase entre componentes sin necesitar ninguna configuración extra.

El `index.css` solo contiene variables globales (`--accent`, `--border`, etc.) y el reset. Los estilos específicos de cada parte están en su propio módulo.

---

## Decisiones relevantes

**Parallax sin librerías** — Se usa `addEventListener('scroll')` con `{ passive: true }` para no bloquear el hilo principal. `will-change: transform` mueve los elementos a la GPU anticipadamente.

**Expandir tarjetas con `grid-template-rows`** — Animar de `0fr` a `1fr` es más preciso que `max-height` porque no requiere un valor fijo arbitrario. La transición siempre es fluida sin importar el tamaño del contenido.

**Masonry con CSS `columns`** — Sin JavaScript ni librerías. El navegador distribuye las tarjetas solo. Para un grid estático es la solución más simple y eficiente.

---

## Qué mejoraría con más tiempo

- Agregar un video `.mp4` real en el Hero
- Animaciones de entrada con `IntersectionObserver`
- Migrar a TypeScript
- Tests con Vitest + React Testing Library
