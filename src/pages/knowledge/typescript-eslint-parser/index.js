import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const title = '@typescript-eslint/parser';
const imgPath = '../img/knowledge/npm-build-scripts.svg';
const url = 'https://www.npmjs.com/package/@typescript-eslint/parser';
const notes = '';

const Courses = [];

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
    </header >
  );
}

function Feature({ url, imageUrl, title, description }) {
  return (
    <div className="col col--4">
      <div className="projects-feature">
        <Link className="projects-feature__link" to={url}>
          <div>
            <img className="projects-feature__image" src={imageUrl} alt={title} />
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
