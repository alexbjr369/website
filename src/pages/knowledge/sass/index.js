import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const title = 'Sass';
const imgPath = '../img/knowledge/sass.svg';
const url = 'https://sass-lang.com';
const notes = '/docs/notes/sass';

const Courses = [
  {
    url: '../docs/advanced-css-and-sass',
    title: 'Advanced CSS and Sass',
    imageUrl: '../img/courses/advanced-css-and-sass.jpg',
    description: (<><a href="https://www.udemy.com/course/advanced-css-and-sass/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/jonasschmedtmann/" target="_blank"><strong>Jonas Schmedtmann</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>)
  },
];

const Projects = [
  {
    url: '../docs/projects/linting-code-quality-rules',
    title: 'Linting - Code-quality Rules',
    imageUrl: '../img/projects/linting-code-quality-rules.png',
    description: (
      <>A compilation of code-quality rules linting configurations.</>
    )
  },
  {
    url: '../docs/projects/trillo',
    title: 'Trillo',
    imageUrl: '../img/projects/trillo.png',
    description: (
      (<>Project developed in the course <a href="https://www.udemy.com/course/advanced-css-and-sass/" target="_blank"><strong>Advanced CSS and Sass</strong></a> by <a href="https://www.udemy.com/user/jonasschmedtmann/" target="_blank"><strong>Jonas Schmedtmann</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>)
    )
  },
  {
    url: '../docs/projects/natours',
    title: 'Natours',
    imageUrl: '../img/projects/natours.png',
    description: (
      (<>Project developed in the course <a href="https://www.udemy.com/course/advanced-css-and-sass/" target="_blank"><strong>Advanced CSS and Sass</strong></a> by <a href="https://www.udemy.com/user/jonasschmedtmann/" target="_blank"><strong>Jonas Schmedtmann</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>)
    )
  },
  {
    url: '../docs/projects/toni-and-guy',
    title: 'toni&guy',
    imageUrl: '../img/projects/toni-and-guy.png',
    description: (
      (<>Project based on the <a href="https://www.youtube.com/watch?v=kzVgkrCiDEo&list=PL8kd7mPFdvbhpThk9H09UkKbVMXd_zM4_&ab_channel=codicts" target="_blank"><strong>tutorial</strong></a> by <a href="https://www.youtube.com/channel/UCItYqcz88SDtWMZ---R492g" target="_blank"><strong>codicts</strong></a> on <a href="https://www.youtube.com/" target="_blank"><strong>Youtube</strong></a>.</>)
    )
  },
];

function Hero() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        {imgPath &&
          <a href={url} target="_blank">
            <img className="hero__image" src={imgPath} alt={title} />
          </a>
        }
        <p className="hero__subtitle">
          A list of <span className="hero__highlight">courses</span> and <span className="hero__highlight">projects</span> where <span className="hero__highlight">{title}</span> was used.
        </p>
        <div className="hero__button-container">
          <Link className="button button--custom" to={url}>
            Link
          </Link>
          {/* {notes && <Link className="button button--custom" to={notes}>Notes</Link>} */}
        </div>
      </div>
    </header>
  );
}

function Feature({ url, imageUrl, title, description }) {
  return (
    <div className="col col--4">
      <div className="projects-feature">
        <Link className="projects-feature__link" to={url}>
          <div>
            <img className="projects-feature__image projects-feature__image--book" src={imageUrl} alt={title} />
            <h3 className="projects-feature__heading">{title}</h3>
          </div>
        </Link>
        <p className="projects-feature__description">{description}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section>
      <div className="container">
        {Courses.length !== 0 && <h2 className="courses__heading">Courses</h2>}
        <div className="row">
          {Courses.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        {Projects.length !== 0 && <h2 className="courses__heading">Projects</h2>}
        <div className="row">
          {Projects.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Knowledge() {
  return (
    <Layout title={title} description="Hi there, I'm Alex! I'm a front-end developer from Brazil, and this is my knowledge repository!">
      <Hero />
      <main className="projects">
        <Features />
      </main>
    </Layout>
  );
}
