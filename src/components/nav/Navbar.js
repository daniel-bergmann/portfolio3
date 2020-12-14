import React from 'react';
import styled from 'styled-components';

// Components
import Burger from './Burger.js';


const Nav = styled.nav`
  width: 100%;
  height: 45px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
    ////////////////////////////
    // for small screens
  @media (max-width: 768px) {
  }
`;

const Navbar = () => {
  return (
    <Nav>
    <Burger />
    </Nav>
  )
}

export default Navbar