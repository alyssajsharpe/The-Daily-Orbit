'use client'
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/Intro";
import ImageBanner from './components/banner/ImageBanner';
import PhotoOfTheDay from "./components/photoOfTheDay/PhotoOfTheDay";
import imageBanner1Image from "../public/images/space2.jpg";
import imageBanner2Image from "../public/images/space.jpg";
import Asteroid from './components/asteroid/Asteroid';
import ImageCarousel from './components/carousel/ImageCarousel';
import Footer from "./components/footer/footer";


export default function Home() {

  return (
    <div>
       <Hero/>
       <Intro />
       <ImageBanner title="Everything begins here" img={imageBanner1Image}/>
        <PhotoOfTheDay/> 
        <ImageBanner title="Where Worlds Collide" img={imageBanner2Image}/>
        <Asteroid/> 
         <ImageCarousel/> 
        <Footer/>
    </div>
  );
}
