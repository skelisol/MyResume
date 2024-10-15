import React, {useState} from 'react';
import App from '../../App';
import styles from './Dialog.module.css'
// import {Rating} from '../Rating/Rating';
// import rating from '../Rating/Rating.module.css';

let showExit = true;
let counter = 0;

document.addEventListener('mouseleave', () => {
  counter++;
  if (showExit && counter > 2) {
      ratingDialog.showModal();
      console.log("showExit " + showExit);
      showExit = false;
    } 
  });

export const Dialog = () => {
  const ratingDialog = document.getElementsByClassName('.exitPopup');
  const ratingClose = (event) => {    
      ratingDialog.close;
      showExit = false;
      console.log("showExit " + showExit);
  };

  const ratingYes = (event) => {
    ratingDialog.close;
    showExit = false;
    window.location.href = '#rating';
  }

  return (
    <dialog id='ratingDialog' className={styles.exitPopup}>
      <form className={styles.form} method='dialog'>
        <h2 className={styles.title}>Help me become the best developer I can be. Please leave a comment or suggestion! Thank you!</h2>
        <div className={styles.btnDialogDiv}>
          <button className={styles.btnDialogResp} id='ratingYes' value='Yes' onClick={ratingYes}> Sure! </button>
          <button className={styles.btnDialogResp} value='cancel' type='submit' formMethod='dialog' onClick={ratingClose}>No, Thank you</button>
        </div>
      </form>
    </dialog>
  )
};