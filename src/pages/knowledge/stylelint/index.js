import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const title = 'Stylelint';
const imgPath = '../img/knowledge/stylelint.svg';
const url = 'https://stylelint.io';
const notes = '';

const Courses = [];

const Projects = [
  {
    url: '../docs/projects/webpack-guide',
    title: 'Webpack Guide',
    imageUrl: '../img/projects/github.png',
    description: (
      <>A compilation of Webpack configurations.</>
    )
  },
  {
    url: '../docs/projects/rollup-guide',
    title: 'Rollup Guide',
    imageUrl: '../img/projects/github.png',
    description: (
      <>A compilation of Rollup configurations.</>
    )
  },
  {
    url: '../docs/projects/npm-build-scripts',
    title: 'npm Build Scripts Guide',
    imageUrl: '../img/projects/github.png',
    description: (
      <>A compilation of npm build scripts configurations.</>
    )
  },
  {
    url: '../docs/projects/linting-code-quality-rules',
    title: 'Linting - Code-quality Rules',
    imageUrl: '../img/projects/github.png',
    description: (
      <>A compilation of code-quality rules linting configurations.</>
    )
  },
];

function Hero() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        {imgPath &&
          <a href={url} target="_blank">
            <img className="hero__image fixed-invert" src={imgPath} alt={title} />
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
