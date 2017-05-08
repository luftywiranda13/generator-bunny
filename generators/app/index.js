/* eslint-disable no-confusing-arrow */
const _s = require('underscore.string'); // eslint-disable-line
const Generator = require('yeoman-generator');
const humanizeUrl = require('humanize-url');
const normalizeUrl = require('normalize-url');
const superb = require('superb');
const utils = require('./utils');

module.exports = class extends Generator {
  constructor(a, b) {
    super(a, b);

    this.option('org', {
      type: 'string',
      desc: 'Publish to a GitHub organization account',
    });
  }
  init() {
    return this.prompt([
      {
        name: 'moduleName',
        message: 'What do you want to name your module?',
        default: _s.slugify(this.appname),
        filter: x => utils.slugifyPackageName(x),
      },
      {
        name: 'moduleDescription',
        message: 'What is your module description?',
        default: `My ${superb()} module`,
      },
      {
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        store: true,
        validate: x => (x.length > 0 ? true : 'You have to provide a username'),
        when: () => !this.options.org,
      },
      {
        name: 'website',
        message: 'What is the URL of your website?',
        store: true,
        validate: x =>
          x.length > 0 ? true : 'You have to provide a website URL',
        filter: x => normalizeUrl(x),
      },
    ]).then((props) => {
      const repoName = utils.repoName(props.moduleName);

      const tpl = {
        moduleName: props.moduleName,
        moduleDescription: props.moduleDescription,
        camelModuleName: _s.camelize(repoName),
        githubUsername: this.options.org || props.githubUsername,
        repoName,
        name: this.user.git.name(),
        email: this.user.git.email(),
        website: props.website,
        humanizedWebsite: humanizeUrl(props.website),
      };

      const mv = (from, to) => {
        this.fs.move(this.destinationPath(from), this.destinationPath(to));
      };

      this.fs.copyTpl(
        [`${this.templatePath()}/**`, '!**/cli.js'],
        this.destinationPath(),
        tpl,
      );

      mv('_package.json', 'package.json');
      mv('all-contributorsrc', '.all-contributorsrc');
      mv('babelrc', '.babelrc');
      mv('editorconfig', '.editorconfig');
      mv('eslintignore', '.eslintignore');
      mv('eslintrc.json', '.eslintrc.json');
      mv('flowconfig', '.flowconfig');
      mv('gitattributes', '.gitattributes');
      mv('github/issue_template.md', '.github/issue_template.md');
      mv('github/pull_request_template.md', '.github/pull_request_template.md');
      mv('gitignore', '.gitignore');
      mv('npmrc', '.npmrc');
      mv('travis.yml', '.travis.yml');
    });
  }
  git() {
    this.spawnCommandSync('git', ['init']);
  }
  install() {
    this.installDependencies({ bower: false });
  }
};
