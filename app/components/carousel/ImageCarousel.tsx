'use client';

import Image, { StaticImageData } from "next/image";
import styles from './styles.module.scss';
import img from "../../../public/images/space.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../public/images/space.jpg";
import img2 from "../../../public/images/space2.jpg";
import img3 from "../../../public/images/space3.jpg";
import img4 from "../../../public/images/space4.jpg";
import img5 from "../../../public/images/space5.jpg";
import img6 from "../../../public/images/space6.jpg";
import img7 from "../../../public/images/space7.jpg";
import img8 from "../../../public/images/space8.jpg";


export default function ImageCarousel(){
     const settings = { 
       className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              arrows: false,
            },
          },
        ],
  };

  return (
    <div className={`container ${styles.carouselContainer}`}>
      <Slider {...settings}>
        <div className={styles.wrapper}>
          <Image src={img1} alt="Slide 1" height={300} width={500} objectFit="cover"/>
        </div>
        <div className={styles.wrapper}>
          <Image src={img2} alt="Slide 2" height={300} width={500} objectFit="cover"/>
        </div>
        <div className={styles.wrapper}>
          <Image src={img3} alt="Slide 3" height={300} width={500} objectFit="cover"/>
        </div>
        <div className={styles.wrapper}> 
          <Image src={img4} alt="Slide 4" height={300} width={500} objectFit="cover"/>
        </div>
        <div className={styles.wrapper}>
          <Image src={img5} alt="Slide 5" height={300} width={500} objectFit="cover"/>
        </div>
        <div className={styles.wrapper}>
          <Image src={img6} alt="Slide 6" height={300} width={500} objectFit="cover"/>
        </div>
        <div className={styles.wrapper}>
          <Image src={img7} alt="Slide 7" height={300} width={500} objectFit="cover"/>
        </div>
        <div className={styles.wrapper}>
          <Image src={img8} alt="Slide 8" height={300} width={500} objectFit="cover"/>
        </div>
      </Slider>
    </div>
  );
}
