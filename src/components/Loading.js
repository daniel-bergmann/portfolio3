import React from 'react';
import LoadingAnimation from '../img/circles-menu-1.gif';
import styled from 'styled-components';

const LoadingStyling = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;

  img {
    height: 10%;
    width: 10%;
  }
`;

function Loading() {
  return (
    <LoadingStyling>
      <img src={LoadingAnimation} alt='' />
    </LoadingStyling>
  );
}

export default Loading;
