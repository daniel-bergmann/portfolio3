import * as React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/style.scss';

// Components
import Nav from '../components/Nav';
import MediumApi from '../components/MediumApi';
import P from '../components/P';
import Portfolio from '../components/Portfolio';

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

      {/* <div className='main-content-container'>
        <nav>
          <Nav />
        </nav>
        <main>
          <Portfolio />
          <MediumApi />
        </main>
      </div> */}

      <P/>
    </>
  );
};

export default IndexPage;
