import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const bgRef      = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      if (bgRef.current)      bgRef.current.style.transform      = `translateY(${y * 0.35}px)`
      if (contentRef.current) contentRef.current.style.transform = `translateY(${y * 0.15}px)`
    }

    let mouseX = 0, mouseY = 0
    let curX   = 0, curY   = 0
    let rafId  = null

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 14
      mouseY = (e.clientY / window.innerHeight - 0.5) * 10
    }

    const animate = () => {
      curX += (mouseX - curX) * 0.06
      curY += (mouseY - curY) * 0.06
      if (contentRef.current) {
        contentRef.current.style.transform =
          `translateY(${window.scrollY * 0.15}px) translate(${curX * 0.4}px, ${curY * 0.4}px)`
      }
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('scroll',    handleScroll,    { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll',    handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section id="inicio" className={styles.section} aria-label="Sección principal">
      <div ref={bgRef} className={styles.bg} aria-hidden="true" />
      <div className={styles.overlay}        aria-hidden="true" />

      <div ref={contentRef} className={styles.content}>
        <span className={styles.eyebrow}>Desarrollador Frontend</span>

        <h1 className={styles.title}>
          Hola, soy<br />
          <span>Nelson Molina</span>
        </h1>

        <p className={styles.subtitle}>
          Creo interfaces limpias y accesibles con React. Me importa el detalle y el código que se entiende.
        </p>

        <div className={styles.ctas}>
          <a href="#proyectos" className={styles.btnPrimary}>Ver proyectos</a>
          <a href="#contacto"  className={styles.btnOutline}>Contactar</a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
