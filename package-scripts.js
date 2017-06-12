const npsUtils = require('nps-utils'); // eslint-disable-line
const concurrent = npsUtils.concurrent;
const series = npsUtils.series;

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
    release: {
      description: 'This should only be run on travis',
      script: series(
        'semantic-release pre',
        'npm publish',
        'semantic-release post'
      ),
    },
    validate: {
      description: 'Run validation to make sure everything is up to standard',
      script: concurrent.nps('lint', 'test'),
    },
  },
  options: {
    silent: false,
  },
};
