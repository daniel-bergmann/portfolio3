import React from 'react';
import styled from 'styled-components';
import {
  FaGithubSquare,
  FaSpotify,
  FaMedium,
  FaLinkedin,
} from 'react-icons/fa';
// components
import { about } from './AboutData';

export default function Nav({ cn, changeLang }) {
  return (
    <>
      <LangButton>
        <button onClick={changeLang}>{!cn ? '中文' : 'English'}</button>
      </LangButton>
      <A>
        {/* <Darkmode /> */}
        {about.map((i) => {
          return (
            <TextContainer key={i.id}>
              <img src={i.img} alt='' />
              <div className='text'>
                <h2>{i.name}</h2>
                <p>{!cn ? i.aboutEn : i.aboutCn}</p>
              </div>
              <div className='links'>
                <a target='_blank' href='https://github.com/daniel-bergmann'>
                  <FaGithubSquare />
                </a>

                <a
                  target='_blank'
                  href='https://open.spotify.com/show/4K5o4BdRIgyI4sQoE8Li7A?si=RHggwxdORYmBlBbZXPl18Q'
                >
                  <FaSpotify />
                </a>

                <a target='_blank' href='https://danielbergmannn.medium.com/'>
                  <FaMedium />
                </a>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/daniel-bergmann-1449bb1b1/'
                >
                  <FaLinkedin />
                </a>
              </div>
            </TextContainer>
          );
        })}
      </A>
    </>
  );
}

const LangButton = styled.div`
  display: flex;
  button,
  input[type='submit'],
  input[type='reset'] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    margin: 0px auto;
    margin-top: 20px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const A = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    height: 50%;
    width: 50%;
    margin: 0 auto;
    border-radius: 5%;
  }
  .text {
    h2 {
      padding: 10px;
      text-align: center;
    }
    p {
      text-align: center;
      padding: 10px;
    }
  }

  .links {
    display: flex;
    justify-content: space-around;
    margin: 10px;
    a {
      color: #333;
      font-size: 30px;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
