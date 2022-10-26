module.exports = {
  notes: [
    'notes/notes',
    'notes/unit-testing/unit-testing',
    'notes/angular/angular',
    {
      type: 'category',
      label: 'JavaScript',
      items: [
        'notes/javascript/introduction',
        'notes/javascript/overview',
        'notes/javascript/data-types',
        'notes/javascript/values-variables',
        'notes/javascript/operators',
        'notes/javascript/control-structures',
        'notes/javascript/arrays',
        'notes/javascript/functions',
        'notes/javascript/objects',
        'notes/javascript/dom',
        'notes/javascript/data-structures',
      ],
    },
    'notes/bem-methodology/bem-methodology',
    'notes/sass/sass',
    'notes/css/css',
  ],
  projects: [
    {
      type: 'category',
      label: 'HSL Color System',
      items: [
        'projects/hsl-color-system/introduction',
        'projects/hsl-color-system/implementation',
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
            {
              Less: [
                'projects/linting-code-quality-rules/stylelint/less/introduction',
                'projects/linting-code-quality-rules/stylelint/less/implementation',
              ],
            },
            {
              Sass: [
                'projects/linting-code-quality-rules/stylelint/sass/introduction',
                'projects/linting-code-quality-rules/stylelint/sass/implementation',
              ],
            },
            {
              SCSS: [
                'projects/linting-code-quality-rules/stylelint/scss/introduction',
                'projects/linting-code-quality-rules/stylelint/scss/implementation',
              ],
            },
            {
              Stylus: [
                'projects/linting-code-quality-rules/stylelint/stylus/introduction',
                'projects/linting-code-quality-rules/stylelint/stylus/implementation',
              ],
            },
          ],
          ESLint: [
            {
              JavaScript: [
                'projects/linting-code-quality-rules/eslint/javascript/introduction',
                'projects/linting-code-quality-rules/eslint/javascript/implementation',
              ],
            },
            {
              Typescript: [
                'projects/linting-code-quality-rules/eslint/typescript/introduction',
                'projects/linting-code-quality-rules/eslint/typescript/implementation',
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
  courseProjects: [
    {
      type: 'category',
      label: 'Natours',
      items: [
        'projects/natours/introduction',
      ],
    },
    {
      type: 'category',
      label: 'toni&guy',
      items: [
        'projects/toni-and-guy/introduction',
      ],
    },
  ],
  courses: [
    {
      type: 'category',
      label: 'Ignite Node.js',
      items: [
        'courses/rocketseat/ignite/node-js/introduction',
        {
          'Chapter 01': [
            'courses/rocketseat/ignite/node-js/course/chapter-01/section-01',
            'courses/rocketseat/ignite/node-js/course/chapter-01/section-02',
            'courses/rocketseat/ignite/node-js/course/chapter-01/section-03',
          ],
          'Chapter 02': [
            'courses/rocketseat/ignite/node-js/course/chapter-02/section-01',
            'courses/rocketseat/ignite/node-js/course/chapter-02/section-02',
          ],
        },
      ],
    },
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
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'JavaScript Unit Testing',
      items: [
        'courses/javascript-unit-testing/javascript-unit-testing',
        {
          Course: [
            'courses/javascript-unit-testing/course/section-01',
            'courses/javascript-unit-testing/course/section-02',
            'courses/javascript-unit-testing/course/section-03',
            'courses/javascript-unit-testing/course/section-04',
            'courses/javascript-unit-testing/course/section-05',
            'courses/javascript-unit-testing/course/section-06',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'The Complete Guide to Angular',
      items: [
        'courses/the-complete-guide-to-angular/the-complete-guide-to-angular',
        {
          Course: [
            'courses/the-complete-guide-to-angular/course/section-01',
            'courses/the-complete-guide-to-angular/course/section-02',
            'courses/the-complete-guide-to-angular/course/section-03',
            'courses/the-complete-guide-to-angular/course/section-04',
            'courses/the-complete-guide-to-angular/course/section-05',
            'courses/the-complete-guide-to-angular/course/section-06',
            'courses/the-complete-guide-to-angular/course/section-07',
            'courses/the-complete-guide-to-angular/course/section-08',
            'courses/the-complete-guide-to-angular/course/section-09',
            'courses/the-complete-guide-to-angular/course/section-10',
            'courses/the-complete-guide-to-angular/course/section-11',
            'courses/the-complete-guide-to-angular/course/section-12',
            'courses/the-complete-guide-to-angular/course/section-13',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Vue The Complete Guide',
      items: [
        'courses/vue-the-complete-guide/vue-the-complete-guide',
      ],
    },
    {
      type: 'category',
      label: 'React The Complete Guide',
      items: [
        'courses/react-the-complete-guide/react-the-complete-guide',
      ],
    },
    {
      type: 'category',
      label: 'Web Components and Stencil.js',
      items: [
        'courses/web-components-stencil-js/web-components-stencil-js',
      ],
    },
    {
      type: 'category',
      label: 'Understanding TypeScript',
      items: [
        'courses/understanding-typescript/understanding-typescript',
      ],
    },
    {
      type: 'category',
      label: 'The Complete JavaScript Course',
      items: [
        'courses/the-complete-javascript-course/the-complete-javascript-course',
        {
          'Course': [
            'courses/the-complete-javascript-course/course/section-01',
            'courses/the-complete-javascript-course/course/section-02',
            'courses/the-complete-javascript-course/course/section-03',
            'courses/the-complete-javascript-course/course/section-04',
            'courses/the-complete-javascript-course/course/section-05',
            'courses/the-complete-javascript-course/course/section-06',
            'courses/the-complete-javascript-course/course/section-07',
            'courses/the-complete-javascript-course/course/section-08',
            'courses/the-complete-javascript-course/course/section-09',
            'courses/the-complete-javascript-course/course/section-10',
            'courses/the-complete-javascript-course/course/section-11',
          ],
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
            'courses/advanced-css-and-sass/course/section-06',
            'courses/advanced-css-and-sass/course/section-07',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced Animations and Interactions with Ionic',
      items: [
        'courses/advanced-animations-and-interactions-with-ionic/advanced-animations-and-interactions-with-ionic',
        {
          Course: [
            'courses/advanced-animations-and-interactions-with-ionic/course/section-01',
            'courses/advanced-animations-and-interactions-with-ionic/course/section-02',
            'courses/advanced-animations-and-interactions-with-ionic/course/section-03',
          ],
        },
      ],
    },
  ],
};
