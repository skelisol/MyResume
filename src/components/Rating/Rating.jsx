import React from 'react';
import styles from './Rating.module.css';

//TODO - Hide this section until user closes or tabs off, use the verbiage from H3
// let showExit = false;
export const Rating = () => {
    return(
        <section className={styles.rating} id='rating'>
            <h2 className={styles.title}>Rate My Site</h2>
            <div className={styles.main}>
                <h3 className={styles.description}>Please take a moment to comment about my site, so I can keep growing as a developer. Thank you!</h3>
                <div className={styles.starRatings}>
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

                </div>
                <legend className={styles.labelMain}>What brought you here?*</legend>
                <div className={styles.checkbox}>                
                    <div>
                        <input type='checkbox' id='friends' name='relation' value='Friend/Family'/>
                        <label className={styles.boxes} htmlFor="friends"> Friends/Family </label>
                    </div>
                    <div>
                        <input type='checkbox' id='coworker' name='relation' value='CoWorker'/>
                        <label className={styles.boxes} htmlFor="coworker"> CoWorker </label>
                    </div>
                    <div>
                        <input type='checkbox' id='staff' name='relation' value='Staff Sourcing'/>
                        <label className={styles.boxes} htmlFor="staff"> Staff Sourcing </label>
                    </div>
                    <div>
                        <input type='checkbox' id='browsing' name='relation' value='Browsing'/>
                        <label className={styles.boxes} htmlFor="browsing"> Browsing </label>
                    </div>
                </div>
                <input className={styles.label} type='text' id='optname' placeholder='First Last Name' autoComplete='name'/>
                <input className={styles.label} type='text' id='profession' placeholder='Profession'/>
                <textarea className={styles.label} type='text' id='comments' placeholder='Comments/What would you change...' rows='10' cols='30'/>
                <button className={styles.btnSend} type='submit'>Send</button>
                {/* TODO - On successful post, need to hide the input display and show feedback dialog,
                 "Thank you for you feedback. Have a great day!" */}
            </div>
        </section>
    )
}