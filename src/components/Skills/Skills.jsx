import React from 'react';
import styles from './Skills.module.css';
import { getImageURL } from '../../utility';


export const Skills = () => {
    return (
        <section className={styles.skills} id='skills'>
            <div className={styles.heading}>
                <h2 className={styles.title}>Skills & Tools</h2>
                <div className={styles.main}>
                    <div className={styles.iconContainer}>
                        <img className={styles.skillIcon} src={getImageURL("Icons/bitbuck.svg")} alt='BitBucket Icon'/>
                        <span className={styles.iconName}>Bitbucket</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <img className={styles.skillIcon} src={getImageURL("Icons/canva.svg")} alt='Canva Icon'/>
                        <span className={styles.iconName}>Canva</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <img className={styles.skillIcon} src={getImageURL("Icons/csharp.svg")} alt='C# Icon'/>
                        <span className={styles.iconName}>C#</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <img className={styles.skillIcon} src={getImageURL("Icons/css3.svg")} alt='CSS3 Icon'/>
                        <span className={styles.iconName}>CSS3</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <img className={styles.skillIcon} src={getImageURL("Icons/github.svg")} alt='Github Icon'/>
                        <span className={styles.iconName}>GitHub</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <img className={styles.skillIcon} src={getImageURL("Icons/html5.svg")} alt='HTML5 Icon'/>
                        <span className={styles.iconName}>HTML5</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <img className={styles.skillIcon} src={getImageURL("Icons/javascript.svg")} alt='JavaScript Icon'/>
                        <span className={styles.iconName}>JavaScript</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <img className={styles.skillIcon} src={getImageURL("Icons/sqlite.svg")} alt='SQLite Icon'/>
                        <span className={styles.iconName}>SQLite</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <img className={styles.skillIcon} src={getImageURL("Icons/visualstudio.svg")} alt='Visual Studio Icon'/>
                        <span className={styles.iconName}>Visual Studio</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <img className={styles.skillIcon} src={getImageURL("Icons/visualstudiocode.svg")} alt='Visual Studio Code Icon'/>
                        <span className={styles.iconName}>Visual Studio Code</span>
                    </div>

                </div>
            </div>
        </section>
    )
}

// hero = diagonal main = wrapper <span className={styles.iconName}>BitBucket</span>