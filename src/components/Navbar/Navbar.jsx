import React, {useState} from 'react';
import styles from './Navbar.module.css'
import {getImageURL} from "../../utility"

const logoImg = getImageURL("nav/J.svg"); //'../src/assets/J.svg';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            {/* <div className={styles.navlogo}> */}
                <img src={logoImg} className={styles.logo} alt='Logo'></img>
            {/* </div> */}
            <div className={styles.navMenu}>
                <img className={styles.navBtn} src={
                    menuOpen 
                    ? getImageURL("nav/escBtn.svg") //false State
                    : getImageURL("nav/navBtn.svg")
                } 
                alt='Menu Button'
                onClick={() => setMenuOpen(!menuOpen)}
                />

                <ul className={`${styles.navItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}>

                    <li>
                        <a href='#navbar' >Home</a>
                    </li>
                    <li>
                        <a href='#about'>About Me</a>
                    </li>
                    <li>
                        <a href='#'>Resume.pdf</a>
                    </li>
                    <li>
                        <a href='#portfolio'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a> 
                    </li>
                </ul>
            </div>

      </nav>
    )
};