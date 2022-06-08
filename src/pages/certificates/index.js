import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const other = [
  {
    url: '',
    imageUrl: 'img/certificates/navitas-02.jpg',
    title: 'English',
    description: (<><a href="http://www.navitasenglish.edu.au/courses/general-english/" target="_blank"><strong>General English</strong></a> at <a href="http://www.navitasenglish.edu.au/" target="_blank"><strong>Navitas English, Sydney, Australia</strong></a>.</>)
  },
  {
    url: '',
    imageUrl: 'img/certificates/navitas-01.jpg',
    title: 'English',
    description: (<><a href="http://www.navitasenglish.edu.au/courses/general-english/" target="_blank"><strong>Power English Evening</strong></a> at <a href="http://www.navitasenglish.edu.au/" target="_blank"><strong>Navitas English, Sydney, Australia</strong></a>.</>)
  }
];

const technology = [
  {
    url: '/docs/javascript-unit-testing#certificate',
    title: 'JavaScript Unit Testing',
    imageUrl: '../img/certificates/UC-8d78f80a-47b4-4e5a-b57a-e6e0828e4af9.jpg',
    description: (
      <><a href="https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/academind/" target="_blank"><strong>Academind</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
  },
  {
    url: '../docs/the-complete-guide-to-angular#certificate',
    title: 'The Complete Guide To Angular',
    imageUrl: '../img/certificates/UC-8d78f80a-47b4-4e5a-b57a-e6e0828e4af9.jpg',
    description: (
      <><a href="https://www.udemy.com/course/the-complete-guide-to-angular/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/academind/" target="_blank"><strong>Academind</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
  },
  {
    url: '../docs/vue-the-complete-guide#certificate',
    title: 'Vue the Complete Guide',
    imageUrl: '../img/certificates/UC-a05e7f84-f4e1-48bb-aa5f-a1c121ccb7f4.jpg',
    description: (
      <><a href="https://www.udemy.com/course/vuejs-2-the-complete-guide/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/academind/" target="_blank"><strong>Academind</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
  },
  {
    url: '../docs/react-the-complete-guide#certificate',
    title: 'React the Complete Guide',
    imageUrl: '../img/certificates/UC-32f3279a-f734-465a-921c-5940013cb203.jpg',
    description: (
      <><a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/academind/" target="_blank"><strong>Academind</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
  },
  {
    url: '../docs/web-components-stenciljs#certificate',
    title: 'Web Components and Stencil.js',
    imageUrl: '../img/certificates/UC-ec7230bc-4d01-4ff3-86bf-3146060206cd.jpg',
    description: (
      <><a href="https://www.udemy.com/course/web-components-stenciljs-build-custom-html-elements/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/academind/" target="_blank"><strong>Academind</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
  },
  {
    url: '../docs/understanding-typescript#certificate',
    imageUrl: '../img/certificates/UC-d9e3270a-3868-412f-b18b-a3c197905ac9.jpg',
    title: 'Understanding TypeScript',
    description: (<><a href="https://www.udemy.com/course/understanding-typescript/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/academind/" target="_blank"><strong>Academind</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>)
  },
  {
    url: '../docs/the-complete-javascript-course#certificate',
    imageUrl: 'img/certificates/UC-1229188e-5262-43f8-a4e3-ac0a6a557a0c.jpg',
    title: 'The Complete JavaScript Course',
    description: (<><a href="https://www.udemy.com/course/the-complete-javascript-course" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/jonasschmedtmann/" target="_blank"><strong>Jonas Schmedtmann</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>)
  },
  {
    url: '../docs/advanced-css-and-sass#certificate',
    imageUrl: 'img/certificates/UC-5f1180c8-1b18-4582-982f-b854979b3fd8.jpg',
    title: 'Advanced CSS and Sass',
    description: (<><a href="https://www.udemy.com/course/advanced-css-and-sass" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/jonasschmedtmann/" target="_blank"><strong>Jonas Schmedtmann</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>)
  },
];

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
