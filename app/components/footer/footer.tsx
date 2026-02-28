'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from './styles.module.scss';
import logo from "../../../public/images/logo.png";
import nasaLogo from "../../../public/images/nasa-logo.svg";
export default function Footer() {
   
  return (
    <footer id="footer" className={styles.footer}>
        <div className={styles.column1}>
             <Image 
                src={logo}
                    alt="The Daily Orbit Logo"
                    width={150}
                    height={150}
                    priority
            />
            <p>Created by Alyssa Sharpe 2026</p>
            <p>Special thanks to NASA for their insightful APIs and images.</p>
        </div>
         <div className={styles.column2}>
            <a href="#intro">About the project</a>
            <a href="#imageOfTheDay">Photo of the day</a>
             <a href="#asteroids">Near-Earth Asteroids</a>
        </div>
         <div className={styles.column3}>
            <p>National Aeronautic and  <br /> Space Administration</p>
            <Image 
                src={nasaLogo}
                    alt="NASA Logo"
                    width={150}
                    height={150}
                priority
            />
        </div>
    </footer>
  );
}
