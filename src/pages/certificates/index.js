import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const other = [];

const technology = [];

function Hero() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">
          <span className="hero__highlight">Certificates</span>
        </h1>
        <p className="hero__subtitle">
          A list of <span className="hero__highlight">certificates</span> I achieved.
        </p>
        <p className="hero__description">
          In order to build my knowledge repository, I found interesting to revisit the courses I took on my journey in web development. For this reason,
          certificates are presented from 2021 onwards.
        </p>
      </div>
    </header>
  );
}

function Feature({ url, imageUrl, title, description }) {
  return (
    <div className="col col--4">
      <div className="certificates-feature">
        <Link className="certificates-feature__link" to={url}>
          <div>
            <img className="certificates-feature__image" src={imageUrl} alt={title} />
            <h3 className="certificates-feature__heading">{title}</h3>
          </div>
        </Link>
        <p className="certificates-feature__description">{description}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h2 className="certificates__header">Other</h2>
        </div>
        <div className="row">
          {other.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <h2 className="certificates__header">Technology</h2>
        </div>
        <div className="row">
          {technology.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Certificates() {
  return (
    <Layout title="Certificates" description="Hi there, I'm Alex! I'm a front-end developer from Brazil, and this is my knowledge repository!">
      <Hero />
      <main className="certificates">
        <Features />
      </main>
    </Layout>
  );
}
