import React from 'react';
import styles from './About.module.css';
import { getImageURL } from '../../utility';


export const About = () => {
    return (
        <section className={styles.about} id='about'>
            <div className={styles.heading}>
                <h2 className={styles.title}>Ok, but who is Jarvis?</h2>
                <img className={styles.aboutImg} src={getImageURL("About/aboutImg.png")} alt='Generic hero'/>
                <div className={styles.main}>
                    <p className={styles.aboutme}>
                    <span>I'm Jarvis!</span>
                    <br/>
                    Yes, like in Iron Man😁 I also cosplay, but I haven’t gotten around to my Vision suit yet! 
                    <br/>
                    I've been working in IT for about 13 years now. I started off doing Tech Support for Verizon Fios, and slowly moved my way to working as an Encompass Developer, for a large mortgage corporation. 
                    <br/>
                    Throughout my career, I've helped many people solve their work and at home problems. About 5 years ago, I decided it was time to put things into my own hands. 
                    <br/>Developers are responsible for building intuitive and effective applications to better the lives of others, which until three years ago, I've just been supporting. 
                    <br/>
                    After graduating college, it took me some time to discover how I want to help others and advance my career. Luckily, I've found joy in developing applications. 
                    <br/>And so, I embarked on a journey...
                    </p>
                </div>
            </div>
        </section>
    )
}
