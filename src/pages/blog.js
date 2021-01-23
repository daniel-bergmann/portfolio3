import * as React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/style.scss';

// Components
import Darkmode from '../components/Darkmode';
import MediumApi from '../components/MediumApi';
import Nav from '../components/Nav';

// markup
const blog = () => {
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
        <title>Daniel Bergmann - Blog</title>
        <meta
          name="Daniel Bergmann's portfolio site"
          content='Includes selected web development projects made by Daniel Bergmann'
        />
        <link rel='canonical' href='https://danielbergmann.me' />
      </Helmet>
      <Darkmode />
      <Nav />
      <MediumApi />
    </>
  );
};

export default blog;
