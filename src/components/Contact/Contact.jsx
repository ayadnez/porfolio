import React from 'react'
import { getImageurl } from '../../utils'
import styles from './Contact.module.css';

const Contact = () => {
  return (
   <footer id='contact' className={styles.container}>
    <div className={styles.text}>
    <h2>Contact</h2>
    <p>Feel free to reach out!</p>
    </div >
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageurl("assets/contact/emailIcon.png")} alt='email icon '/>
            <a href='mailto: zahid.ahmad.0303@gmail.com'>zahid.ahmad.0303@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageurl("assets/contact/linkedinIcon.png")} alt='linkedin icon '/>
            <a href="https://www.linkedin.com/in/zahid-ahmad-104892222/">linkedin.com/zahid-ahmad</a>
        </li>
        <li className={styles.link}>
            <img src={getImageurl("assets/contact/githubIcon.png")} alt='email icon '/>
            <a href='https://github.com/ayadnez'>github.com/ayadnez</a>
        </li>
        
    </ul>

   </footer>
  )
}

export default Contact