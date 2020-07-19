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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y proximity;
  width: 100vw;
  height: 100%;
`;

S.Content = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  width: 100%;
`;

S.Next = styled.div`
  font-size: 9px;
  color: #9e9999;
  width: 100%;
  display: flex;
  justify-content: center;
`;
function App() {
  return (
    <S.Wrapper>
      <S.Content>
        <Main />
        <S.Next onClick={() => { window.scrollTo({
          top: 786,
          left: 0,
          behavior: 'smooth'
        }) }}>
          <img src={NextImage} width={24} height={24}/>
        </S.Next>
      </S.Content>
      <S.Content>
        <Invitation />

        <S.Next>◆</S.Next>
      </S.Content>
      <S.Content>
        <Photo />
      </S.Content>
      <S.Content>
        <CongratulatoryMessage />
      </S.Content>
      <S.Content>
        <Location />
        <S.Next>
          <img src={DownArrpwImage} width={18} height={36} />
        </S.Next>
      </S.Content>
      <S.Content>
        <LastPage />
      </S.Content>
    </S.Wrapper>
  );
}

export default App;
