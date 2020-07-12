import React from 'react';
import styled from 'styled-components';
import WeddingInformation from "../commons/WeddingInformation";

const S = {};
S.InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 73px;
  padding-bottom: 34px;
`;

S.Title = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Playfair Display', serif;
  font-size: 17px;
  color: #585151;
`;

S.TitleDecoration = styled.div`
  border: 0.5px solid #585151;
  width: 23px;
  height: 0px;
  margin: 0 14px;
`;

S.Message = styled.div`
  padding-top: ${({top}) => top ? top : 26}px;
  width: 240px;
  text-align: center;
  font-size: 13px;
  color: #585151;
  line-height: 25px;
  white-space: break-spaces;
`;

S.FamilyInfo = styled.div`
  padding-top: 33px;
`;
S.FamilyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33px;  
`;
S.Family = styled.div`
  font-size: 15px;
`;
S.Name = styled.div`
  padding-left: 17px;
  font-size: 17px;
  font-weight: bold;
`;
S.InformationWrapper = styled.div`
  padding-top: 42px;
`;

const Invitation = () => {
  const message = `두 사람이 사랑으로 만나
진실과 이해로써 하나를 이루려 합니다.
이 두사람을 지성으로 아끼고 돌봐주신
여러분들을 모시고 서약을 맺고자 하오니
바쁘신 가운데 두 사람의 앞날을
가까이에서 축복해 주시면 고맙겠습니다.`;
  const message2 = `식장의 사정으로 화환은 받지 않습니다.
좋은 마음만 감사히 받겠습니다.
`;
  return (
    <S.InvitationWrapper>
      <S.Title>
        <S.TitleDecoration />INVITATION<S.TitleDecoration />
      </S.Title>

      <S.Message>{message}</S.Message>

      <S.FamilyInfo>
        <S.FamilyWrapper>
          <S.Family>최용호 ㆍ 황해순 의 장남</S.Family>
          <S.Name>재근</S.Name>
        </S.FamilyWrapper>
        <S.FamilyWrapper>
          <S.Family>김석종 ㆍ 조정애 의 장녀</S.Family>
          <S.Name>초록</S.Name>
        </S.FamilyWrapper>
      </S.FamilyInfo>
      <S.InformationWrapper>
        <WeddingInformation />
      </S.InformationWrapper>

      <S.Message top={34}>{message2}</S.Message>
    </S.InvitationWrapper>
  );
};

export default Invitation;
