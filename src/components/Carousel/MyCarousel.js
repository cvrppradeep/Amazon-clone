import React from 'react'
import Banner from "../../images/banner/banner.jpg";
import Banner2 from "../../images/banner/banner2.jpg";
import Banner3 from "../../images/banner/banner3.jpg";
import Banner4 from "../../images/banner/banner4.jpg";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "../Carousel/Carousel-style.css";

function MyCarousel() {
  return (
    <div className="slide">
      <AliceCarousel autoPlay autoPlayInterval="2000" alt="">
      <img src={Banner} className="sliderimg" alt=""/>
      <img src={Banner2} className="sliderimg" alt=""/>
      <img src={Banner3} className="sliderimg" alt=""/>
      <img src={Banner4} className="sliderimg" alt=""/>
</AliceCarousel>
    </div>
  )
}

export default MyCarousel
