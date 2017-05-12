import assert from 'yeoman-assert';
import helpers from 'yeoman-test';
import path from 'path';

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
    var app = require('./'); // eslint-disable-line
    expect(app).toBeDefined();
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
      '.npmrc',
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

  describe('module name', () => {
    it('creates a kebab-case name', () => {
      assert.JSONFileContent('package.json', {
        name: 'bunny-module',
      });
    });

    it('creates a camelCase name', () => {
      assert.fileContent('readme.md', 'console.log(bunnyModule);');
    });
  });

  describe('templating', () => {
    it('fills package.json with correct informations', () => {
      assert.JSONFileContent('package.json', {
        name: 'bunny-module',
        description: 'as cute as bunny',
        author: 'yo <hi@bunny.io>',
        repository: {
          type: 'git',
          url: 'github.com/bunny/bunny-module.git',
        },
        homepage: 'https://github.com/bunny/bunny-module#readme',
      });
    });

    it('writes installation instructions', () => {
      assert.fileContent('readme.md', 'npm install --save bunny-module');
      assert.fileContent('readme.md', 'yarn add bunny-module');
    });
  });
});
