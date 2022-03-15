module.exports = {
  projects: [
    {
      type: 'category',
      label: 'Webpack Guide',
      items: [
        'projects/webpack-guide/introduction',
        {
          Styling: [
            {
              CSS: ['projects/webpack-guide/styling/css/introduction', 'projects/webpack-guide/styling/css/implementation'],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Rollup Guide',
      items: [
        'projects/rollup-guide/introduction',
        {
          Styling: [
            {
              CSS: ['projects/rollup-guide/styling/css/introduction', 'projects/rollup-guide/styling/css/implementation'],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'npm Build Scripts Guide',
      items: [
        'projects/npm-build-scripts-guide/introduction',
        {
          Styling: [
            {
              CSS: ['projects/npm-build-scripts-guide/styling/css/introduction', 'projects/npm-build-scripts-guide/styling/css/implementation'],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Linting - Code-quality Rules',
      items: [
        'projects/linting-code-quality-rules/introduction',
        {
          Stylelint: [
            {
              CSS: ['projects/linting-code-quality-rules/stylelint/css/introduction', 'projects/linting-code-quality-rules/stylelint/css/implementation'],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Linting - Commit',
      items: ['projects/linting-commit/introduction', 'projects/linting-commit/implementation'],
    },
    {
      type: 'category',
      label: 'Linting - Formatting Rules',
      items: ['projects/linting-formatting-rules/introduction', 'projects/linting-formatting-rules/implementation'],
    },
  ],
  courses: [
    {
      type: 'category',
      label: 'Ignite React.js',
      items: [
        'courses/rocketseat/ignite/react-js/introduction',
        {
          'Chapter 01': ['courses/rocketseat/ignite/react-js/course/chapter-01/section-01'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced CSS and Sass',
      items: [
        'courses/advanced-css-and-sass/advanced-css-and-sass',
        {
          Course: ['courses/advanced-css-and-sass/course/section-01', 'courses/advanced-css-and-sass/course/section-02'],
        },
      ],
    },
  ],
};
