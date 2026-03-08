import {useState} from "react"
import styles from "./Navbar.module.css"

function Navbar(){
    const[menuOpen, setMenuOpen] = usueState(false)

    return(
        <header className={styles.navbar}>
        <div className={styles.logo}>
            MySite
        </div>
        <nav>
            <NavLink to="/" className = {({isActive}) => isActive ? "activeLink":""}>
                Home
            </NavLink>
            <NavLink to="/gallery" className = {({isActive}) => isActive ? "activeLink":""}>
                Galeria
            </NavLink>
            <NavLink to="/contact" className = {({isActive}) => isActive ? "activeLink":""}>
                Contacto
            </NavLink>
        </nav>
        <button
        className={styles.humburger}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        onClick={()=> setMenuOpen(!menuOpen)}
        >
        ☰
        </button>
        </header>
    )
}

export default Navbar