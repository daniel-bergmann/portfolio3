import * as React from "react"
import { Helmet } from "react-helmet"



// Components
import IndexHeader from '../components/IndexHeader'
import Navbar from '../components/nav/Navbar'



// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
          <script type="application/ld+json">
            {`
              {
                "@context": "https://www.danielbergmann.me",
                "@type": "Portfolio Site",
                "url": "https://www.danielbergmann.me",
                "name": "Daniel Bergmann",
              }
            `}
          </script>
          <meta charSet="utf-8" />
          <title>Daniel Bergmann</title>
          <meta name="Daniel Bergmann's portfolio site" 
          content="Includes selected web development projects made by Daniel Bergmann" />
          <link rel="canonical" href="http://danielbergmann.me" />
      </Helmet>
      <Navbar />
      <IndexHeader />
    </>
  )
}

export default IndexPage