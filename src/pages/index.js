import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    Svg: require('../../static/img/home/knowledge.svg').default,
    url: '/knowledge',
    title: 'Knowledge',
    description: <>A list of tools and technologies with which I have knowledge and experience.</>,
  },
  {
    Svg: require('../../static/img/home/projects.svg').default,
    url: '/projects',
    title: 'Projects',
    description: <>A list of personal and course projects.</>,
  },
  {
    Svg: require('../../static/img/home/courses.svg').default,
    url: '/courses',
    title: 'Courses',
    description: <>A list of courses I took, totaling 252 hours.</>,
  },
  {
    Svg: require('../../static/img/home/certificates.svg').default,
    url: '/certificates',
    title: 'Certificates',
    description: <>A list of certificates I achieved.</>,
  },
];

function Hero() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">
          Hi there, I'm <span className="hero__highlight">Alex!</span>
        </h1>
        <p className="hero__subtitle">
          I'm a front-end developer from Brazil, and this is my <span className="hero__highlight">knowledge repository!</span>
        </p>
        <div className="hero__button-container">
          <Link className="button button--custom" to="/blog/welcome">
            About Me
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({ url, Svg, title, description }) {
  return (
    <div className="col col--3">
      <div className="home-feature">
        <Link className="home-feature__link" to={url}>
          <Svg className="home-feature__image" alt={title} />
          <h2 className="home-feature__heading">{title}</h2>
          <p className="home-feature__description">{description}</p>
        </Link>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="Hi there, I'm Alex! I'm a front-end developer from Brazil, and this is my knowledge repository!">
      <Hero />
      <main className="home">
        <Features />
      </main>
    </Layout>
  );
}
