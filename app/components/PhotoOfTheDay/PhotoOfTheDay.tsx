'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from './styles.module.scss';

interface PhotoOfTheDay {
  date: string,
  explanation: string,
  hdurl: string,
  title: string,
  url: string,
}

// Photo of the day
export default function PhotoOfTheDay() {

    const [nasaData, setData] = useState<PhotoOfTheDay | null>(null);
    
      useEffect(() => {
        async function fetchPosts() {
          const apiKey = "qQmkyQjZ6MW6njCSmdeFz5R6gv8iiJhIFVevzy6B";
          const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
          const data = await res.json()
          setData(data)
        }
        fetchPosts()
      }, []);
    
      if(!nasaData) return 
      (
        <div className="loader"></div>
      )
    
  return (
    
     <div id="imageOfTheDay" className={`container ${styles.introContainer}`}>
       <div className={styles.column1}>
           <Image
            src={nasaData.url}
            alt={nasaData.title}
            width={480}
            height={360}
            priority
        />
      </div>
      <div className={styles.column2}>
        <h2>Photo of the day:</h2>
        <h3>{nasaData.title}</h3>
        <p>{nasaData.explanation}</p>
        <a className="button primaryButton" href="https://apod.nasa.gov/apod/astropix.html" target="_blank">Learn more</a>
      </div>
    </div>
  );
}
