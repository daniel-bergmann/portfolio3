import React from 'react';
import styled from 'styled-components';
import { FaGithubSquare } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
// data
import { project1, project2 } from './ProjectData';

export default function Portfolio({ cn }) {
  return (
    <>
      {project1.map((i) => {
        return (
          <ContainerRight>
            <div className='image'>
              {/* breyta þessu í static image seinna */}
              <img
                src='https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dHVydGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt={i.title}
              />
            </div>
            <div className='text' key={i.id}>
              <h1>{!cn ? i.titleEn : i.titleCn}</h1>
              <p>{!cn ? i.pEn1 : i.pCn1}</p>
              <p>{!cn ? i.pEn2 : i.pCn2}</p>
              <div className='tech'>
                <p>{i.tech1}</p>
                <p>{i.tech2}</p>
                <p>{i.tech3}</p>
                <p>{i.tech4}</p>
                <p>{i.tech5}</p>
              </div>
              <div className='link'>
                <a href={i.githubLink}>
                  <FaGithubSquare />
                </a>
                <a href={i.siteLink}>
                  <BiLinkExternal />
                </a>
              </div>
            </div>
          </ContainerRight>
        );
      })}

      {project2.map((i) => {
        return (
          <ContainerLeft>
            <div className='text'>
              <h1>{!cn ? i.titleEn : i.titleCn}</h1>
              <p>{!cn ? i.pEn1 : i.pCn1}</p>
              <p>{!cn ? i.pEn2 : i.pCn2}</p>
              <div className='tech'>
                <p>{i.tech1}</p>
                <p>{i.tech2}</p>
                <p>{i.tech3}</p>
                <p>{i.tech4}</p>
                <p>{i.tech5}</p>
              </div>
              <div className='link'>
                <a href={i.githubLink}>
                  <FaGithubSquare />
                </a>
                <a href={i.siteLink}>
                  <BiLinkExternal />
                </a>
              </div>
            </div>
            <div className='image'>
              {/* breyta þessu í static image seinna */}
              <img
                src='https://images.unsplash.com/photo-1597162216923-ba6d99390c10?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dHVydGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt={i.title}
              />
            </div>
          </ContainerLeft>
        );
      })}
    </>
  );
}
const ContainerRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  height: 90vh;
  &:hover {
    background-color: #f4f4f4;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 50%;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1 {
      padding-bottom: 5px;
    }
    p {
      padding-bottom: 5px;
      max-width: 80%;
    }
    .tech {
      display: flex;
      margin: 5px;
      p {
        margin: 2px;
        border: 2px solid #333;
        border-radius: 10px;
        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
      }
      p {
        padding-bottom: 5px;
      }
    }
    .link {
      a {
        font-size: 30px;
        padding: 5px;
        color: #333;
      }
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100vh;
    &:hover {
      background: white;
    }
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 90%;
      }
    }
    .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
  }
`;

////////////////////////////////////////

const ContainerLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  &:hover {
    background-color: #f4f4f4;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 70%;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    h1 {
      padding-bottom: 5px;
    }
    p {
      padding-bottom: 5px;
      max-width: 80%;
      text-align: right;
    }
    .tech {
      margin: 5px;
      display: flex;
      p {
        margin: 2px;

        border: 2px solid #333;
        border-radius: 10px;
        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
      }
      p {
        padding-bottom: 5px;
      }
    }
    .link {
      a {
        font-size: 30px;
        padding: 5px;
        color: #333;
      }
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
    margin-top: 50px;
    &:hover {
      background: white;
    }
    .image {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 90%;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
