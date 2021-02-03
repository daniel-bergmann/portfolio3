import React, { useState } from 'react';

// styles
import { Style2 } from './styles/PortfolioItemStyles';
// icons
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// data
import { data } from './pers-data';

function Personal() {
  const [content, setContent] = useState(data);
  return (
    <>
      {content.map((i) => {
        return (
          <Style2>
            <div className='text'>
              <h2>{i.title}</h2>
              <p>{i.about}</p>
              <div className='tech'>
                <p>{i.tech1}</p>
                <p>{i.tech2}</p>
                <p>{i.tech3}</p>
                <p>{i.tech4}</p>
                <p>{i.tech5}</p>
              </div>
              <div className='link'>
                <a rel='noreferrer' target='_blank' href={i.githublink}>
                  <FaGithub />
                </a>
                <a rel='noreferrer' target='_blank' href={i.extlink}>
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className='image-container'>
              <img src={i.img} alt={i.title} />
            </div>
          </Style2>
        );
      })}
    </>
  );
}

export default Personal;
