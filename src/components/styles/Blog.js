import styled from 'styled-components';

export const BlogStyling = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 10px;
  .text {
    h1 {
      a {
        text-decoration: none;
        color: #333;
      }
    }
  }
`;