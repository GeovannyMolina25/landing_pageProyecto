import { useState } from 'react'
import styles from './Card.module.css'

export default function Card({ title, shortText, longText, image, tag }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.image} loading="lazy" />

      <div className={styles.body}>
        <span className={styles.tag}>{tag}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.shortText}>{shortText}</p>

        <div className={`${styles.expandable} ${open ? styles.open : ''}`} aria-hidden={!open}>
          <div className={styles.expandableInner}>
            <p className={styles.longText}>{longText}</p>
          </div>
        </div>

        <button
          className={styles.btn}
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-label={open ? `Cerrar detalle de ${title}` : `Ver más sobre ${title}`}
        >
          {open ? 'Ver menos' : 'Ver más'}
          <svg
            className={`${styles.arrow} ${open ? styles.arrowOpen : ''}`}
            width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"
          >
            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  )
}
