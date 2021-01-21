import * as React from 'react';
import styled from 'styled-components';

import {
  FaMedium,
  FaGithubSquare,
  FaLinkedin,
  FaDribbbleSquare,
} from 'react-icons/fa';

// Styles
const Header = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');
  font-family: 'Raleway', sans-serif;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10%;

  max-width: auto;
  h1 {
    font-size: 50px;
    padding: 5px;
    font-weight: 200;
  }

  .pick {
    display: flex;
    align-items: center;
    flex-direction: column;
    .social {
      font-size: 30px;
      .social-item{
        margin: 5px;
      }
    }
    .work {
      padding: 10px;
    }
    h2 {
      font-size: 40px;
      padding: 20px;
    }
    h3 {
      padding: 5px;
    }
  }

  ////////////////////////////
  // for large
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }
`;

// markup
const IndexPage = () => {
  return (
    <Header>
      <div>
        <h1>
          Hello. I'm Daniel Bergmann. This is my development portfolio with
          selected software I've written.
        </h1>
      </div>

      <div className='pick'>
        <div className='social'>
          <FaLinkedin className='social-item' />
          <FaDribbbleSquare className='social-item' />
          <FaGithubSquare className='social-item' />
          <FaMedium className='social-item' />
        </div>
        <h2>Portfolio includes</h2>
        <p>Professional Projects</p>
        <div className='work'>
          <h3>Konfusius.is</h3>
          <h3>Kinverska.is</h3>
        </div>
        <p>Personal Projects</p>
        <div className='work'>
          <h3>eitthvað</h3>
          <h3>eitthvað</h3>
        </div>
      </div>
    </Header>
  );
};

export default IndexPage;
