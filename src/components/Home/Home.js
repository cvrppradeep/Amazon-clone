import React from 'react';
// import Banner from "../../images/banner/banner.jpg";
import Carousel from "../Carousel/MyCarousel"
import "../Home/Home-style.css";


function Home() {
    return (
        <div className="home">
           {/* <img className="home-img" src={Banner} alt=""/> */}
           <Carousel/>
        </div>
    )
}

export default Home

