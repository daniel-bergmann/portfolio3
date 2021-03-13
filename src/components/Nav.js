import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid-random';
// components
import Darkmode from './Darkmode';

const data = [
  {
    title: 'Daniel Bergmann',
    intro: 'Daniel Bergmann is a developer located in Reykjavik Iceland.',
    id: uuid(),
  },
];

export default function Nav() {
  return (
    <NavContainer>
      {/* <Darkmode /> */}
      {data.map((i) => {
        return (
          <TextContainer key={i.id}>
            <h2>{i.title}</h2>
            <p>{i.intro}</p>
          </TextContainer>
        );
      })}
    </NavContainer>
  );
}

const NavContainer = styled.div``;
const TextContainer = styled.div``;
