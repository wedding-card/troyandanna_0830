import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ArrowLeft from '../../assets/keyboard_arrow_left.svg';
import ArrowRight from '../../assets/keyboard_arrow_right.svg';
import styled from "styled-components";

const MyCarousel = styled(Carousel)`
  & .slide {
    background-color: transparent;
  }
`;

const ImageCarousel = ({children, centerSlidePercentage=96, width="360px"}) => {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
  };
  return (
    <MyCarousel
        showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      autoPlay={false}
      useKeyboardArrows
      centerMode
      centerSlidePercentage={centerSlidePercentage}
      width={width}
      renderArrowPrev={(onClickHandler, hasPrev) => hasPrev && ( <img src={ArrowLeft} onClick={onClickHandler} style={{...arrowStyles, left: 15}} /> )}
      renderArrowNext={(onClickHandler, hasNext) => hasNext && ( <img src={ArrowRight} onClick={onClickHandler} style={{...arrowStyles, right: 15}} /> )}
    >
      {children}
    </MyCarousel>
  );
};

export default ImageCarousel;
