import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const LINKS = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      for (const link of [...LINKS].reverse()) {
        const id = link.href.slice(1)
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id)
          return
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header role="banner" className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        <div className={styles.row}>
          <a href="#inicio" className={styles.logo} aria-label="Ir al inicio">
            Prueba de frontend
          </a>

          <nav aria-label="Navegación principal" className={styles.desktopNav}>
            {LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${active === link.href.slice(1) ? styles.active : ''}`}
                aria-current={active === link.href.slice(1) ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
          aria-label="Menú móvil"
        >
          <nav className={styles.mobileNav}>
            {LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.mobileLink} ${active === link.href.slice(1) ? styles.active : ''}`}
                onClick={() => setMenuOpen(false)}
                aria-current={active === link.href.slice(1) ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

      </div>
    </header>
  )
}
