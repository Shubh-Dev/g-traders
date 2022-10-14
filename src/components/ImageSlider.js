import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: '100%',
    position: 'relative',
  };

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${slides[currentIndex].url})`,
    marginTop: '5vh',
  };

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    cursor: 'pointer',
    zIndex: 1,
  };

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    cursor: 'pointer',
    zIndex: 1,
  };

  const dotContainerStyles = {
    display: 'flex',
    justifyContent: 'center',

  };

  const dotStyles = {
    margin: '0, 3px',
    padding: '6px',
    cursor: 'pointer',
    fontSize: '30px',
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>←</div>
      <div style={rightArrowStyles} onClick={goToNext}>→</div>
      <div style={slideStyles} />
      <div style={dotContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div key={uuidv4()} style={dotStyles} onClick={() => goToSlide(slideIndex)}>•</div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,

};
