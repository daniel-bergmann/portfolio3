import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

// components
import Loading from './Loading';

//styling
import { BlogStyling } from './styles/Blog';

function MediumApi() {
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
    <main>
      {articles.map((i) => {
        return (
          <BlogStyling>
            <h1>
              <a
                style={{ color: '#548e8e' }}
                rel='noreferrer'
                target='_blank'
                href={i.guid}
              >
                {i.title}
              </a>
            </h1>
            <Link style={{ textDecoration: 'none', color: '#333' }} to='/'>
              <h3 className='darkmode'>{i.creator}</h3>
            </Link>
            <p>{i.pubDate.substring(0, 17)}</p>
          </BlogStyling>
        );
      })}
    </main>
  );
}

export default MediumApi;
