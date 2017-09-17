/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-destructuring */
const npsUtils = require('nps-utils');

const concurrent = npsUtils.concurrent;

module.exports = {
  scripts: {
    contributors: {
      add: {
        description: 'When new people contribute to the project, run this',
        script: 'all-contributors add',
      },
      generate: {
        description: 'Update the badge and contributors table',
        script: 'all-contributors generate',
      },
    },
    commit: {
      description: 'Commit changes using commitizen',
      script: 'git-cz',
    },
    lint: {
      description: 'lint the entire project with eslint',
      script: 'eslint .',
    },
    test: {
      default: {
        description: 'Collect code coverage',
        script: 'jest --coverage',
      },
      watch: {
        description: 'Run test in interactive watch mode',
        script: 'jest --watch',
      },
    },
    validate: {
      description: 'Run validation to make sure everything is up to standard',
      script: concurrent.nps('lint', 'test'),
    },
  },
  options: {
    logLevel: 'warn',
  },
};
