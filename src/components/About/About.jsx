import React from 'react'
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1>About</h1>
           <h2>backend developer</h2> 
            <p className={styles.description}>Im a backend developer with 1.5 years of experience of writting scallable and disturbuted systems in go , c++ , javascript , python, java 
                with latest technologies like kafka, rabbit mq, mongodb,kibbana .
            </p>
        </div>
          
        <div className={styles.content}>
            <h2>frontend developer</h2>
            <p className={styles.description}>I also have experience in frontend development with lots of projects in react, nextjs, tailwind </p>
        </div>
        <div className= {styles.topblur}/>
        <div className= {styles.bottomblur} /> 
    </section>
  )
}

export default About