import React from 'react'
import styles from './Educate.module.css'


function Educate() {
    return(

        <div className={styles.Educate}>
            <section className='eduCards'>
                <div className='main'>
                    <h2>Education & Experience</h2>
                    <div className="eduCards">
                        <div className="card">
                            <div className="cardFront">
                                <h2 className="cardTitle">Bachelor of Science in Software Development</h2>
                                <p>Western Governors University</p>
                            </div>
                            <div className="cardBack">
                                <p>This was a really awesome experience,
                                    and it helped me identify what area I would like to study.
                                    Also, provided me with the knowledge and understanding of working with different programming languages.
                                    </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardFront">
                                <h2 className="cardTitle">Encompass Developer</h2>
                                <p>Fairway Independent Mortgage Corporation</p>
                            </div>
                            <div className="cardBack">
                                <p>Great company to work for. Will elaborate
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardFront">
                                <h2 className="cardTitle">IT Support Specialist</h2>
                                <p>Enterprise and Consumer Facing</p>
                            </div>
                            <div className="cardBack">
                                <p>I worked for many Corporations provided IT Support for customers
                                    and Corporate employees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>         
            </section>
        </div>
    )
}

// hero = diagonal main = wrapper
export default Educate