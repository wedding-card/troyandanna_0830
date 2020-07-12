import React, {useState} from 'react';
import styled from 'styled-components';
import Image1 from "../../images/1.jpg";
import Image2 from "../../images/2.jpg";
import Image3 from "../../images/3.jpg";
import Image4 from "../../images/4.jpg";
import Image5 from "../../images/5.jpg";
import Image6 from "../../images/6.jpg";
import Image7 from "../../images/7.jpg";
import ImageSlidePopup from "../commons/ImageSlidePopup";

const S = {};
S.PhotoWrapper = styled.div`
  padding-top: 39px;
  width: 360px;
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
  margin-left: 60px;
  display: flex;
  width: calc(100vw - 60px);
  overflow: scroll;
  scroll-snap-type: x proximity;
  scroll-padding: -12px;
  z-index: 1;
`;

S.Image = styled.img`
  width: 240px;
  height: 362px;
  padding-left: 10px;
  scroll-snap-align: start;
`;

const Photo = () => {
  const [open, setOpen] = useState(false);

  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
  ];

  return (
    <S.PhotoWrapper>
      <S.OurPhoro>our photo</S.OurPhoro>
      <S.PhotoList onClick={() => setOpen(true)}>
          <S.Image src={Image1} />
          <S.Image src={Image2} />
          <S.Image src={Image3} />
          <S.Image src={Image4} />
          <S.Image src={Image5} />
          <S.Image src={Image6} />
          <S.Image src={Image7} />
      </S.PhotoList>
      <ImageSlidePopup
        open={open}
        onClose={() => setOpen(false)}
        images={images}
      />
    </S.PhotoWrapper>
  );
};

export default Photo;
