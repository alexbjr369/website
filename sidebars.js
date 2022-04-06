module.exports = {
  notes: [
    'notes/notes',
    'notes/bem-methodology/bem-methodology',
    'notes/sass/sass',
    'notes/css/css',
  ],
  projects: [
    {
      type: 'category',
      label: 'Monorepo Guide',
      items: [
        'projects/monorepo-guide/introduction',
        {
          Lerna: [
            'projects/monorepo-guide/lerna/introduction',
            'projects/monorepo-guide/lerna/implementation',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Webpack Guide',
      items: [
        'projects/webpack-guide/introduction',
        {
          Styling: [
            {
              CSS: [
                'projects/webpack-guide/styling/css/introduction',
                'projects/webpack-guide/styling/css/implementation',
              ],
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
              CSS: [
                'projects/rollup-guide/styling/css/introduction',
                'projects/rollup-guide/styling/css/implementation',
              ],
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
              CSS: [
                'projects/npm-build-scripts-guide/styling/css/introduction',
                'projects/npm-build-scripts-guide/styling/css/implementation',
              ],
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
              CSS: [
                'projects/linting-code-quality-rules/stylelint/css/introduction',
                'projects/linting-code-quality-rules/stylelint/css/implementation',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Linting - Commit',
      items: [
        'projects/linting-commit/introduction',
        'projects/linting-commit/implementation',
      ],
    },
    {
      type: 'category',
      label: 'Linting - Formatting Rules',
      items: [
        'projects/linting-formatting-rules/introduction',
        'projects/linting-formatting-rules/implementation',
      ],
    },
  ],
  courses: [
    {
      type: 'category',
      label: 'Ignite React.js',
      items: [
        'courses/rocketseat/ignite/react-js/introduction',
        {
          'Chapter 01': [
            'courses/rocketseat/ignite/react-js/course/chapter-01/section-01',
            'courses/rocketseat/ignite/react-js/course/chapter-01/section-02',
            'courses/rocketseat/ignite/react-js/course/chapter-01/section-03',
            'courses/rocketseat/ignite/react-js/course/chapter-01/section-04',
            'courses/rocketseat/ignite/react-js/course/chapter-01/section-05',
            'courses/rocketseat/ignite/react-js/course/chapter-01/challenge-01',
            'courses/rocketseat/ignite/react-js/course/chapter-01/challenge-02',
          ],
          'Chapter 02': [
            'courses/rocketseat/ignite/react-js/course/chapter-02/section-01',
            'courses/rocketseat/ignite/react-js/course/chapter-02/section-02',
            'courses/rocketseat/ignite/react-js/course/chapter-02/section-03',
            'courses/rocketseat/ignite/react-js/course/chapter-02/section-04',
            'courses/rocketseat/ignite/react-js/course/chapter-02/section-05',
            'courses/rocketseat/ignite/react-js/course/chapter-02/challenge-01',
          ],
          'Chapter 03': [
            'courses/rocketseat/ignite/react-js/course/chapter-03/section-01',
            'courses/rocketseat/ignite/react-js/course/chapter-03/section-02',
            'courses/rocketseat/ignite/react-js/course/chapter-03/section-03',
          ],
          'Chapter 04': [
            'courses/rocketseat/ignite/react-js/course/chapter-04/section-01',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced CSS and Sass',
      items: [
        'courses/advanced-css-and-sass/advanced-css-and-sass',
        {
          Course: [
            'courses/advanced-css-and-sass/course/section-01',
            'courses/advanced-css-and-sass/course/section-02',
            'courses/advanced-css-and-sass/course/section-03',
            'courses/advanced-css-and-sass/course/section-04',
            'courses/advanced-css-and-sass/course/section-05',
          ],
        },
      ],
    },
  ],
};
