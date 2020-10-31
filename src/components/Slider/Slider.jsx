import React, { Component } from "react";
import Slider from "react-slick";

/*
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
*/

import './Slider.css';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <button
            className="slick-button-next"
            onClick={onClick}
        >
            <span className="slider-button-iconNext"></span>
        </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="slick-button-previous"
        onClick={onClick}
        >
            <span className="slider-button-iconPrevious"></span>
           
        </button>
    );
  }

  export default class Slide extends Component {
render() {
    const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
        <div className="slider-movie">
            <img 
            src="https://image.tmdb.org/t/p/w440_and_h660_face/fkqJJDb4u9rEyJu8Jm8H1P2mux4.jpg"
            className="slider-movie-img"
            alt="img"
            />
            <h3 className="slider-movie-title">Slide {num}</h3>
            <p className="slider-movie-year">2019</p>
        </div>
    ));
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 1000,
        width: 200,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <section className="container">
            <h1 className="top10-title">Les 10 meilleurs films</h1>
            <div className="slider">
            <Slider {...settings}>
                {renderSlides()}
            </Slider>
            </div>
        </section>
    )
}
}