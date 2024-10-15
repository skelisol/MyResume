import React from 'react';
import styles from './RateCard.module.css';
import { rating } from '../../utility';

export const RateCard = (props) => {
  return (
    <div className={styles.rateCards}>
      <div className={styles.card}>
        <div className={styles.cardFront}>
            <div className={styles.starWidget}>
              <input type='radio' name='star' id='star5'/>
              <label htmlFor='star5'></label>
              <input type='radio' name='star' id='star4'/>
              <label htmlFor='star4'></label>
              <input type='radio' name='star' id='star3'/>
              <label htmlFor='star3'></label>
              <input type='radio' name='star' id='star2'/>
              <label htmlFor='star2'></label>
              <input type='radio' name='star' id='star1'/>
              <label htmlFor='star1'></label>
            </div>
            <h2 className={styles.cardTitle}> {props.optname}</h2>
          <h4>{ props.profession}</h4>
            <h5>{props.comments}</h5>
        </div>                        
      </div>
    </div>
  )
};

