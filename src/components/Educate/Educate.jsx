import React from 'react'
import styles from './Educate.module.css'
import { getImageURL } from '../../utility';

const resume = new URL('https://drive.google.com/file/d/1YCyIthigizQwWrSWwTjAfZs3HHqAH6Rg/view?usp=drive_link');

export const Educate = () => {
    return (
        <section className={styles.educate}>
            <h2 className={styles.title}>Education & Experience</h2>
            {/* Body */}
            <div className={styles.main}>
                {/* Container */}
                <div className={styles.eduCards}>
                    {/* Card */}
                    <div className={styles.card}>
                        {/* Front */}
                        <div className={styles.cardFront}>
                            <p>Graduated 2023</p>
                            <h2 className={styles.cardTitle}>Bachelor of Science in Software Development</h2>
                            <p>Western Governors University</p>
                            <h5>Mouse for Details</h5>
                        </div>
                        {/* Back */}
                        <div className={styles.cardBack}>
                            <ul>
                                <li>Discovered Career Passion</li>
                                <li>Experience with different programming languages</li>
                                <li>Confidence in trying new things</li>
                                <li>Worked w/ HTML, CSS, JS, Xamarin, C#, XAML, APIs, Mobile Platforms(Android, IOS, UWP), MySQL, SQLite, PostgreSQL</li>
                                <li>Certifications: A+, Project+, ITIL Foundation, CIW Site Development Associate, CIW Advance HTML5 & CSS3, CIW - User Interface Designer </li>
                            </ul>
                            {/* <p>This was a really awesome experience,
                                and it helped me identify what area I would like to study.
                                Also, provided me with the knowledge and understanding of working with different programming languages.
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className={styles.eduCards}>
                    <div className={styles.card}>
                        <div className={styles.cardFront}>
                            <p>2019 - Current</p>
                            <h2 className={styles.cardTitle}>Encompass Developer</h2>
                            <p>Fairway Independent Mortgage Corporation</p>
                            <h5>Mouse for Details</h5>
                        </div>
                        <div className={styles.cardBack}>
                            <ul>
                                <li>Create, configure and update business rules and custom input forms within the Encompass IDE (inherited from Windows Form App (.NET Framework)) using Visual Basic and C#</li>
                                <li>Collab with Dev team on installing and configuring codebase DLL files, internal/external plugins, custom data objects, and JSON files using Visual Studio 2019, Bitbucket, Adobe Workfront and Atlassian Jira</li>
                                <li>To see more details, check out my <a href= {resume} target='_blank'>Resume</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.eduCards}>
                    <div className={styles.card}>
                        <div className={styles.cardFront}>
                            <p>2010 - 2020</p>
                            <h2 className={styles.cardTitle}>IT Support Specialist</h2>
                            <p>Enterprise and Consumer Facing</p>
                            <h5>Mouse for Details</h5>
                        </div>
                        <div className={styles.cardBack}>
                            <ul>
                                <li>Enterprise and Consumer End User Support for & on Windows/Mac devices</li>
                                <li>Detailed documentation to track and manage incidents and requests</li>
                                <li>Identify known issues with hardware/software to share with the team via knowledge base articles/email</li>
                                <li>Troubleshooting and managing various software and hardware, such as Citrix Xen Desktop/VDI, Wyse Thin Clients, VPNs, printers, Office Apps, 
                                soft phones, cameras, markdown devices, etc</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    )
}

