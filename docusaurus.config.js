module.exports = {
  title: 'Alex Bleggi',
  tagline: '',
  url: 'https://alexbleggi.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'warn', // default: throw
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'alexbjr369',
  projectName: 'alexbjr369/website',
  titleDelimiter: '·', // added
  themeConfig: {
    prism: {
      // added
      theme: require('prism-react-renderer/themes/dracula'),
    },
    announcementBar: {
      // added
      content: ' <p style="margin: 0;">🚧🚧🚧 Under construction... 🚧🚧🚧</p> ',
      isCloseable: false,
    },
    colorMode: {
      // added
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      hideOnScroll: true, // added
      title: 'Alex Bleggi',
      logo: {
        alt: 'Alex Bleggi',
        src: 'img/profile.png',
      },
      items: [
        {
          to: '/knowledge',
          label: 'Knowledge',
          position: 'left',
        },
        {
          to: '/projects',
          label: 'Projects',
          position: 'left',
        },
        {
          to: '/courses',
          label: 'Courses',
          position: 'left',
        },
        {
          to: '/certificates',
          label: 'Certificates',
          position: 'left',
        },
        {
          href: 'https://github.com/alexbjr369',
          position: 'right',
          className: 'navbar-icon navbar-icon_github',
        },
        {
          href: 'https://www.linkedin.com/in/alex-bleggi-377907201/',
          position: 'right',
          className: 'navbar-icon navbar-icon_linkedin',
        },
        {
          href: 'https://www.behance.net/alexbleggi',
          position: 'right',
          className: 'navbar-icon navbar-icon_behance',
        },
        {
          href: 'https://soundcloud.com/alex-bleggi',
          position: 'right',
          className: 'navbar-icon navbar-icon_soundcloud',
        },
        {
          href: 'https://www.udemy.com/user/alex-bleggi-2/',
          position: 'right',
          className: 'navbar-icon navbar-icon_udemy',
        },
        {
          href: 'https://www.npmjs.com/~alexbjr369',
          position: 'right',
          className: 'navbar-icon navbar-icon_npm',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Knowledge',
          items: [],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'Webpack Guide',
              to: 'docs/projects/webpack-guide',
            },
            {
              label: 'Rollup Guide',
              to: 'docs/projects/rollup-guide',
            },
            {
              label: 'npm Build Scripts Guide',
              to: 'docs/projects/npm-build-scripts-guide',
            },
            {
              label: 'Linting - Code-quality Rules',
              to: 'docs/projects/linting-code-quality-rules',
            },
            {
              label: 'Linting - Commit',
              to: 'docs/projects/linting-commit',
            },
            {
              label: 'Linting - Formatting Rules',
              to: 'docs/projects/linting-formatting-rules',
            },
          ],
        },
        {
          title: 'Courses',
          items: [
            {
              label: 'Ignite React.js',
              to: 'docs/ignite/react-js',
            },
            {
              label: 'Advanced CSS and Sass',
              to: 'docs/advanced-css-and-sass',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/alexbjr369',
            },
            {
              label: 'Linkedin',
              to: 'https://www.linkedin.com/in/alex-bleggi-377907201/',
            },
            {
              label: 'Behance',
              to: 'https://www.behance.net/alexbleggi',
            },
            {
              label: 'SoundCloud',
              to: 'https://soundcloud.com/alex-bleggi',
            },
            {
              label: 'Udemy',
              to: 'https://www.udemy.com/user/alex-bleggi-2',
            },
            {
              label: 'npm',
              to: 'https://www.npmjs.com/~alexbjr369',
            },
          ],
        },
      ],
      copyright: `Built with ❤️ and ☕ by <strong><a class="footer__copyright-link" href="https://www.linkedin.com/in/alex-bleggi-377907201/" target="_blank">Alex Bleggi</a></strong>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/alexbj369/website/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/alexbj369/website/edit/master/website/blog/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/variables.css'),

            require.resolve('./src/css/base/base.css'),
            require.resolve('./src/css/base/utilities.css'),

            require.resolve('./src/css/custom/footer.css'),
            require.resolve('./src/css/custom/hero.css'),
            require.resolve('./src/css/custom/highlight.css'),
            require.resolve('./src/css/custom/markdown.css'),
            require.resolve('./src/css/custom/navbar-sidebar.css'),
            require.resolve('./src/css/custom/navbar.css'),

            require.resolve('./src/css/components/built-with-text.css'),
            require.resolve('./src/css/components/built-with.css'),
            require.resolve('./src/css/components/button.css'),
            require.resolve('./src/css/components/feature-text.css'),
            require.resolve('./src/css/components/markdown-code.css'),
            require.resolve('./src/css/components/navbar-icon.css'),

            require.resolve('./src/css/pages/certificates.css'),
            require.resolve('./src/css/pages/courses.css'),
            require.resolve('./src/css/pages/home.css'),
            require.resolve('./src/css/pages/knowledge.css'),
            require.resolve('./src/css/pages/projects.css'),
          ],
        },
        gtag: {
          // added
          trackingID: 'G-YT3YLN5SLX',
        },
        googleAnalytics: {
          // added
          trackingID: 'G-YT3YLN5SLX',
        },
      },
    ],
  ],
};
