import React from 'react';
import styled from "styled-components";

const S = {};
S.DetailDate = styled.div`
  padding-top: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 13px;
  color: #585151;
`;

S.WeddingHall = styled.div`
  padding-top: 12px;
  text-align: center;
  font-size: 13px;
  color: #585151;
`;
const WeddingInformation = () => {
  const detailDate = '2020년 8월 30일 일요일 오후 3시';
  const weddingHall = '삼성금융캠퍼스 지하 2층 비전홀';
  return (
    <>
      <S.DetailDate>{detailDate}</S.DetailDate>
      <S.WeddingHall>{weddingHall}</S.WeddingHall>
    </>
  );
};

WeddingInformation.propTypes = {

};

export default WeddingInformation;
