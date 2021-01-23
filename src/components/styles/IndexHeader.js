import styled from 'styled-components'

// Styles
export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10%;

  max-width: auto;
  h1 {
    font-size: 50px;
    padding: 5px;
    font-weight: 200;
  }

  .pick {
    display: flex;
    align-items: center;
    flex-direction: column;
    .social {
      font-size: 30px;
      .social-item {
        margin: 5px;
      }
    }
    .work {
      padding: 10px;
    }
    h2 {
      font-size: 40px;
      padding: 20px;
    }
    h3 {
      padding: 5px;
    }
  }

  ////////////////////////////
  // for large
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }
`;
