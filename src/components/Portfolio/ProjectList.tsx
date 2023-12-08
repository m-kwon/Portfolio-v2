import imageFlora from '../../assets/flora.png';
import imageFurniture from '../../assets/furniture.png';
import imageSignup from '../../assets/signup.png';
import imageDashboard from '../../assets/dashboard.png';
import imageNeighbr from '../../assets/neighbr.png';
import imageAtelier from '../../assets/atelier.png';

const ProjectList: {
  id: number;
  title: string;
  previewImageURL: string;
  previewVideoURL: string;
  description_EN: string;
  githubLink: string;
  liveLink: string;
  technologies: string;
  year: number;
}[] = [
  {
    id: 1,
    title: 'Flora',
    previewImageURL: imageFlora,
    previewVideoURL: "x",
    description_EN: 'An e-commerce storefront.',
    githubLink: 'https://github.com/m-kwon/Plant-Store',
    liveLink: 'https://sampleplantstore.netlify.app/',
    technologies: 'React, Redux, JavaScript, Tailwind',
    year: 2023,
  },
  {
    id: 2,
    title: 'Furniture',
    previewImageURL: imageFurniture,
    previewVideoURL: "x",
    description_EN: 'A gallery for a furniture store.',
    githubLink: 'https://github.com/m-kwon/Furniture-Store',
    liveLink: 'https://samplefurniturestore.netlify.app/',
    technologies: 'React, JavaScript, SCSS, Firebase',
    year: 2023,
  },
  {
    id: 3,
    title: 'Signup',
    previewImageURL: imageSignup,
    previewVideoURL: "x",
    description_EN: 'A simple signup form.',
    githubLink: 'https://github.com/m-kwon/Signup',
    liveLink: 'https://m-kwon.github.io/Signup/',
    technologies: 'JavaScript, CSS, HTML',
    year: 2023,
  },
  {
    id: 4,
    title: 'Dashboard',
    previewImageURL: imageDashboard,
    previewVideoURL: "x",
    description_EN: 'An admin dashboard using Grid format.',
    githubLink: 'https://github.com/m-kwon/admin-dashboard',
    liveLink: 'https://m-kwon.github.io/admin-dashboard/',
    technologies: 'CSS, HTML',
    year: 2023,
  },
  {
    id: 5,
    title: 'Neighbr',
    previewImageURL: imageNeighbr,
    previewVideoURL: "x",
    description_EN: 'A fully featured social network with live chatting and news feed.',
    githubLink: 'https://github.com/m-kwon/Neighbr/',
    liveLink: 'https://github.com/m-kwon/Neighbr/',
    technologies: 'React, Redux, Node, Express, MongoDB, Firebase, Material-UI',
    year: 2021,
  },
  {
    id: 6,
    title: 'Atelier API',
    previewImageURL: imageAtelier,
    previewVideoURL: "x",
    description_EN: 'An API for an e-commerce clothing store.',
    githubLink: 'https://github.com/m-kwon/automatic-garbanzo-reviews-API',
    liveLink: 'https://github.com/m-kwon/automatic-garbanzo-reviews-API',
    technologies: 'JavaScript, Node, Express, PostgreSQL, K6, NGINX, AWS, Docker',
    year: 2021,
  },

];

export default ProjectList;