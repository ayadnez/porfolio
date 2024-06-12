import React from 'react';
import { getImageurl } from '../../utils';
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className= {styles.container}>
      <div className={styles.content}>
        <h1 className= {styles.title}>Hi, I'm Zahid</h1>
        <p className= {styles.description}>
        I'm a Full Stack Developer with a year of experience, excelling in Go, Node.js,
         React, C++, Python, Kafka, and RabbitMQ. I create efficient backend solutions 
         and intuitive user interfaces, consistently delivering high-quality, scalable software. Reach out if you'd like to know more.
        </p>
        <a href='mailto:zahid.ahmad.0303@gmail.com' className = {styles.contactBtn}>Contact me</a>
      </div>
      <img src={getImageurl("assets/hero/photo2.png")} alt="Hero Image" className= {styles.heroImg}/>
      <div className= {styles.topblur}/>
      <div className= {styles.bottomblur} /> 
    </section>
  );
}

export default Hero;
