const npsUtils = require('nps-utils'); // eslint-disable-line
const concurrent = npsUtils.concurrent;
const rimraf = npsUtils.rimraf;
const series = npsUtils.series;

module.exports = {
  scripts: {
    commit: {
      description: 'Commit changes using commitizen',
      script: 'git-cz',
    },
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
    build: {
      description: 'delete the dist directory and run babel to build the files',
      script: series(
        rimraf('dist'),
        'babel --copy-files --out-dir dist --ignore *.test.js src',
      ),
    },
    eslint: {
      description: 'Check for linting errors using eslint',
      script: 'eslint src',
    },
    flow: {
      default: {
        description: 'Run typechecking with Flow',
        script: 'flow --quiet',
      },
      typed: {
        description: 'Install libdefs',
        script: 'flow-typed update',
      },
    },
    lint: {
      description: 'lint the entire project with eslint & flow',
      script: concurrent.nps('flow', 'eslint'),
    },
    release: {
      description: 'This should only be run on travis',
      script: series(
        'semantic-release pre',
        'npm publish',
        'semantic-release post',
      ),
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
      script: concurrent.nps('lint', 'build', 'test'),
    },
  },
  options: {
    silent: false,
  },
};
