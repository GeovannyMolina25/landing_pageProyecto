import Card   from './Card'
import styles from './MasonryGrid.module.css'

const PROJECTS = [
  {
    id: 1,
    tag: 'Angular + Node.js',
    title: 'Almacén para productos',
    shortText: 'Sistema web para gestión de productos y control de inventario.',
    longText: 'Proyecto desarrollado con Angular en el frontend y Node.js en el backend. Permite registrar, editar y eliminar productos, así como gestionar el inventario de forma dinámica.',
    image: 'https://mecaluxes.cdnwm.com/blog/img/equipamiento-para-almacenaje.1.6.jpg?imwidth=640&imdensity=1',
  },
  {
    id: 2,
    tag: 'ASP.NET + Angular',
    title: 'Prueba Técnica Microservicios',
    shortText: 'Arquitectura basada en microservicios con .NET y Angular.',
    longText: 'Proyecto desarrollado con ASP.NET 8, Angular 19 y Microsoft SQL Server 2019. Implementa una arquitectura de microservicios para la gestión eficiente de datos y servicios.',
    image: 'https://www.edenred.mx/hs-fs/hubfs/Media%20Source%202023%20%20(imagenes%20blog)/Julio/Herramientas%20financieras%20para%20gestionar%20los%20gastos%20de%20tu%20empresa/que-es-una-herramienta-financiera.png?width=600&height=343&name=que-es-una-herramienta-financiera.png',
  },
  {
    id: 3,
    tag: 'HTML + CSS',
    title: 'Página Web Estática',
    shortText: 'Sitio web construido con HTML y CSS para prácticas de diseño.',
    longText: 'Proyecto enfocado en el desarrollo de interfaces web utilizando HTML y CSS puro, aplicando principios básicos de diseño responsivo y estructura web.',
    image: 'https://www.seas.es/blog/wp-content/uploads/2024/09/Programacion-web.jpg',
  },
  {
    id: 4,
    tag: 'Django',
    title: 'CRUD Gestor de Tareas',
    shortText: 'Aplicación para crear, editar y eliminar tareas.',
    longText: 'Sistema CRUD desarrollado con Django que permite gestionar tareas mediante operaciones de creación, actualización, eliminación y visualización de registros.',
    image: 'https://i0.wp.com/lab.wallarm.com/wp-content/uploads/2024/07/189.3-1.jpg?w=770&ssl=1',
  },
  {
    id: 5,
    tag: 'JavaScript',
    title: 'Herramienta Financiera',
    shortText: 'Aplicación web para calcular precios de venta.',
    longText: 'Herramienta web desarrollada con JavaScript que permite calcular precios de venta de productos elaborados considerando diferentes variables financieras.',
    image: 'https://narviz.com/wp-content/uploads/2025/03/Sistemas-contables-mas-usados-en-Ecuador-Dora.jpg',
  },
  {
    id: 6,
    tag: 'Flutter',
    title: 'Aplicación móvil con API',
    shortText: 'App móvil desarrollada en Flutter con conexión a API.',
    longText: 'Aplicación móvil que consume una API y gestiona datos entre pantallas. Implementa arquitectura basada en modelo, vista y controlador (MVC).',
    image: 'https://thinkupsoft.com/blog/wp-content/uploads/2024/08/la-nueva-app-de-Credito-de-la-Casa-_Blog-Nota.png',
  },
  {
    id: 7,
    tag: 'Dart',
    title: 'EduRuleta',
    shortText: 'Aplicación interactiva para apoyar el aprendizaje de estudiantes.',
    longText: 'Aplicación desarrollada para mejorar la participación estudiantil mediante actividades interactivas tipo ruleta educativa.',
    image: 'https://www.costway.es/media/catalog/product/cache/2a4b22f9c083d24cead5f2c8fb50ceeb/r/u/ruleta-de-mesa-giratoria-tt10005_8_.jpg',
  },
  {
    id: 8,
    tag: 'Node.js',
    title: 'Node.js Interculturalidad',
    shortText: 'Proyecto de conexión entre Node.js y base de datos.',
    longText: 'Aplicación desarrollada para practicar la conexión de Node.js con bases de datos y manejo básico de datos en el backend.',
    image: 'https://www.hostingplus.cl/wp-content/uploads/2025/01/best-nodeJS-databases-for-web-apps-1024x629.png.webp',
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
      <div className='seccion'>
          <div className='btnVermas'>
          <a href="https://github.com/GeovannyMolina25?tab=repositories" className={styles.link}>Ver mas ...</a>
        </div>
      </div>
      
    </section>
  )
}
