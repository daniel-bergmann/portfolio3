import React from 'react';
import styled from 'styled-components';

export default function Podcast({ cn }) {
  return (
    <Centered>
      <h1>{!cn ? 'Podcast' : '播客'}</h1>
      <iframe
        src='https://open.spotify.com/embed-podcast/show/4K5o4BdRIgyI4sQoE8Li7A'
        width='100%'
        height='232'
        frameborder='0'
        allowtransparency='true'
        allow='encrypted-media'
      ></iframe>    
    </Centered>
  );
}

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  height: 80vh;
  h1 {
    margin-bottom: 20px;
  }
`;
