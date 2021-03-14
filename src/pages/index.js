import * as React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/style.scss';

// Components
import Nav from '../components/Nav';
import MediumApi from '../components/MediumApi';
import P from '../components/P';
import Portfolio from '../components/Portfolio';
import Welcome from '../components/Welcome';
import Podcast from '../components/Podcast';

// markup
const IndexPage = () => {
  const [cn, setCn] = useState(false);

  function changeLang() {
    if (cn === false) {
      setCn(true);
    } else {
      setCn(false);
    }
  }

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

      <div className='main-content-container'>
        <nav>
          <Nav cn={cn} changeLang={changeLang} />
        </nav>
        <main>
          <Welcome cn={cn} />
          {/* <Portfolio cn={cn} /> */}
          <MediumApi cn={cn} />
          <Podcast cn={cn} />
        </main>
      </div>

      {/* <P/> */}
    </>
  );
};

export default IndexPage;
