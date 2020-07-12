import React from 'react';
import styled from "styled-components";
import WeddingDate from "../commons/WeddingDate";
import WeddingInformation from "../commons/WeddingInformation";

const S = {};
S.Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding-top: 64px;
 padding-bottom: 80px;
`;

S.Message = styled.div`
  padding-top: ${({top}) => top ? top : 26}px;
  width: 240px;
  text-align: center;
  font-size: 13px;
  color: #585151;
  line-height: 26px;
  white-space: break-spaces;
`;

S.Date = styled.div`
  padding-top: 40px;
`;
S.InfoWrapper = styled.div`
  padding-top: 48px;
`;
const message = `두 사람 눈부신
새로운 시작을
함께 축복해 주세요`;

const message2 = 'save the date';

const LastPage = () => {
  return (
      <S.Wrapper>
        <S.Message>{message}</S.Message>
        <S.Message top={36}>{message2}</S.Message>
        <S.Date>
          <WeddingDate month={"08"} day={"30"}/>
        </S.Date>
        <S.InfoWrapper>
          <WeddingInformation />
        </S.InfoWrapper>
      </S.Wrapper>
  );
};

export default LastPage;
