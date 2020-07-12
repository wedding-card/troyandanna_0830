import React from 'react';

import NextImage from './assets/arrow.svg';
import DownArrpwImage from './assets/down-arrow.svg';

import Main from "./components/Main/Main";
import styled from 'styled-components';
import Invitation from "./components/Main/Invitation";
import Photo from "./components/Main/Photo";
import CongratulatoryMessage from "./components/Main/CongratulatoryMessage";
import Location from "./components/Main/Location";
import LastPage from "./components/Main/LastPage";

const S = {};
S.Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

S.Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  overflow: hidden;
`;

S.Next = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #9e9999;
  font-size: 9px;
`;
function App() {
  return (
    <S.Wrapper>
      <S.Content>
        <Main />

        <S.Next>
          <img src={NextImage} width={24} height={24}/>
        </S.Next>

        <Invitation />

        <S.Next>◆</S.Next>
        <Photo />

        <CongratulatoryMessage />

        <Location />

        <S.Next>
          <img src={DownArrpwImage} width={18} height={36} />
        </S.Next>

        <LastPage />
      </S.Content>
    </S.Wrapper>
  );
}

export default App;
