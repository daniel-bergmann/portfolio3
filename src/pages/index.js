import * as React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/style.scss';

// Components
import IndexHeader from '../components/IndexHeader';
import Darkmode from '../components/Darkmode';
import Nav from '../components/Nav';

// portfolio components
import Professional from '../components/portfolioItems/Professional';
import Personal from '../components/portfolioItems/Personal';

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
      <Darkmode />
      <Nav />
      <IndexHeader />
      <Professional />
      <Personal />
    </>
  );
};

export default IndexPage;
