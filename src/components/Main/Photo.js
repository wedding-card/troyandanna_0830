import React, {useState} from 'react';
import styled from 'styled-components';
import Image1 from "../../images/1.jpg";
import Image2 from "../../images/2.jpg";
import Image3 from "../../images/3.jpg";
import Image4 from "../../images/4.jpg";
import Image5 from "../../images/5.jpg";
import Image6 from "../../images/6.jpg";
import Image7 from "../../images/7.jpg";
import Image8 from "../../images/8.jpg";
import Image9 from "../../images/9.jpg";
import Image10 from "../../images/10.jpg";
import ImageSlidePopup from "../commons/ImageSlidePopup";

const S = {};
S.PhotoWrapper = styled.div`
  padding-top: 39px;
  width: 100vw;
  overflow: hidden;
`;

S.OurPhoro = styled.div`
  position: relative;
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  color: #796c62;
  line-height: 38.6px;
  width: 125px;
  padding-left: 20px;
  z-index: 2;
`;

S.PhotoList = styled.div`
  margin-top: -12px;
  display: flex;
  overflow: scroll;
  scroll-snap-type: x proximity;
  scroll-padding: -12px;
  z-index: 1;
`;

S.Image = styled.img`
  width: 70%;
  height: 56%;
  max-width: 360px;
  max-height: 540px;
  padding-left: 10px;
  scroll-snap-align: center;  
  &:first-child {
    padding-left: 15%;
  }
  &:last-child {
    padding-right: 15%;
  }
`;

const Photo = () => {
  const [open, setOpen] = useState(-1);

  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
  ];

  return (
    <S.PhotoWrapper>
      <S.OurPhoro>our photo</S.OurPhoro>
      <S.PhotoList>
        {
          images.map((image, index) => {
            return <S.Image src={image} onClick={() => setOpen(index)}/>
          })
        }
      </S.PhotoList>
      <ImageSlidePopup
        open={open}
        onClose={() => setOpen(-1)}
        images={images}
      />
    </S.PhotoWrapper>
  );
};

export default Photo;
