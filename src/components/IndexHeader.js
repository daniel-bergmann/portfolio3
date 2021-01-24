import React from 'react';
import { Link } from 'gatsby'

import {
  FaMedium,
  FaGithubSquare,
  FaLinkedin,
  FaDribbbleSquare,
} from 'react-icons/fa';

import {Header} from './styles/IndexHeader'

// markup
const IndexHeader = () => {
  return (
    <Header>
      <div>
        <h1>
          Hello. I'm Daniel Bergmann. This is my portfolio with selected
          software I've written.
        </h1>
      </div>

      <div className='pick'>
        <div className='social'>
          <a
            style={{ color: 'inherit' }}
            rel='noreferrer'
            target='_blank'
            href='https://www.linkedin.com/in/daniel-bergmann-1449bb1b1/'
          >
            <FaLinkedin className='social-item' />
          </a>
          <a
            style={{ color: 'inherit' }}
            rel='noreferrer'
            target='_blank'
            href='https://github.com/daniel-bergmann'
          >
            <FaGithubSquare className='social-item' />
          </a>
          <Link style={{ color: 'inherit' }} to='/blog'>
            <FaMedium className='social-item' />
          </Link>
        </div>
        <h2>Portfolio includes</h2>
        <p>Professional Projects</p>
        <div className='work'>
          <h3>
            I have mainly worked in education creating a langauge learning
            platform and some other websites for the Northern Lights Confucius
            Institute.
          </h3>
          <p style={{textAlign: 'center'}}>Other Projects</p>
          <h3>
            I really enjoy programming so I have a bunch of sweet projects to
            show. I also have a blog that you can check out. Enjoy!
          </h3>
        </div>
      </div>
    </Header>
  );
};

export default IndexHeader;
