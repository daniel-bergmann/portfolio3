import React from 'react'
import {Link} from 'gatsby'

import {NavStyling} from './styles/Nav'

function Nav() {
    return (
      <NavStyling>
        <Link style={{ textDecoration: 'none', color: '#333' }} to='/'>
          <h3 className='darkmode'>Home</h3>
        </Link>
        <Link style={{ textDecoration: 'none', color: '#333' }} to='/blog'>
          <h3 className='darkmode'>Blog</h3>
        </Link>
      </NavStyling>
    );
}

export default Nav
