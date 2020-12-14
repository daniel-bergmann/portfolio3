import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Ul = styled.ul`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,700;1,300&display=swap');
  font-family: 'Ubuntu', sans-serif;
  width: 100%;
  height: 40%;
  padding: 0 30px;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-decoration: none;
  list-style: none;
  li {
    padding: 18px 20px;
    font-size: 20px;
    color: #333;
      &:hover {
        color: coral;
      }
  }
    ////////////////////////////
    // for small screens
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
     color: #333;
     font-size: 20px;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/" style={{ textDecoration: 'none' }}><li>Portfolio</li></Link>
      <Link to="/" style={{ textDecoration: 'none' }}><li>Articles</li></Link>
      <Link to="/" style={{ textDecoration: 'none' }}><li>Vitae</li></Link>
      <Link to="/" style={{ textDecoration: 'none' }}><li>Arcade</li></Link>
    </Ul>
  )
}

export default RightNav