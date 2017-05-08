const Generator = require('yeoman-generator');
const kebabCase = require('lodash.kebabcase');

module.exports = class extends Generator {
  init() {
    return this.prompt([
      {
        name: 'moduleName',
        message: 'What do you want to name your module?',
        default: this.appname.replace(/\s/g, '-'),
        store: true,
      },
      {
        name: 'description',
        message: 'Description?',
        default: 'as cute as bunny',
        type: 'input',
        store: true,
      },
      {
        name: 'name',
        message: 'Your name?',
        default: this.user.git.name(),
        type: 'input',
      },
      {
        name: 'email',
        message: 'Email address?',
        default: this.user.git.email(),
        type: 'input',
      },
      {
        name: 'githubUsername',
        message: 'GitHub username?',
        type: 'input',
        store: true,
      },
      {
        name: 'website',
        message: 'URL of your website?',
        type: 'input',
        store: true,
      },
    ]).then((props) => {
      const mv = (from, to) => {
        this.fs.move(this.destinationPath(from), this.destinationPath(to));
      };

      const tpl = {
        moduleName: kebabCase(props.moduleName).toLowerCase(),
        description: props.description,
        name: props.name,
        githubUsername: props.githubUsername,
        email: props.email,
        website: props.website,
      };

      this.fs.copyTpl(
        [`${this.templatePath()}/**`],
        this.destinationPath(),
        tpl);

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
