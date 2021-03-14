import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// components
import Loading from './Loading';

function MediumApi({ cn }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = 'https://v1.nocodeapi.com/dan/medium/GMIeuwNuBQsRLFhY';

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data);
      console.log(data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Main>
      <BlogStyling>
        <h1>{!cn ? 'Blog' : '博客'}</h1>
        {articles.map((i) => {
          return (
            <div className='text'>
              <h2>
                <a
                  style={{ color: '#333' }}
                  rel='noreferrer'
                  target='_blank'
                  href={i.guid}
                >
                  {i.title}
                </a>
              </h2>
            </div>
          );
        })}
      </BlogStyling>
    </Main>
  );
}

export default MediumApi;

const Main = styled.div`
  padding-top: 30px;
`;

const BlogStyling = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 10px;
  h1 {
    margin-bottom: 20px;
  }
  h2 {
    margin-bottom: 20px;
  }
  .text {
    text-align: center;
    h2 {
      &:hover {
        transform: scale(1.1);
      }
      a {
        text-decoration: none;
        color: #333;
      }
    }
  }
`;
