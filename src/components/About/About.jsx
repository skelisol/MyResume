import React from 'react';
import styles from './About.module.css';


function About() {
    return(
        <div className={styles.About}>
            <section className='hero'>
                <div className='main'>
                    <h2>Ok, but who is Jarvis?</h2>
                </div>
            </section>
        </div>
    )
}

// hero = diagonal main = wrapper
export default About