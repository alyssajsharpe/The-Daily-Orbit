// https://api.nasa.gov/neo/rest/v1/feed?start_date=2026-02-26&end_date=2026-02-026&api_key=DEMO_KEY

'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from './styles.module.scss';

interface Asteroids {
  date: string,
  explanation: string,
  hdurl: string,
  title: string,
  url: string,
  element_count: number;
}


interface Asteroid {
  id: string;
  name: string;
  nasa_jpl_url: string;
  neo_reference_id: string;
  absolute_magnitude_h: number,
  close_approach_data: [];
  estimated_diameter: [];
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
  links: [];

}

export default function Asteroid() {

    const [nasaData, setData] = useState<Asteroids | null>(null);
    const [asteroids, setAsteroids] = useState<Asteroid | null>(null);
    const [formattedDate, setFormattedDate] = useState<String>("");

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; 
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;

    const allAsteroids = asteroids
    ? Object.entries(asteroids)
      .flatMap(([date, asteroidArray]) =>
        asteroidArray.map((asteroid: Asteroid) => ({
          date,
          ...asteroid,
        }))
      )
  : [];
    const currentAsteroids = allAsteroids.slice(indexOfFirst, indexOfLast);
        
    // On first load, load the last 4 asteroids
      useEffect(() => {
        async function fetchPosts() {
          const formattedDates = new Date().toISOString().split('T')[0];
          setFormattedDate(formattedDates);

          const apiKey = "qQmkyQjZ6MW6njCSmdeFz5R6gv8iiJhIFVevzy6B";
          const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${formattedDate}&end_date=${formattedDate}&api_key=${apiKey}`)
          const data = await res.json()
          setData(data);
          setAsteroids(data.near_earth_objects);
        }
        fetchPosts()
      }, []);

    // When user updates the dates, make a new api call
      if(!nasaData) return 
      ( <div className="loader"></div>)
    
  return (
    <div id="asteroids" className={`container ${styles.introContainer}`}>
        <div className={styles.column1}>
            <h2>Near-Earth Asteroids</h2>
            <h4>{nasaData.element_count} asteroids found within {formattedDate} </h4>
            <p>From tiny space rocks to near-Earth giants, see the asteroids approaching our planet. Each entry shows essential details and a direct NASA link for further research.</p>
        </div>
       <div className={styles.column2}>
            <table className={styles.asteroidTable}>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Magnitude</th>
                    <th>Hazardous</th>
                    <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                      {currentAsteroids.map((asteroid) => (
                        <tr key={asteroid.id}>
                            <td>{asteroid.date}</td>
                            <td>{asteroid.name}</td>
                            <td>{asteroid.absolute_magnitude_h}</td>
                            <td>{asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}</td>
                            <td>
                            <a href={asteroid.nasa_jpl_url} target="_blank" rel="noreferrer">
                                More Info
                            </a>
                            </td>
                        </tr>
                        ))}
                </tbody>
            </table>
            <div className={styles.pagination}>
                {Array.from({ length: Math.ceil(allAsteroids.length / itemsPerPage) }, (_, i) => (
                    <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={currentPage === i + 1 ? "active" : ""}
                    >
                    {i + 1}
                    </button>
                ))}
                </div>
        </div>
        <div className={`${styles.buttonWrapper}`}>
            <a className={`${styles.button} button primaryButton`} href="https://apod.nasa.gov/apod/astropix.html" target="_blank">Learn more</a>
        </div>
    </div>
  );
}
