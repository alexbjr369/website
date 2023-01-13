import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const title = 'Stencil.js';
const imgPath = '../img/knowledge/stencil-js-gray.svg';
const url = 'https://stenciljs.com/';
const notes = '';

const Courses = [
  {
    url: '../docs/web-components-stencil-js',
    title: 'Web Components and Stencil.js',
    imageUrl: '../img/courses/web-components-stencil-js.jpg',
    description: (
      <><a href="https://www.udemy.com/course/web-components-stenciljs-build-custom-html-elements/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/academind/" target="_blank"><strong>Academind</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
  },
];

const Projects = [];

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
