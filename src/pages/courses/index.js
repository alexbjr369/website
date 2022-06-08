import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const Books = [
  {
    url: '../docs/advanced-animations-and-interactions-with-ionic',
    title: 'Advanced Animations and Interactions with Ionic',
    imageUrl: '../img/courses/advanced-animations-and-interactions-with-ionic.png',
    description: (
      <><a href="https://www.joshmorony.com/advanced-animations-and-interactions-with-ionic/?utm_source=books" target="_blank"><strong>Book</strong></a> by <a href="https://www.joshmorony.com/about/" target="_blank"><strong>Josh Morony</strong></a>.</>
    )
  },
];

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
    url: '/docs/javascript-unit-testing',
    title: 'JavaScript Unit Testing',
    imageUrl: '../img/courses/javascript-unit-testing.jpg',
    description: (
      <><a href="https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/academind/" target="_blank"><strong>Academind</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
  },
  {
    url: '../docs/the-complete-guide-to-angular',
    title: 'The Complete Guide To Angular',
    imageUrl: '../img/courses/the-complete-guide-to-angular.jpg',
    description: (
      <><a href="https://www.udemy.com/course/the-complete-guide-to-angular/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/academind/" target="_blank"><strong>Academind</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
  },
  {
    url: '../docs/vue-the-complete-guide',
    title: 'Vue the Complete Guide',
    imageUrl: '../img/courses/vue-the-complete-guide.jpg',
    description: (
      <><a href="https://www.udemy.com/course/vuejs-2-the-complete-guide/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/academind/" target="_blank"><strong>Academind</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
  },
  {
    url: '../docs/react-the-complete-guide',
    title: 'React the Complete Guide',
    imageUrl: '../img/courses/react-the-complete-guide.jpg',
    description: (
      <><a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/academind/" target="_blank"><strong>Academind</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
  },
  {
    url: '../docs/web-components-stenciljs',
    title: 'Web Components and Stencil.js',
    imageUrl: '../img/courses/web-components-stenciljs.jpg',
    description: (
      <><a href="https://www.udemy.com/course/web-components-stenciljs-build-custom-html-elements/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/academind/" target="_blank"><strong>Academind</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
  },
  {
    url: '../docs/understanding-typescript',
    title: 'Understanding TypeScript',
    imageUrl: '../img/courses/understanding-typescript.jpg',
    description: (
      <><a href="https://www.udemy.com/course/understanding-typescript/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/academind/" target="_blank"><strong>Academind</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
  },
  {
    url: '../docs/the-complete-javascript-course',
    title: 'The Complete JavaScript Course',
    imageUrl: '../img/courses/the-complete-javascript-course.jpg',
    description: (
      <><a href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/jonasschmedtmann/" target="_blank"><strong>Jonas Schmedtmann</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
  },
  {
    url: '../docs/advanced-css-and-sass',
    title: 'Advanced CSS and Sass',
    imageUrl: '../img/courses/advanced-css-and-sass.jpg',
    description: (
      <><a href="https://www.udemy.com/course/advanced-css-and-sass/" target="_blank"><strong>Online course</strong></a> by <a href="https://www.udemy.com/user/jonasschmedtmann/" target="_blank"><strong>Jonas Schmedtmann</strong></a> on <a href="https://www.udemy.com/" target="_blank"><strong>Udemy</strong></a>.</>
    )
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
        <h2 className="courses__heading">Online Courses</h2>
        <div className="row">
          {CourseList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <h2 className="courses__heading">Books</h2>
        <div className="row">
          {Books.map((props, idx) => (
            <Feature2 key={idx} {...props} />
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
