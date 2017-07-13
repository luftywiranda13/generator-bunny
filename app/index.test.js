import path from 'path';

import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

describe('Generator', () => {
  beforeEach(() =>
    helpers.run(path.join(__dirname, '../app')).inTmpDir().withPrompts({
      moduleName: 'bunny module',
      description: 'as cute as bunny',
      githubUsername: 'bunny',
      website: 'www.wewww.com',
      name: 'yo',
      email: 'hi@bunny.io',
    })
  );

  it('can be required without throwing', () => {
    const app = require('./'); // eslint-disable-line
    assert(app);
  });

  it('generates files', () => {
    assert.file([
      '.all-contributorsrc',
      '.babelrc',
      '.editorconfig',
      '.eslintignore',
      '.eslintrc.json',
      '.flowconfig',
      '.gitattributes',
      '.gitignore',
      '.travis.yml',
      'changelog.md',
      'contributing.md',
      'license',
      'package-scripts.js',
      'package.json',
      'readme.md',
      'src/index.js',
      'src/index.test.js',
    ]);
  });

  describe('templating', () => {
    it('fills package.json with correct informations', () => {
      assert.JSONFileContent('package.json', {
        name: 'bunny-module',
        description: 'as cute as bunny',
        repository: {
          type: 'git',
          url: 'git+https://github.com/bunny/bunny-module.git',
        },
        author: {
          name: 'yo',
          email: 'hi@bunny.io',
          url: 'www.wewww.com',
        },
      });
    });

    it('fills installation instructions', () => {
      assert.fileContent('readme.md', 'npm install --save bunny-module');
    });
  });
});
