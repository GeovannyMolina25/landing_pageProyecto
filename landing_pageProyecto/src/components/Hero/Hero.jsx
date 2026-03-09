import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const bgRef      = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
  
    let mouseX = 0;
    let mouseY = 0;
    let curX   = 0; 
    let curY   = 0;
    let rafId  = null

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 20
      mouseY = (e.clientY / window.innerHeight - 0.5) * 12
    }

    const animate = () => {
      const scrollY = window.scrollY

      if(bgRef.current){
        bgRef.current.style.transform = `translateY(${scrollY * 0.7}px)`
      }
      curX += (mouseX - curX) * 0.06
      curY += (mouseY - curY) * 0.06
      if (contentRef.current) {
        contentRef.current.style.transform =
          `translateY(${window.scrollY * 0.15}px) translate(${curX * 0}px, ${curY}px)`
      }
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section id="inicio" className={styles.section} aria-label="Sección principal">
      <video
  ref={bgRef}
  className={styles.bg}
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/Desarrollo1.mp4" type="video/mp4" />
</video>
      <div className={styles.overlay}        aria-hidden="true" />

      <div ref={contentRef} className={styles.content}>
        <span className={styles.eyebrow}>Desarrollador Full stack</span>

        <h1 className={styles.title}>
          Hola, soy<br />
          <span>Nelson Molina</span>
        </h1>

        <p className={styles.subtitle}>
          Ingeniero de software, con experiencia en desarrollo y liderazgo en equipos de trabajo. He trabajado en proyectos de
          aplicaciones web, móviles e inteligencia artificial, creando soluciones para
          problemas del mundo real.
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
