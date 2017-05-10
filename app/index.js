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
        type: 'input',
        store: true,
      },
      {
        name: 'name',
        message: "Author's name:",
        default: this.user.git.name(),
        type: 'input',
      },
      {
        name: 'email',
        message: "Author's email:",
        default: this.user.git.email(),
        type: 'input',
      },
      {
        name: 'githubUsername',
        message: 'GitHub username:',
        type: 'input',
        store: true,
      },
      {
        name: 'website',
        message: 'Website:',
        type: 'input',
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
        name: props.name,
        githubUsername: props.githubUsername,
        email: props.email,
        website: props.website,
      };

      // TODO: there's a real problem here whether it's with prettier or eslint
      // prettier-ignore
      this.fs.copyTpl(
          [`${this.templatePath()}/**`],
          this.destinationPath(),
          tpl);

      /* eslint-disable */
      mv('_package.json', 'package.json');
      mv('_all-contributorsrc', '.all-contributorsrc');
      mv('_babelrc', '.babelrc');
      mv('_editorconfig', '.editorconfig');
      mv('_eslintignore', '.eslintignore');
      mv('_eslintrc.json', '.eslintrc.json');
      mv('_flowconfig', '.flowconfig');
      mv('_gitattributes', '.gitattributes');
      mv('_github/issue_template.md', '.github/issue_template.md');
      // prettier-ignore
      mv('_github/pull_request_template.md', '.github/pull_request_template.md');
      mv('_gitignore', '.gitignore');
      mv('_npmrc', '.npmrc');
      mv('_travis.yml', '.travis.yml');
      /* eslint-enable */
    });
  }
  git() {
    this.spawnCommandSync('git', ['init']);
  }
  install() {
    this.log(
      chalk.green(
        '\nAll important files have been generated to your directory.',
      ),
    );

    this.installDependencies({
      bower: false,
      npm: !this.yarn,
      yarn: this.yarn,
    });
  }
};
