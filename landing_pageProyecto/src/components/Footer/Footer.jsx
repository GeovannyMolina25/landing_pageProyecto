import styles from './Footer.module.css'


const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/GeovannyMolina25', label: 'Github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nelsonmolinasangucho/', label: 'Linkenl' },
  { name: 'Facebook', href: 'https://www.facebook.com/geovanny.sangucho.2025/', label: 'Facebook' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <a href="#inicio" className={styles.brand}>
              Nelson Molina<span>.</span>
            </a>

            <p className={styles.brandDesc}>
              Desarrollador full stack apasionado por crear soluciones digitales
              modernas y eficientes.
            </p>
          </div>
          <div>
            <p className={styles.colTitle}>CONTACTO</p>
            <div className={styles.linkList}>
              <a
                href="mailto:geovannysangucho25@gmail.com"
                className={styles.link}
              >
                geovannysangucho25@gmail.com
              </a>

              <a
                href="tel:+593998628996"
                className={styles.link}
              >
                0998628996
              </a>

              <span className={styles.link}>Quito, Ecuador</span>
            </div>
          </div>
          <div>
            <a href="#inicio" className={styles.brand}>
              Redes
            </a>

            <p className={styles.brandDesc}>
              <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
            </p>
          </div>

        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} Nelson Molina — Todos los derechos reservados
          </p>
        </div>

      </div>
    </footer>
  )
}