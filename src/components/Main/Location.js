import React from 'react';
import styled from "styled-components";
import GoogleMap from "../commons/GoogleMap";
import DataTable from "../commons/DataTable";

const S = {};
S.Wrapper = styled.div`
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.Header = styled.div`
  font-size: 19px;
  font-weight: bold;
  color: #585151;
  text-align: center;
`;

S.GoogleMapWrapper = styled.div`
  padding: 36px 24px 0 24px;
`;
S.Address = styled.div`
  padding: 24px 53px 0 53px;
  font-size: 13px;
  line-height: 20px;
  color: #585151;
  text-align: center;
`;
S.Transportation = styled.div`
`;
const Location = () => {
  const address = `서울 서초구 사임당로23길 27 서초금융연수원
(서초동 1641-10)`;
  const data = [
      { name: '셔틀버스', value: `교대역 5번 출구 (14-17시까지 운행, 15분 간격)`},
      { name: '지 하 철', value: `교대역(2, 3호선) 1번 출구 도보 10분
강남역(2호선, 신분당선) 8번 출구 도보 15분`},
    { name: `버     스`, value: `서초 03 : 삼성레포츠 정류장 하차 후 도보 2분
서초 03, 서초 21, 144, 350 : 
창신교회/서리풀노리학교 정류장 하차 후 도보 3분`},
    { name: '택     시', value: `교대역, 강남역에서 기본요금`},
    { name: '자 가 용', value: `내비게이션에 '삼성금융캠퍼스' 검색
건물 내 주차장 이용 가능(150대 수용, 2시간 무료)`},
  ];

  return (
    <S.Wrapper>
      <S.Header>오시는 길</S.Header>
      <S.GoogleMapWrapper>
        <GoogleMap />
      </S.GoogleMapWrapper>
      <S.Address>{address}</S.Address>
      <S.Transportation>
        {
          data.map(({name, value}) => (
            <DataTable name={name} value={value} key={name} />
          ))
        }
      </S.Transportation>
    </S.Wrapper>
  );
};

export default Location;
