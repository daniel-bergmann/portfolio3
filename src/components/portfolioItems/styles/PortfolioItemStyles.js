import styled from 'styled-components';

// Styling for Professional.js

export const Style1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  .image-container {
    display: flex;
    justify-content: flex-end;
    margin: 3%;
    h1 {
      margin: 20px 0;
    }
    img {
      height: 100%;
      width: 100%;
      max-height: 250px;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    margin: 20px;

    h2 {
      padding: 10px 0;
    }
    .tech {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      p {
        border: #333 solid 1px;
        padding: 4px;
        margin: 5px;
        border-radius: 11px;
      }
    }
  }
  .link {
    display: flex;
    a {
      padding: 4px;
      margin: 5px;
      color: inherit;
      font-size: 25px;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    .image-container {
      img {
        max-width: 400px;
      }
    }
  }
`;

export const Style2 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;

  .image-container {
    margin: 3%;
    h1 {
      margin: 20px 0;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    margin: 20px;
    text-align: right;

    h2 {
      padding: 10px 0;
    }
    .tech {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-end;
      p {
        border: #333 solid 1px;
        padding: 4px;
        margin: 5px;
        border-radius: 11px;
      }
    }
  }
  .link {
    display: flex;
    justify-content: flex-end;
    a {
      padding: 4px;
      margin: 5px;
      color: inherit;
      font-size: 25px;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    .image-container {
      img {
        max-width: 400px;
      }
    }

    .text {
      text-align: right;
      width: 100%;
    }
  }
`;
