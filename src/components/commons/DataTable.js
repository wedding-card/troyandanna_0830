import React from 'react';
import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
  padding-top: 16px;
  padding-left: 22px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  min-height: 20px;
`;

S.Key = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  width: 50px;
  white-space: pre-wrap;
`;

S.Value = styled.div`
  padding-left: 12px;
  line-height: 20px;
  font-size: 12px;
  white-space: break-spaces;
`;

const DataTable = ({name, value}) => {
  return (
    <S.Wrapper>
      <S.Key>{name}</S.Key>
      <S.Value>{value}</S.Value>
    </S.Wrapper>
  );
};

export default DataTable;
