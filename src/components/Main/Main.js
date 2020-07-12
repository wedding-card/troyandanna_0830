import React from 'react';
import WeddingDate from "../commons/WeddingDate";
import styled from 'styled-components';
import MainImage from '../../images/main.jpg';
import WeddingInformation from "../commons/WeddingInformation";

const S = {};
S.MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 38px;
  padding-bottom: 33px;
`;

S.DateWrapper = styled.div`
  padding-top: 38px;
`;

S.Name = styled.div`
  padding-top: 20px;
  text-align: center;
  font-size: 15px;
  color: #585151;
`;

S.Message = styled.div`
  font-size: 13px;
  color: #9e9999;
  padding-top: 10px;
  text-align: center;
`;

S.ImageWrapper = styled.div`
  padding-top: 26px;
  display: flex;
  justify-content: center;
`;

function Main() {
  const groom = '최재근';
  const bride = '김초록';
  const message = '결혼합니다';

  return (
    <S.MainWrapper>
      <WeddingDate month={"08"} day={"30"}/>
      <S.Name>{groom} ㆍ {bride}</S.Name>
      <S.Message>{message}</S.Message>
      <S.ImageWrapper>
        <img src={MainImage} width={304} height={459} />
      </S.ImageWrapper>
      <WeddingInformation />
    </S.MainWrapper>
  );
}

export default Main;
