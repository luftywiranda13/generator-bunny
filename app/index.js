const chalk = require('chalk');
const Generator = require('yeoman-generator');
const kebabCase = require('lodash.kebabcase');

module.exports = class extends Generator {
  prompting() {
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
      },
      {
        name: 'email',
        message: "Author's email:",
        default: this.user.git.email(),
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
      {
        name: 'yarn',
        message: 'Use yarn to install dependencies:',
        type: 'confirm',
      },
    ]).then((props) => {
      const mv = (from, to) => {
        this.fs.move(this.destinationPath(from), this.destinationPath(to));
      };

      this.yarn = props.yarn;

      const tpl = {
        moduleName: kebabCase(props.moduleName).toLowerCase(),
        description: props.description,
        global: props.global,
        name: props.name,
        email: props.email,
        githubUsername: props.githubUsername,
        website: props.website,
      };

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
    this.spawnCommandSync('git', ['init']);
  }
  install() {
    this.log(
      chalk.green(
        '\nAll important files have been generated to your directory.\n'
      )
    );

    this.installDependencies({
      bower: false,
      npm: !this.yarn,
      yarn: this.yarn,
    });
  }
  end() {
    this.log(`\nThanks for using${chalk.green(' generator-bunny')}!`);
  }
};
