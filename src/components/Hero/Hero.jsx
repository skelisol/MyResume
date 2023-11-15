import React from 'react';
import styles from './Hero.module.css';
import { getImageURL } from '../../utility';

export const Hero = () => {

    return (
        <section className={styles.Hero}>
            <div className={styles.main}>
                <h1 className={styles.heading}><span>Hi, I'm </span>Jarvis Taylor</h1>
                <h2 className={styles.title}>Software/Web Developer</h2>
                <p className={styles.description}>Full Stack Developer specializing in Front End Development with experience in Design and Usability.</p>
                <p className={styles.motto}>Together, creating a magical and beautiful World with each keystroke...</p>
                <button className={styles.btnContact}> Contact Me </button>
            </div>
            <img className={styles.btnContact} src={getImageURL("heroImg.png")} alt='Hero Image'/>
        </section>
    )
};

// hero = diagonal main = wrapper
