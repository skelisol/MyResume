import React from 'react'
import styles from './Contact.module.css';
import { getImageURL } from '../../utility';

function btnContact() {
    // Email.send({
    //     // SecureToken:"",
    //     // or
    //     Host: "smtp.gmail.com",
    //     Username: "krickett86@gmail.com",
    //     Password: "M00nKn!ght777",
    //     To: 'taylorjarvisd@gmail.com',
    //     From: document.getElementById('email').value,
    //     Subject: 'New Contact Inquiry!',
    //     Body: "From: " + document.getElementById('fullname').value
    //     + "<br/> Email: " + document.getElementById('email').value
    //     + "<br/> Subject: " + document.getElementById('subject').value
    //     + "<br/> Message: " + document.getElementById('message').value    

    // }).then(
    //     reset(),        
    //     message => alert(message),
        
    // );
}

export const Contact = () => {
    return(
        <>
        <section className={styles.contact} id='contact'>
            <h2 className={styles.title}>Contact Me</h2>
           
            <div className={styles.main}>
                
                <input className={styles.label} type='text' id='fullname' placeholder='First Last Name' autoComplete='name'/>              
                <input className={styles.label} type='text' id='email' placeholder='email@email.com' autoComplete='email'/>
                <input className={styles.label} type='text' id='subject' placeholder='Title(Optional)'/>
                <textarea className={styles.label} type='text' id='message' placeholder='Type your message here' rows='10' cols='30'/>
                <button className={styles.btnSend} type='submit' onSubmit={btnContact()}>Send</button>
                <div className={styles.footDiv}>
                    <h3 className={styles.myEmail}>taylorjarvisd@email.com</h3>
                    <a className={styles.skillIcon} href='https://github.com/skelisol' target='_blank'>
                        <img  src={getImageURL("Icons/github.svg")} alt='Github Icon'/></a>
                    <a className={styles.skillIcon} href='https://www.linkedin.com/in/jarvis-t-76778433/' target='_blank'>
                        <img  src={getImageURL("Icons/linkedin.svg")} alt='LinkedIn Icon'/></a>
                </div>
            </div>
        </section>
        
        </>
    )
}
