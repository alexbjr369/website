import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const KnowledgeImage = [
  {
    title: 'HTML',
    imageUrl: '../img/knowledge/html.svg',
    url: 'knowledge/html',
  },
  {
    title: 'CSS',
    imageUrl: '../img/knowledge/css.svg',
    url: 'knowledge/css',
  },
  {
    title: 'Web Accessibility',
    imageUrl: '../img/knowledge/web-accessibility.png',
    url: 'knowledge/web-accessibility',
  },
  {
    title: 'JavaScript',
    imageUrl: '../img/knowledge/javascript.svg',
    url: 'knowledge/javascript',
  },
  {
    title: 'Web Components',
    imageUrl: '../img/knowledge/web-components.png',
    url: 'knowledge/web-components',
    className: 'knowledge-feature__image--web-components'
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
    title: 'Sass Guidelines',
    imageUrl: '../img/knowledge/sass-guidelines.png',
    url: 'knowledge/sass-guidelines',
  },

  {
    title: 'Less',
    imageUrl: '../img/knowledge/less.svg',
    url: 'knowledge/less',
  },
  {
    title: 'Sass',
    imageUrl: '../img/knowledge/sass.svg',
    url: 'knowledge/sass',
  },
  {
    title: 'Stylus',
    imageUrl: '../img/knowledge/stylus.svg',
    url: 'knowledge/stylus',
  },
  {
    title: 'PostCSS',
    imageUrl: '../img/knowledge/postcss.svg',
    url: 'knowledge/postcss',
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
    title: 'ESLint',
    imageUrl: '../img/knowledge/eslint.svg',
    url: 'knowledge/eslint',
  },

  {
    title: 'Stencil',
    imageUrl: '../img/knowledge/stencil-js-gray.svg',
    url: 'knowledge/stencil-js',
  },
  {
    title: 'React',
    imageUrl: '../img/knowledge/react-js.svg',
    url: 'knowledge/react-js',
  },

  {
    title: 'docusaurus',
    imageUrl: '../img/knowledge/docusaurus.svg',
    url: 'knowledge/docusaurus',
  },

  {
    title: 'GreenSock',
    imageUrl: '../img/knowledge/gsap.svg',
    url: 'knowledge/gsap',
  },
  {
    title: 'Three.js',
    imageUrl: '../img/knowledge/three-js.svg',
    url: 'knowledge/three-js',
    className: 'invert',
  },

  {
    title: 'Vite',
    imageUrl: '../img/knowledge/vite.svg',
    url: 'knowledge/vite',
  },

  {
    title: 'node-sass',
    imageUrl: '../img/knowledge/node-sass.svg',
    url: 'knowledge/node-sass',
  },
  {
    title: 'Autoprefixer',
    imageUrl: '../img/knowledge/autoprefixer.svg',
    url: 'knowledge/autoprefixer',
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

  {
    title: 'eslint-config-airbnb-base',
    url: 'knowledge/eslint-config-airbnb-base',
  },
  {
    title: 'eslint-config-prettier',
    url: 'knowledge/eslint-config-prettier',
  },
  {
    title: 'eslint-plugin-import',
    url: 'knowledge/eslint-plugin-import',
  },
  {
    title: 'eslint-plugin-prettier',
    url: 'knowledge/eslint-plugin-prettier',
  },
  {
    title: '@typescript-eslint/eslint-plugin',
    url: 'knowledge/typescript-eslint-eslint-plugin',
  },
  {
    title: '@typescript-eslint/parser',
    url: 'knowledge/typescript-eslint-parser',
  },

  {
    title: 'concat',
    url: 'knowledge/concat',
  },
  {
    title: 'live-server',
    url: 'knowledge/live-server',
  },
  {
    title: 'npm-run-all',
    url: 'knowledge/npm-run-all',
  },
  {
    title: 'postcss-cli',
    url: 'knowledge/postcss-cli',
  },

  {
    title: 'hover-effect',
    url: 'knowledge/hover-effect',
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
