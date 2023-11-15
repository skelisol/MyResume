import React from 'react'
import styles from './Rating.module.css';


function Rating() {
    return(
        <div className={styles.Rating}>
            <section className='hero'>
                <div className='main'>
                    <h2>Rate Me</h2>
                </div>
            </section>
        </div>
    )
}

// hero = diagonal main = wrapper
export default Rating