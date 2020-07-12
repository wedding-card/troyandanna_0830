import React from 'react';
import styled from 'styled-components';

const S = {};
S.GoogleMapCanvas = styled.div`
  overflow:hidden;
  background:none!important;
  height: 220px;
  width: 100%;
`;
S.Iframe = styled.iframe`
  height: 220px;
  width: 100%;
`;
const GoogleMap = () => {
  return (
    <S.GoogleMapCanvas>
      <S.Iframe
          src="https://maps.google.com/maps?q=%EC%84%9C%EC%B4%88%EA%B8%88%EC%9C%B5%EC%97%B0%EC%88%98%EC%9B%90&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
      />
    </S.GoogleMapCanvas>
  );
};

export default GoogleMap;
