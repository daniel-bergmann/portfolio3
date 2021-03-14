import React from 'react';
import styled from 'styled-components';
import { GiPlainArrow } from 'react-icons/gi';

export default function Welcome({cn}) {
  return (
    <Centered>
      <h1>{!cn ? 'Welcome to my porfolio' : '欢迎您'}</h1>
      <h3>{!cn ? 'have a look' : '看一看'}</h3>
      <Arrow>
        <GiPlainArrow />
      </Arrow>
    </Centered>
  );
}

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const Arrow = styled.div`
    font-size: 60px;
`
