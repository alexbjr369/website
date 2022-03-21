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
    title: 'Rollup',
    imageUrl: '../img/knowledge/rollup.svg',
    url: 'knowledge/rollup',
  },
  {
    title: 'Webpack',
    imageUrl: '../img/knowledge/webpack.svg',
    url: 'knowledge/webpack',
  },
  {
    title: 'Babel',
    imageUrl: '../img/knowledge/babel.svg',
    url: 'knowledge/babel',
  },
  {
    title: 'React',
    imageUrl: '../img/knowledge/react-js.svg',
    url: 'knowledge/react-js',
  },
  {
    title: 'Browserslist',
    imageUrl: '../img/knowledge/browserslist.svg',
    url: 'knowledge/browserslist',
  },
  {
    title: 'cleanCSS',
    imageUrl: '../img/knowledge/cleancss.svg',
    url: 'knowledge/cleancss',
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
    title: 'clean-css-cli',
    url: 'knowledge/clean-css-cli',
  },
  {
    title: 'html-minifier',
    url: 'knowledge/html-minifier',
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
    title: 'postcss-discard-comments',
    url: 'knowledge/postcss-discard-comments',
  },
  {
    title: 'postcss-import',
    url: 'knowledge/postcss-import',
  },
  {
    title: 'postcss-nested',
    url: 'knowledge/postcss-nested',
  },
  {
    title: 'postcss-preset-env',
    url: 'knowledge/postcss-preset-env',
  },
  {
    title: 'replace-in-file',
    url: 'knowledge/replace-in-file',
  },
  {
    title: 'shx',
    url: 'knowledge/shx',
  },

  {
    title: 'rollup-plugin-styles',
    url: 'knowledge/rollup-plugin-styles',
  },
  {
    title: '@rollup/plugin-node-resolve',
    url: 'knowledge/rollup-plugin-node-resolve',
  },

  {
    title: 'cross-env',
    url: 'knowledge/cross-env',
  },
  {
    title: 'webpack-cli',
    url: 'knowledge/webpack-cli',
  },
  {
    title: 'webpack-dev-server',
    url: 'knowledge/webpack-dev-server',
  },
  {
    title: 'html-webpack-plugin',
    url: 'knowledge/html-webpack-plugin',
  },
  {
    title: 'style-loader',
    url: 'knowledge/style-loader',
  },
  {
    title: 'css-loader',
    url: 'knowledge/css-loader',
  },
  {
    title: 'sass-loader',
    url: 'knowledge/sass-loader',
  },
  {
    title: 'babel-loader',
    url: 'knowledge/babel-loader',
  },

  {
    title: 'react-dom',
    url: 'knowledge/react-dom',
  },

  {
    title: '@babel/cli',
    url: 'knowledge/babel-cli',
  },
  {
    title: '@babel/core',
    url: 'knowledge/babel-core',
  },
  {
    title: '@babel/preset-env',
    url: 'knowledge/babel-preset-env',
  },
  {
    title: '@babel/preset-react',
    url: 'knowledge/babel-preset-react',
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
