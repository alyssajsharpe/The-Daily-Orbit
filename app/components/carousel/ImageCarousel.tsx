'use client';

// import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image, { StaticImageData } from "next/image";
import styles from './styles.module.scss';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function ImageCarousel(){

  return (
    <div className={`container ${styles.carouselContainer}`}>
        {/* <Splide
            options={{
                type: 'loop',
                drag: false,
                arrows: false,
                pagination: false,
                autoScroll: {
                speed: 1, // lower = slower
                pauseOnHover: true,
                pauseOnFocus: false,
                },
            }}
            extensions={{ AutoScroll }}
            >
            <SplideSlide>Slide 1</SplideSlide>
            <SplideSlide>Slide 2</SplideSlide>
            <SplideSlide>Slide 3</SplideSlide>
        </Splide> */}
    </div>
  );
}
