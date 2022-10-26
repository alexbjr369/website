import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const Personal = [
  {
    url: 'https://alexbleggi.netlify.app/hive',
    title: 'Hive',
    imageUrl: '../img/projects/hive.svg',
    className: 'projects-feature__image--no-shadow',
    description: (
      <>Just another UI Framework...</>
    )
  },
  {
    url: '../docs/projects/hsl-color-system',
    title: 'HSL Color System',
    imageUrl: '../img/projects/hsl-color-system.png',
    className: 'projects-feature__image--no-shadow',
    description: (
      <>Color system developed for a fictional design system.</>
    )
  },
  {
    url: '../docs/projects/webpack-guide',
    title: 'Webpack Guide',
    imageUrl: '../img/projects/webpack-guide.png',
    description: (
      <>A compilation of Webpack configurations.</>
    )
  },
  {
    url: '../docs/projects/rollup-guide',
    title: 'Rollup Guide',
    imageUrl: '../img/projects/rollup-guide.png',
    description: (
      <>A compilation of Rollup configurations.</>
    )
  },
  {
    url: '../docs/projects/npm-build-scripts-guide',
    title: 'npm Build Scripts Guide',
    imageUrl: '../img/projects/npm-build-scripts-guide.png',
    description: (
      <>A compilation of npm build scripts configurations.</>
    )
  },
  {
    url: '../docs/projects/linting-code-quality-rules',
    title: 'Linting - Code-quality Rules',
    imageUrl: '../img/projects/linting-code-quality-rules.png',
    description: (
      <>A compilation of code-quality rules linting configurations.</>
    )
  },
  {
    url: 'docs/projects/linting-commit',
    title: 'Linting - Commit',
    imageUrl: '../img/projects/linting-commit.png',
    description: (
      <>A configuration for commit linting.</>
    )
  },
  {
    url: 'docs/projects/linting-formatting-rules',
    title: 'Linting - Formatting Rules',
    imageUrl: '../img/projects/linting-formatting-rules.png',
    description: (
      <>A configuration for formatting rules linting.</>
    )
  },
];

const Course = [
  {
    url: 'docs/projects/natours',
    title: 'Natours',
    imageUrl: '../img/projects/natours.png',
    description: (
      (<>Project developed in the course <a href="https://www.udemy.com/course/advanced-css-and-sass/" target="_blank"><strong>Advanced CSS and Sass</strong></a> by <a href="https://www.udemy.com/user/jonasschmedtmann/" target="_blank"><strong>Jonas Schmedtmann</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>)
    )
  },
  {
    url: 'docs/projects/toni-and-guy',
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
        <h1 className="hero__title">
          <span className="hero__highlight">Projects</span>
        </h1>
        <p className="hero__subtitle">
          A list of <span className="hero__highlight">personal</span> and <span className="hero__highlight">course</span> projects.
        </p>
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

function Feature2({ url, imageUrl, title, description, className }) {
  return (
    <div className="col col--4">
      <div className="projects-feature">
        <Link className="projects-feature__link" to={url}>
          <div>
            <img className={'projects-feature__image projects-feature__image--personal ' + className} src={imageUrl} alt={title} />
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
        <h2 className="courses__heading">Personal Projects</h2>
        <div className="row">
          {Personal.map((props, idx) => (
            <Feature2 key={idx} {...props} />
          ))}
        </div>
        <h2 className="courses__heading">Course Projects</h2>
        <div className="row">
          {Course.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <Layout title="Projects" description="Hi there, I'm Alex! I'm a front-end developer from Brazil, and this is my knowledge repository!">
      <Hero />
      <main className="projects">
        <Features />
      </main>
    </Layout>
  );
}
