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
        message: "What's the project description?",
        default: 'as cute as bunny',
        type: 'input',
      },
      {
        name: 'githubUsername',
        message: "What's your GitHub username?",
        type: 'input',
        store: true,
      },
      {
        name: 'website',
        message: "What's the URL of your website?",
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
        name: this.user.git.name(),
        githubUsername: props.githubUsername,
        email: this.user.git.email(),
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
};
