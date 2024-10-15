import React from 'react';
import styles from './Focus.module.css';
import { getImageURL } from '../../utility';

export const Focus = () => {
    return(
        <section className={styles.focus}>
            <h2 className={styles.title}>Career Focus</h2>

            <div className={styles.main}>
                <p className={styles.description}>Growth in the knowledge and understanding of Software and Web Development 
                with a team that displays high morale, creativity, and expertise for a 
                company that brings joy and satisfaction to their clients and stakeholders.
                </p>
            </div>
        </section>
    )
}
