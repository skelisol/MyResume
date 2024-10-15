import React from 'react';
import styles from './PrevPort.module.css';
import { getImageURL } from '../../utility';



export const PrevPort = ()=>  {
    return (
        <section className={styles.prevport} id='portfolio'>
            <h2 className={styles.title}>Portfolio</h2>
            <div className={styles.description}>
                <p>There will be more to come for my portfolio. This is my first build to see if I enjoy the work, which I definitely do, so let me know if you're interested in seeing updates!</p></div>
            <div className={styles.main}>
                <img className={styles.crecutz} src={getImageURL("crecutz.png")} alt='Example Application image'/>
                <h3>Cre8NCutz Website (In Progress)</h3>                
            </div>
            
        </section>
    )
}
