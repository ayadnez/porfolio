import React from 'react'
import styles from './About.module.css';
import { getImageurl } from '../../utils';

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageurl("assets/about/aboutImage.png")}
            alt='me sitting with a laptop'
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageurl("assets/about/serverIcon.png")} alt='server icon '/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I'm a Backend developer with experience of 1.5 years of writting scalabble and distributed system 
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageurl("assets/about/cursorIcon.png")} alt='curson icon '/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a Frontend developer having experience of writting responsive  and optimised websites
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About