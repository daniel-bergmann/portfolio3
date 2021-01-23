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
          <FaLinkedin className='social-item' />
          <FaDribbbleSquare className='social-item' />
          <FaGithubSquare className='social-item' />
          <Link to="/blog">
            <FaMedium className='social-item' />
          </Link>
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

export default IndexHeader;
