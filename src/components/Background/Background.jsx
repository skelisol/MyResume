import React from 'react';
import styles from './Background.module.css';
import { getImageURL } from '../../utility';

export const Background = () => {
  return (
    <section className={styles.background}>
      <section className={styles.stage}>
        <figure className={styles.ball}>
          <span className={styles.shadow}>
          </span>
        </figure>
      </section>
    </section>
  )
}