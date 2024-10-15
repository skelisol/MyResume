import React from 'react';
import styles from './Hero.module.css';
import {getImageURL, rating} from '../../utility';
import { RateCard } from '../RateCard/RateCard';

export const Hero = () => {

    return (
        <section className={styles.hero}>
            <div className={styles.main}>
                <h2 className={styles.heading}><span className={styles.span}>Hi, I'm</span>Jarvis Taylor</h2>
                <div className={styles.grouping}>
                    <h2 className={styles.span}>a</h2>
                    <h2 className={styles.title}>Front-End Developer</h2>
                </div>
                <p className={styles.description}>specializing in Creative Design for a unique User Experience.</p>
                <p className={styles.motto}>Creating a Magical and Beautiful Web with each keystroke...</p>
                <a href='#contact'>
                    <button className={styles.btnContact}>
                        {/* <img src={getImageURL("nav/contactBtn1.svg")} alt='Contact Me button'/> */}
                        {/* <img className={styles.btnContact1} src={getImageURL("nav/contactBtn2.svg")} alt='Contact Me Button'/> */}
                        <div className={styles.btnContact2}>                 
                        </div>
                    </button>
                </a>
            </div>
            <div className={styles.side}>
                <img className={styles.heroImage} src={getImageURL("heroImg.png")} alt='Hero Image' />
                <RateCard
                    stars={rating[0].stars}
                    relation={rating[0].relation}
                    optname={rating[0].optname}
                    profession={rating[0].profession}
                    comments={rating[0].comments}
                />
            </div>
            
        </section>
    )
};

// hero = diagonal main = wrapper
