'use client'
import Image from "next/image";

import styles from './styles.module.scss';
import introImg from "../../../public/images/rocket.jpg";
export default function Intro() {

  return (
    <div className={`container ${styles.introContainer}`}>
      <div className={styles.column1}>
        <h2>Explore the Universe, Through The Daily Orbit</h2>
        <p>Welcome to a living window into space. This project pulls real-time data and media from NASA to showcase stunning Astronomy Pictures of the Day, stream official mission footage, and track near-Earth asteroids by date.</p>
        <p>Whether you're here to admire a distant nebula, watch a rocket launch, or investigate space rocks passing within cosmic arm's reach, this site turns public space data into an interactive experience.</p>
        <p>Built with modern web tools including Next.js and powered by real <a href="https://api.nasa.gov/" target="_blank">NASA APIs</a>, this project demonstrates dynamic data fetching, media rendering, and responsive UI design — all wrapped in a little stardust.</p>
      
        <div className={styles.buttonWrapper}>
          <a className="button primaryButton" href="#imageOfTheDay">Image of the day</a>
          <a className="button tertiaryButton" href="#asteroids">Find an asteroid</a>
        </div>
      </div>
      <div className={styles.column2}>
           <Image
            src={introImg}
            alt="Rocket launching from space station"
            width={480}
            height={360}
            priority
        />
      </div>
    </div>
  );
}
