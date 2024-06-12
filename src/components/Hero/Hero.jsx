import React from 'react';
import { getImageurl } from '../../utils';
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className= {styles.container}>
      <div className={styles.content}>
        <h1 className= {styles.title}>Hi, I'm Zahid</h1>
        <p className= {styles.description}>
          I'm a full stack developer with 2 years of experience.
          Reach out to me if you would like to know more about me.
        </p>
        <a href='mailto:zahid.ahmad.0303@gmail.com' className = {styles.contactBtn}>Contact me</a>
      </div>
      <img src={getImageurl("assets/hero/Heroimage.png")} alt="Hero Image" className= {styles.heroImg}/>
      <div className= {styles.topblur}/>
      <div className= {styles.bottomblur} /> 
    </section>
  );
}

export default Hero;
