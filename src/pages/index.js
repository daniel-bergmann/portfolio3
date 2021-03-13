import * as React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/style.scss';
import styled from 'styled-components';
// Components
import Nav from '../components/Nav';
import MediumApi from '../components/MediumApi';

// img
import Cat from '../img/circles-menu-1.gif';

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <script type='application/ld+json'>
          {`
              {
                "@context": "https://www.danielbergmann.me",
                "@type": "Portfolio Site",
                "url": "https://www.danielbergmann.me",
                "name": "Daniel Bergmann",
              }
            `}
        </script>
        <meta charSet='utf-8' />
        <title>Daniel Bergmann</title>
        <meta
          name="Daniel Bergmann's portfolio site"
          content='Includes selected web development projects made by Daniel Bergmann'
        />
        <link rel='canonical' href='https://danielbergmann.me' />
      </Helmet>
      {/* <Nav />
      <MediumApi /> */}
      <Patience>
        <h1>I'll be right back amigos.</h1>
        <img src={Cat} alt='rockin cat' />
      </Patience>
    </>
  );
};

export default IndexPage;

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
