'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from './styles.module.scss';
import logo from "../../../public/images/logo.png"
export default function Hero() {
   const heroRef = useRef<HTMLDivElement | null>(null);

   // Fade hero on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrollY = window.scrollY;
      const fadeEnd = window.innerHeight * 0.8;

      let opacity = 1 - scrollY / fadeEnd;
      opacity = Math.max(0, Math.min(1, opacity));

      heroRef.current.style.opacity = opacity.toString();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={heroRef} className={styles.hero}>
      <Image 
        src={logo}
            alt="The Daily Orbit Logo"
            width={400}
            height={400}
            priority
      />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className={styles.overlay}></div>
    </div>
  );
}
