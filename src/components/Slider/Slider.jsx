/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import SliderArrow from '../SliderArrow/SliderArrow';
import './Slider.css';

function Slide(childn) {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 1000,
    width: 200,
    nextArrow: <SliderArrow classname="slick-button-next" icon="slider-button-iconNext" />,
    prevArrow: <SliderArrow classname="slick-button-previous" icon="slider-button-iconPrevious" />,
  };

  return (
    <Slider {...settings}>
      {childn}
    </Slider>
  );
}

export default Slide;
