## Inicial el proyecto

## Se pone en el terminal estos comandos

npm install
npm run dev

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

Cada componente tiene su archivo .jsx y .module.css 
Siempre se evita que los nombres de los componentes sean diferetes para que no haya tipos de errores desde las rutas...

Se utiliza una rquitectura limpia y modular donde el proyecto puede seguir avanzando acorde a los requerimeintos del usuario y cada uno de los componentes estan separados, en el idex se manda a llamar las tablas 

---

## Decisiones relevantes

**Parallax sin librerías** — Se usa el metodo addEventListener('scroll') con passive true para no bloquear el hilo principal. 

**Masonry con CSS columns`** — Sin JavaScript ni librerías. El navegador distribuye las tarjetas solo. Para un grid estático es la solución más simple y tambien es muy eficiente.

---

## Qué mejoraría con más tiempo

Una de las cosas seria migrar a typescript me parece que es una mejor opcion, tambien hacer el proceso de testin usando la misma tegnologia de vitest testing y react, ingresar nuevas tarjetas para ver los productos o proyectos.
agregar nuevas paginas y rutas diferentes para cada uno de los linknav
hacerle un poco mas dinamica a la pagina y con mejores estilos, hacer animaciones solo con javascript 
