import React from 'react';
import styled from 'styled-components';

const S = {};
S.WeddingDateWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 53px;
  font-family: 'Playfair Display', serif;
  color: #585151;
  justify-content: center;
`;

S.Month = styled.div`
  font-size: 40px;
  justify-content: flex-start;
`;
S.Slash = styled.div`
  font-size: 20px;
  padding: 13px 12px;
`;
S.Day = styled.div`
  font-size: 40px;
`;
function WeddingDate({ month, day }) {
  return (
    <S.WeddingDateWrapper>
      <S.Month>{month}</S.Month>
      <S.Slash>/</S.Slash>
      <S.Day>{day}</S.Day>
    </S.WeddingDateWrapper>
  );
}

export default WeddingDate;
