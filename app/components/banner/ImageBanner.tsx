'use client'

import Image, { StaticImageData } from "next/image";
import styles from './styles.module.scss';
import { JSX } from "react";

export default function ImageBanner({
  title, 
  img
} : {
  title: string,
  img: StaticImageData

}): JSX.Element {

  return (
    <div className={`container ${styles.bannerContainer}`}>
        <Image
            src={img}
            alt="Banner image with title"
            width={480}
            height={400}
            priority
        />
        <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className="text-center">{title}</h2>
      </div>
    </div>
  );
}
