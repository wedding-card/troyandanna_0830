import React from 'react';
import Popup from "reactjs-popup";
import styled from 'styled-components';
import CloseImage from '../../assets/close.svg';
import ImageCarousel from "./ImageCarousel";

const S = {};
S.Wrapper = styled.div`
  position: relative;
  background-color: transparent;
  height: calc(100vh - 142px);
  width: 100%;
`;

S.CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: -56px;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

S.ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: calc(100vh - 142px);
`;

const ImageSlidePopup = ({images, open, onClose}) => {
  return (
    <Popup
        open={open >= 0}
        modal
        contentStyle={{
          border: 0,
          width: '360px',
          height: 'calc(100vh - 142px)',
          // margin: '76px auto 46px auto'
        }}
        onClose={onClose}
    >
      <S.Wrapper>
        <S.CloseButton onClick={onClose}>
          <img src={CloseImage} width={20} height={20} />
        </S.CloseButton>
        <div>
          <ImageCarousel selectedItem={open}>
            {
              images.map((image, index) => {
                return (
                  <S.ImageWrapper>
                    <img
                        src={image}
                        key={index}
                        width={360}
                        height={478}
                    />
                  </S.ImageWrapper>
                )
              })
            }
          </ImageCarousel>
        </div>
      </S.Wrapper>
    </Popup>
  );
};

export default ImageSlidePopup;
