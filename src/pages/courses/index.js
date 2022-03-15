import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const Books = [];

const CourseList = [
  {
    url: '/docs/ignite/react-js',
    title: 'Ignite React.js',
    imageUrl: '../img/courses/ignite-react.png',
    description: (
      <><a href="https://www.rocketseat.com.br/ignite" target="_blank"><strong>Ignite React.js</strong></a> by <a href="https://www.rocketseat.com.br/" target="_blank"><strong>RocketSeat</strong></a>.</>
    )
  },
  {
    url: '../docs/advanced-css-and-sass',
    title: 'Advanced CSS and Sass',
    imageUrl: '../img/courses/advanced-css-and-sass.jpg',
    description: (<><a href="https://www.udemy.com/course/advanced-css-and-sass/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/jonasschmedtmann/" target="_blank"><strong>Jonas Schmedtmann</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>)
  },
];

function Hero() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">
          <span className="hero__highlight">Courses</span>
        </h1>
        <p className="hero__subtitle">
          A list of <span className="hero__highlight">courses</span> I took, totaling <span className="hero__highlight">252 hours</span>.
        </p>
      </div>
    </header>
  );
}

function Feature({ url, title, imageUrl, description }) {
  return (
    <div className="col col--4">
      <div className="courses-feature">
        <Link className="courses-feature__link" to={url}>
          <div>
            <img className="courses-feature__image" src={imageUrl} alt={title} />
            <h3 className="courses-feature__heading">{title}</h3>
          </div>
        </Link>
        <p className="courses-feature__description">{description}</p>
      </div>
    </div>
  );
}

function Feature2({ url, imageUrl, title, description }) {
  return (
    <div className="col col--4">
      <div className="courses-feature">
        <Link className="courses-feature__link" to={url}>
          <div>
            <img className="courses-feature__image courses-feature__image--books" src={imageUrl} alt={title} />
            <h3 className="courses-feature__heading">{title}</h3>
          </div>
        </Link>
        <p className="courses-feature__description">{description}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section>
      <div className="container">
        <h2 className="courses__heading">Books</h2>
        <div className="row">
          {Books.map((props, idx) => (
            <Feature2 key={idx} {...props} />
          ))}
        </div>
        <h2 className="courses__heading">Online Courses</h2>
        <div className="row">
          {CourseList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Courses() {
  return (
    <Layout title="Courses" description="Hi there, I'm Alex! I'm a front-end developer from Brazil, and this is my knowledge repository!">
      <Hero />
      <main className="courses">
        <Features />
      </main>
    </Layout>
  );
}
