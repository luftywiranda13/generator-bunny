const camelCase = require('lodash.camelcase');
const chalk = require('chalk');
const isYarn = require('./is-yarn');
const Generator = require('yeoman-generator');
const humanizeUrl = require('humanize-url');
const kebabCase = require('lodash.kebabcase');

module.exports = class extends Generator {
  prompting() {
    this.log();

    return this.prompt([
      {
        name: 'moduleName',
        message: 'Module name:',
        default: this.appname.replace(/\s/g, '-'),
        store: true,
      },
      {
        name: 'description',
        message: 'Description:',
        default: 'as cute as bunny',
        store: true,
      },
      {
        name: 'global',
        message: 'Let user install as global:',
        type: 'confirm',
        default: false,
      },
      {
        name: 'name',
        message: "Author's name:",
        default: this.user.git.name(),
        store: true,
      },
      {
        name: 'email',
        message: "Author's email:",
        default: this.user.git.email(),
        store: true,
      },
      {
        name: 'githubUsername',
        message: 'GitHub username:',
        store: true,
      },
      {
        name: 'website',
        message: 'Website:',
        store: true,
      },
    ]).then((props) => {
      const mv = (from, to) => {
        this.fs.move(this.destinationPath(from), this.destinationPath(to));
      };

      const tpl = {
        moduleName: kebabCase(props.moduleName).toLowerCase(),
        camelModule: camelCase(props.moduleName),
        description: props.description,
        global: props.global,
        name: props.name,
        email: props.email,
        githubUsername: props.githubUsername,
        website: humanizeUrl(props.website),
      };

      this.name = props.name;
      this.log();

      this.fs.copyTpl(
        [`${this.templatePath()}/**`],
        this.destinationPath(),
        tpl
      );

      mv('_package.json', 'package.json');
      mv('_all-contributorsrc', '.all-contributorsrc');
      mv('_babelrc', '.babelrc');
      mv('_editorconfig', '.editorconfig');
      mv('_eslintignore', '.eslintignore');
      mv('_eslintrc.json', '.eslintrc.json');
      mv('_flowconfig', '.flowconfig');
      mv('_gitattributes', '.gitattributes');
      mv('_github/issue_template.md', '.github/issue_template.md');
      mv(
        '_github/pull_request_template.md',
        '.github/pull_request_template.md'
      );
      mv('_gitignore', '.gitignore');
      mv('_npmrc', '.npmrc');
      mv('_travis.yml', '.travis.yml');
    });
  }
  git() {
    this.spawnCommandSync('git', ['init', '--quiet']);
  }
  install() {
    this.log('\x1Bc');
    this.log();
    this.log(
      chalk.green('Important files have been generated to your directory')
    );
    this.log();
    this.log('Installing dependencies..');
    this.log('This might take a couple minutes');
    this.log();

    this.installDependencies({
      skipMessage: true,
      bower: false,
      npm: !isYarn(),
      yarn: isYarn(),
    });
  }
  end() {
    this.log();
    this.log(chalk.cyan(`Thanks for using generator-bunny, ${this.name}!`));
    this.log();
  }
};
