# Landing Page — Prueba Técnica Frontend

## Cómo correr el proyecto

## Desacargar el proyecto de GitHub
**Con git clone**

- Aqui tienes que abrir la carpeta del proyecto
- Abrir un CMD y colocar git clone https://github.com/GeovannyMolina25/landing_pageProyecto.git
- Se comenzara a intalar el proyecto.

**tipo zip**

- Ir al proyecto que se encuentra en https://github.com/GeovannyMolina25/landing_pageProyecto
- Aplastar el boton de CODE (Un botton verde)
- Seleccionar Downland Zip y se comenzara a descargar el proyecto.
- Pon lo descargado en la carpeta que deseas que este el proyecto.
- Extraele los documentos que tiene el proyecto.

**Ubicacion del proyecto**
Para poder ejecutar el proyecto debes abrir la carpeta **landin_pageProyecto** con cualquier IDE Que desees utilizar y ahi procedes abrir el terminarl y poner los siguientes comandos...

``Terminal

npm install
npm run dev

```

Despues se abre con este link en cualquier navegador **http://localhost:5173**

---

## Estructura
node_modules/
public/
src/
── assets
── components/
   ── Navbar/
      ── Navbar.jsx
      ── Navbar.module.css
   ── Hero/
      ── Hero.jsx
      ── Hero.module.css
   ── MasonryGrid/
      ── MasonryGrid.jsx
      ── MasonryGrid.module.css
      ── Card.jsx
      ── Card.module.css
   ── Footer/
       ── Footer.jsx
       ── Footer.module.css
── App.jsx
── main.jsx
── index.css
## foto de estructura

<img width="369" height="804" alt="image" src="https://github.com/user-attachments/assets/eaaae608-6b65-404f-b2a7-35ae44c67a0f" />

## Enfoque técnico

Cada componente esta en su propia carpeta con su nombre .jsx y su .module.css. Los CSS Modules evitan conflictos de nombres de clase entre componentes sin necesitar ninguna configuración extra.

El index.css solo contiene variables globales y el reset. Los estilos específicos de cada parte estan en su propio módulo y tiene si .jsx y css.

---

## Decisiones relevantes
-El proyecto consiste en una landing page desarrollada con React, organizada mediante una arquitectura basada en componentes reutilizables como Navbar, Hero, MasonryGrid y Footer, también se implementó un diseño responsive, utilizando media queries para adaptar la interfaz a diferentes dispositivos como desktop, tablet y móvil.

**Parallax sin librerías** — Se usa addEventListener('scroll') con passive en verdadero para no bloquear el hilo principal y que pueda bajarse con el scroll toda la pantalla, pare animar de 0fr a 1fr es más preciso que max-height porque no requiere un valor fijo arbitrario. La transición siempre es fluida sin importar el tamaño del contenido.

-Se aplicaron buenas prácticas de desarrollo, como el uso de CSS Modules para evitar conflictos de estilos y mejorar la organización del proyecto.

---

## Qué mejoraría con más tiempo
- Una buena practica seria migrar a typescrip para que se haga mas modular y escalable, ademas tambien se podra hacer una serie de pruebas con los recuersos que nos da react y virtetest
tambien mejorar la interfaz de usuario y los estilos no sean tan sencillos, tambien implementar breakpoint para ser mas responsive para otros tipos de dispositivos. 
- Modo oscuro para mejorar la experiencia de usuario.
- También optimizaría la estructura y el rendimiento del proyecto, implementando lazy loading para imágenes en la galería, optimización de assets y una mejor organización del estado para que la aplicación sea más eficiente.

