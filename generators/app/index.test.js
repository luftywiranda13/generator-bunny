import assert from 'yeoman-assert';
import helpers from 'yeoman-test';
import path from 'path';

describe('Generator', () => {
  beforeEach(() =>
    helpers.run(path.join(__dirname, '../app')).withPrompts({
      moduleName: 'bunny module',
      description: 'as cute as bunny',
      githubUsername: 'bunny',
      website: 'www.wewww.com',
      name: 'yo',
      email: 'hi@bunny.io',
    }),
  );

  it('creates files', () => {
    const expected = [
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
    ];

    assert.file(expected);
  });

  it('fills package.json with correct information', () => {
    assert.JSONFileContent('package.json', {
      name: 'bunny-module',
      description: 'as cute as bunny',
    });
  });

  it('converts moduleName to kebabcase', () => {
    assert.JSONFileContent('package.json', {
      name: 'bunny-module',
      description: 'as cute as bunny',
    });
  });
});
