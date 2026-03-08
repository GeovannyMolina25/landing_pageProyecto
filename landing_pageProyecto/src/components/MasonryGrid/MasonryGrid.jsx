import Card   from './Card'
import styles from './MasonryGrid.module.css'

const PROJECTS = [
  {
    id: 1,
    tag: 'React',
    title: 'App de gestión de tareas',
    shortText: 'Aplicación para organizar tareas con filtros por estado.',
    longText: 'Construida con React y useReducer. Implementé drag & drop nativo con la API HTML5. Los datos se persisten en localStorage para que sobrevivan recargas de página.',
    image: 'https://picsum.photos/seed/tasks/600/380',
  },
  {
    id: 2,
    tag: 'Next.js',
    title: 'Blog personal con MDX',
    shortText: 'Blog estático generado con Next.js donde escribo sobre frontend.',
    longText: 'Uso MDX para combinar Markdown con componentes React. El sitio se genera en build time (SSG) para máxima performance. Tiene dark mode y buen score en Lighthouse.',
    image: 'https://picsum.photos/seed/blog/600/440',
  },
  {
    id: 3,
    tag: 'CSS',
    title: 'Sistema de diseño propio',
    shortText: 'Librería de componentes reutilizables documentados con Storybook.',
    longText: 'Construí botones, inputs, modales y tooltips desde cero con accesibilidad completa. Los tokens de diseño se gestionan con CSS custom properties.',
    image: 'https://picsum.photos/seed/design-sys/600/300',
  },
  {
    id: 4,
    tag: 'API REST',
    title: 'Dashboard del clima',
    shortText: 'Visualización de datos meteorológicos con búsqueda por ciudad.',
    longText: 'Consume la API de OpenWeatherMap. Usé React Query para el manejo de cache y estados de carga. Los gráficos están hechos con Recharts.',
    image: 'https://picsum.photos/seed/weather/600/360',
  },
  {
    id: 5,
    tag: 'TypeScript',
    title: 'E-commerce de plantas',
    shortText: 'Tienda online con carrito de compras y checkout paso a paso.',
    longText: 'Proyecto completo tipado con TypeScript. El estado del carrito vive en Context API. El checkout tiene validación de formularios sin librerías externas.',
    image: 'https://picsum.photos/seed/plants-shop/600/420',
  },
  {
    id: 6,
    tag: 'Animaciones',
    title: 'Landing page interactiva',
    shortText: 'Página con scroll animations y micro-interacciones.',
    longText: 'Todas las animaciones usan requestAnimationFrame o CSS puro para mantener 60fps. No se usó ninguna librería de animación para mantener el bundle pequeño.',
    image: 'https://picsum.photos/seed/landing-anim/600/350',
  },
  {
    id: 7,
    tag: 'Accesibilidad',
    title: 'Formulario multi-paso',
    shortText: 'Formulario con 4 pasos, validación en tiempo real y teclado.',
    longText: 'Implementado siguiendo las guías WCAG 2.1. El foco se mueve al cambiar de paso. Los mensajes de error están enlazados con aria-describedby.',
    image: 'https://picsum.photos/seed/form-a11y/600/390',
  },
  {
    id: 8,
    tag: 'Performance',
    title: 'Galería de imágenes',
    shortText: 'Galería con lazy loading y carga progresiva de imágenes.',
    longText: 'Usa IntersectionObserver para cargar imágenes cuando están próximas al viewport. Las imágenes tienen placeholder blur mientras cargan.',
    image: 'https://picsum.photos/seed/gallery-perf/600/340',
  },
]

export default function MasonryGrid() {
  return (
    <section id="proyectos" className={styles.section} aria-label="Proyectos">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Proyectos</span>
        <h2 className={styles.title}>Lo que he construido</h2>
      </div>

      <div className={styles.grid}>
        {PROJECTS.map(project => (
          <Card
            key={project.id}
            title={project.title}
            shortText={project.shortText}
            longText={project.longText}
            image={project.image}
            tag={project.tag}
          />
        ))}
      </div>
    </section>
  )
}
