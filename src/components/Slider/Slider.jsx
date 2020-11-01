import React from "react";
import Slider from "react-slick";
import SliderArrow from "../SliderArrow/SliderArrow";

/*
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
*/

import './Slider.css';

function Slide(props) {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        speed: 1000,
        width: 200,
        nextArrow: <SliderArrow classname="slick-button-next" icon="slider-button-iconNext" />,
        prevArrow: <SliderArrow classname="slick-button-previous" icon="slider-button-iconPrevious" />
    };
    return (
        <Slider {...settings}>
            {props.children}
        </Slider>
    )
}

export default Slide;