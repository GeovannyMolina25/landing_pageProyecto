import styles from './Footer.module.css'

const SOCIALS = [
  { name: 'GitHub',   href: 'https://github.com',   label: 'GH' },
  { name: 'LinkedIn', href: 'https://linkedin.com', label: 'LI' },
  { name: 'Twitter',  href: 'https://twitter.com',  label: 'TW' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contacto" className={styles.footer} role="contentinfo">
      <div className={styles.inner}>

        <div className={styles.grid}>

          <div>
            <a href="#inicio" className={styles.brand} aria-label="Volver al inicio">
              Nelson Molina<span>.</span>
            </a>
            <p className={styles.brandDesc}>
              Desarrollador frontend con foco en React y buenas prácticas.
            </p>
            <nav aria-label="Redes sociales" className={styles.socials}>
              {SOCIALS.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  className={styles.socialLink}
                  aria-label={`Visitar ${s.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className={styles.colTitle}>Secciones</p>
            <ul className={styles.linkList}>
              <li><a href="#inicio"    className={styles.link}>Inicio</a></li>
              <li><a href="#proyectos" className={styles.link}>Proyectos</a></li>
              <li><a href="#contacto"  className={styles.link}>Contacto</a></li>
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>Contacto</p>
            <address style={{ fontStyle: 'normal' }} className={styles.linkList}>
              <a href="mailto:geovannysangucho25@gmail.com" className={styles.link}>juan@ejemplo.com</a>
              <a href="telefono: 0998628996"        className={styles.link}>+56 9 1234 5678</a>
              <span className={styles.link}>Quito, Ecuador</span>
            </address>
          </div>

        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {year} Nelson Molina. Todos los derechos reservados.</p>
          <p className={styles.copy}>Hecho con React + Vite</p>
        </div>

      </div>
    </footer>
  )
}
