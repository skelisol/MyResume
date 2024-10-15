import React, {useState} from 'react';
import styles from './Navbar.module.css'
import {getImageURL} from "../../utility"

const logoImg = getImageURL("nav/J.svg"); //'../src/assets/J.svg';
const resume = new URL('https://drive.google.com/file/d/1d7hghB9Dj11jMIP17r_-Dn_LO3TN_mop/view?usp=drive_link');

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className={styles.navbar}>
            {/* <div className={styles.navlogo}> */}
                <img src={logoImg} className={styles.logo} alt='Logo'></img>
                <h2 className={styles.navTitle}>Jarvis Taylor's Digital Resume </h2>
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
                        <a href={resume} target='_blank'>Resume.pdf</a>
                    </li>
                    <li>
                        <a href='#portfolio'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#contact'>
                            <div className={styles.contactBtn}/>
                        </a>
                    </li>
                </ul>
            </div>

      </div>
    )
};