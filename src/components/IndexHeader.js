import * as React from "react"
import styled from 'styled-components'

// Images
import img1 from '../img/1.svg'


// Styles
const Header = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,700;1,300&display=swap');
    font-family: 'Ubuntu', sans-serif;

    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10%;

    padding-top: 10%;
    max-width: auto;
    h1 {
      padding: 5px;
    }

    iframe {
      height: 110%;
      width: 100%
    }

////////////////////////////
    // for small screens
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;




// markup
const IndexPage = () => {
  return (
    <Header>
      <h1>Hello. I'm Daniel Bergmann, a web development altmuligmand. Welcome to my little corner on the internet.
        Here you can find my portfolio with selected software I've written.
          You can also read my articles and view my CV.
      </h1>
      <p>hello</p>
      <iframe src={img1} frameborder="0"></iframe>
    </Header>
  )
}

export default IndexPage
