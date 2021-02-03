
import Konni from '../../img/portfolio-items/konfusius.png';
import Kin from '../../img/portfolio-items/kinverska.png';

export const data = [
  {
    title: 'konfusius.is',
    about:
      'This is the homepage of the Northern Lights Confucius Institute at the University of Iceland. I designed and developed the website. I had three main goals I focused on when creating this website, 1. Save money spent on hosting a server so it could go into more important projects. 2. Make a simple UI that\'s pleasing to use on most devices. 3. Have the content editable with a simple CMS that my colleagues can access without needing to code a single line. The website is hosted for free and utilizes a headless CMS that triggers a new build each time content is updated. It is therefore "serverless" and after going through user testing, responsive on most devices.',
    tech1: 'ReactJS',
    tech2: 'GatsbyJS',
    tech3: 'GraphQl',
    tech4: 'Prismic.io',
    tech5: 'Styled Components',
    img: Konni,
    githublink: '',
    extlink: 'https://konfusius.is',
  },
  {
    title: 'kinverska.is',
    about: 'This is a language learning platform. I received a grant from the Startup and Entrepreneurship Center in the University of Iceland to create it. It\'s focus is on providing high quality graded reading practice for the Chinese language students at the University of Iceland. It\'s also open for anyone interested in learning the chinese langauge. Key elements to the project is open source, free and simple to use.',
    tech1: 'ReactJS',
    tech2: 'GatsbyJS',
    tech3: 'Styled Components',
    tech4: 'SASS',
    tech5: 'React-Modals',
    img: Kin,
    githublink: 'https://github.com/daniel-bergmann/kinverska.is',
    extlink: 'https://kinverska.is',
  },
];
