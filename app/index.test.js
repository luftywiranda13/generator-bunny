import path from 'path';

import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

beforeAll(() =>
  helpers.run(path.join(__dirname, '../app')).inTmpDir().withPrompts({
    moduleName: 'bunny module',
    description: 'as cute as bunny',
    githubUsername: 'bunny',
    website: 'www.wewww.com',
    name: 'yo',
    email: 'hi@bunny.io',
  })
);

describe('generator', () => {
  it('can be required without throwing', () => {
    const app = require('./'); // eslint-disable-line
    assert(app);
  });

  it('renames files', () => {
    assert.file([
      '.all-contributorsrc',
      '.babelrc',
      '.editorconfig',
      '.eslintignore',
      '.eslintrc.json',
      '.flowconfig',
      '.gitattributes',
      '.github/issue_template.md',
      '.github/pull_request_template.md',
      '.gitignore',
      '.npmrc',
      '.travis.yml',
      'package.json',
      'src/index.test.js',
    ]);
    assert.noFile('yo-rc.json');
  });
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

  describe('readme.md', () => {
    it('fills the title & description', () => {
      assert.fileContent('readme.md', '# bunny-module');
      assert.fileContent('readme.md', '> as cute as bunny');
    });

    describe('badges', () => {
      it('package version', () => {
        assert.fileContent(
          'readme.md',
          '[![npm](https://img.shields.io/npm/v/bunny-module.svg?style=flat-square)](https://www.npmjs.com/package/bunny-module)'
        );
      });

      it('download stats', () => {
        assert.fileContent(
          'readme.md',
          '[![npm](https://img.shields.io/npm/dt/bunny-module.svg?style=flat-square)](https://npm-stat.com/charts.html?package=bunny-module&from=2016-04-01)'
        );
      });

      it('build status', () => {
        assert.fileContent(
          'readme.md',
          '[![Travis branch](https://img.shields.io/travis/bunny-module/rust/master.svg?style=flat-square)](https://travis-ci.org/bunny/bunny-module)'
        );
      });

      it('coverage', () => {
        assert.fileContent(
          'readme.md',
          '[![Codecov branch](https://img.shields.io/codecov/c/github/bunny/bunny-module/master.svg?style=flat-square)](https://codecov.io/github/bunny/bunny-module)'
        );
      });

      it('COC', () => {
        assert.fileContent(
          'readme.md',
          '[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](./other/code_of_conduct.md)'
        );
      });

      it('roadmap', () => {
        assert.fileContent(
          'readme.md',
          '[![Roadmap](https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square)](./other/roadmap.md)'
        );
      });
    });

    it('fills the installation instructions', () => {
      assert.fileContent('readme.md', 'npm install --save bunny-module');
    });

    it('fills the usage instructions', () => {
      assert.fileContent(
        'readme.md',
        'import bunnyModule from \'bunny-module\''
      );
    });

    it('fills the FAQ', () => {
      assert.fileContent('readme.md', '### Why should I use `bunny-module`?');
    });

    it('fills the license', () => {
      assert.fileContent('readme.md', 'MIT &copy; [yo](www.wewww.com)');
    });
  });

  describe('src', () => {
    it('fills the index.js', () => {
      assert.fileContent(
        'src/index.js',
        'export default function bunnyModule'
      );
    });

    it('fills the index.test.js', () => {
      assert.fileContent(
        'src/index.test.js',
        'import bunnyModule from \'./index\''
      );
    });
  });

  describe('.travis.yml', () => {
    it("enables 'yarn'", () => {
      assert.fileContent(
        '.travis.yml',
        'yarn: true'
      );
      assert.noFileContent(
        '.travis.yml',
        '- npm'
      );
    });

    it("installs 'codecov'", () => {
      assert.fileContent(
        '.travis.yml',
        'yarn global add codecov'
      );
      assert.fileContent(
        '.travis.yml',
        '- codecov'
      );
    });

    it("runs 'validate' script", () => {
      assert.fileContent(
        '.travis.yml',
        '- yarn start validate'
      );
    });

    it("runs 'release' script", () => {
      assert.fileContent(
        '.travis.yml',
        '- yarn global add semantic-release'
      );
      assert.fileContent(
        '.travis.yml',
        '- semantic-release pre && npm publish && semantic-release post'
      );
    });
  });

  describe('code-of-conduct.md', () => {
    it('fiils the authors email', () => {
      assert.fileContent(
        'other/code_of_conduct.md',
        'reported by contacting the project team at hi@bunny.io'
      );
    });
  });

  describe('license', () => {
    it('fiils the authors & email', () => {
      assert.fileContent(
        'license',
        'Copyright (c) yo <hi@bunny.io>'
      );
    });
  });

  describe('.all-contributorsrc', () => {
    it('fiils with correct informations', () => {
      assert.JSONFileContent('.all-contributorsrc', {
        projectName: 'bunny-module',
        projectOwner: 'bunny',
        contributors: [
          {
            login: 'bunny',
            name: 'yo',
            profile: 'https://github.com/bunny',
          },
        ],
      });
    });
  });

  describe('contributing', () => {
    it('fills correct upstream', () => {
      assert.fileContent(
        'contributing.md',
        'git remote add upstream https://github.com/bunny/bunny-module.git'
      );
    });
  });

  describe('pull_request_template.md', () => {
    it('fills correct upstream', () => {
      assert.fileContent(
        '.github/pull_request_template.md',
        '[`contributing.md`](https://github.com/bunny/bunny-module/blob/master/contributing.md)'
      );
    });
  });
});
