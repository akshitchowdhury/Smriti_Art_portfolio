import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GalleryShow.css';
import ITransition from './ITransition';

const GalleryShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    '../../../assets/artDump/Concept/cd_main.jpg',
    '../../../assets/artDump/Concept/c_main.jpg',
    '../../../assets/artDump/Concept/cb_main.jpg',
    '../../../assets/artDump/Concept/cc_main.jpg',
  ];

  return (
    <>
      <div className="gallery-main-container">
        <div className="glassPic"></div>
        <div className="glass-overlay"></div>
      </div>

      <div className="gallery-show-container relative">
        <div className="slideshow">
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide"></div>
        </div>

        {/* Absolute positioning of ITransition */}
        <div className="ITransition absolute inset-0">
          <ITransition />
        </div>
      </div>
    </>
  );
};

export default GalleryShow;
