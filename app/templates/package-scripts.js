const npsUtils = require('nps-utils'); // eslint-disable-line
const concurrent = npsUtils.concurrent;
const rimraf = npsUtils.rimraf;
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
      description: 'This uses commitizen to help us generate well formatted commit messages',
      script: 'git-cz',
    },
    test: {
      default: 'jest --coverage',
      watch: 'jest --watch',
    },
    build: {
      description: 'delete the dist directory and run babel to build the files',
      script: series(
        rimraf('dist'),
        'babel --copy-files --out-dir dist --ignore *.test.js src'
      ),
    },
    eslint: {
      description: 'Check for linting errors using eslint',
      script: 'eslint . --cache',
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
      description: 'We automate releases with semantic-release. This should only be run on travis',
      script: series(
        'semantic-release pre',
        'npm publish',
        'semantic-release post'
      ),
    },
    validate: {
      description: 'This runs several scripts to make sure things look good before committing or on clean install',
      script: concurrent.nps('lint', 'build', 'test'),
    },
  },
  options: {
    silent: false,
  },
};

// this is not transpiled
/*
  eslint
  max-len: 0,
  comma-dangle: [
    2,
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      functions: 'never'
    }
  ]
 */
