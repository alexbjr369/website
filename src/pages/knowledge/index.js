import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const KnowledgeImage = [
  {
    title: 'CSS',
    imageUrl: '../img/knowledge/css.svg',
    url: 'knowledge/css',
  },
  {
    title: 'TypeScript',
    imageUrl: '../img/knowledge/typescript.svg',
    url: 'knowledge/typescript',
  },
  {
    title: 'Bem Methodology',
    imageUrl: '../img/knowledge/bem-methodology.svg',
    url: 'knowledge/bem-methodology',
    className: 'invert',
  },
  {
    title: 'Sass',
    imageUrl: '../img/knowledge/sass.svg',
    url: 'knowledge/sass',
  },
  {
    title: 'EditorConfig',
    imageUrl: '../img/knowledge/editorconfig.png',
    url: 'knowledge/editorconfig',
  },
  {
    title: 'Prettier',
    imageUrl: '../img/knowledge/prettier.svg',
    url: 'knowledge/prettier',
  },

  {
    title: 'Stylelint',
    imageUrl: '../img/knowledge/stylelint.svg',
    url: 'knowledge/stylelint',
    className: 'invert',
  },
  {
    title: 'React',
    imageUrl: '../img/knowledge/react-js.svg',
    url: 'knowledge/react-js',
  },
  {
    title: 'node-sass',
    imageUrl: '../img/knowledge/node-sass.svg',
    url: 'knowledge/node-sass',
  },
];

const KnowledgeText = [
  {
    title: 'lint-staged',
    url: 'knowledge/lint-staged',
  },
  {
    title: 'husky',
    url: 'knowledge/husky',
  },

  {
    title: '@commitlint/cli',
    url: 'knowledge/commitlint-cli',
  },
  {
    title: '@commitlint/config-conventional',
    url: 'knowledge/commitlint-config-conventional',
  },
  {
    title: 'commitizen',
    url: 'knowledge/commitizen',
  },
  {
    title: 'cz-conventional-changelog',
    url: 'knowledge/cz-conventional-changelog',
  },

  {
    title: 'stylelint-config-prettier',
    url: 'knowledge/stylelint-config-prettier',
  },
  {
    title: 'stylelint-config-rational-order',
    url: 'knowledge/stylelint-config-rational-order',
  },
  {
    title: 'stylelint-order',
    url: 'knowledge/stylelint-order',
  },

  {
    title: 'postcss-less',
    url: 'knowledge/postcss-less',
  },
  {
    title: 'postcss-sass',
    url: 'knowledge/postcss-sass',
  },
  {
    title: 'postcss-scss',
    url: 'knowledge/postcss-scss',
  },
  {
    title: 'postcss-styl',
    url: 'knowledge/postcss-styl',
  },
];

function Hero() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">
          <span className="hero__highlight">Knowledge</span>
        </h1>
        <p className="hero__subtitle">
          A list of <span className="hero__highlight">tools</span> and <span className="hero__highlight">technologies</span> with which I have knowledge and
          experience.
        </p>
      </div>
    </header>
  );
}

function Feature({ url, className, style, imageUrl, title }) {
  return (
    <div className="knowledge-feature">
      <Link className="knowledge-feature__link" to={url}>
        <img className={`knowledge-feature__image ${className}`} style={style} src={imageUrl} alt={title} />
        <div className="knowledge-feature__overlay">
          <h3 className="knowledge-feature__heading">{title}</h3>
        </div>
      </Link>
    </div>
  );
}

function FeatureText({ url, title }) {
  return (
    <Link className="feature-text" to={url}>
      {title}
    </Link>
  );
}

function Features() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {KnowledgeImage.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          {KnowledgeText.map((props, idx) => (
            <FeatureText key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Knowledge() {
  return (
    <Layout title="Knowledge" description="Hi there, I'm Alex! I'm a front-end developer from Brazil, and this is my knowledge repository!">
      <Hero />
      <main className="knowledge">
        <Features />
      </main>
    </Layout>
  );
}
