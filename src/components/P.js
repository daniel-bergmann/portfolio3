import React from 'react';
import styled from 'styled-components';

// img
import Cat from '../img/circles-menu-1.gif';

export default function P() {
  return (
    <div>
      <Patience>
        <h1>I'll be right back amigos.</h1>
        <img src={Cat} alt='rockin cat' />
      </Patience>
    </div>
  );
}
const Patience = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: #333;
  }
  img {
    height: 200px;
    width: auto;
  }
`;
